// Builds the complete visual world (materials, level, sky, ground, environment, pipeline).
import * as THREE from 'three';
import { MaterialLibrary, WET } from './materials.js';
import { buildLevel } from './level.js';
import { buildSky } from './sky.js';
import { PlanarReflection, buildGround } from './wet.js';
import { Pipeline } from './pipeline.js';

export class World {
  constructor(renderer, quality) {
    this.renderer = renderer;
    this.q = quality;
    this.scene = new THREE.Scene();
    this.time = WET.uniforms.uTime;
    this.camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.06, 2000);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);
    this.lib = new MaterialLibrary(renderer, quality);
    this.freeSpots = [];
    this.dynamicPoints = [];
  }

  // Yields loading steps: [label, fn]
  steps() {
    return [
      ...this.lib.steps(),
      ['Assembling yard', () => {
        this.level = buildLevel(this.scene, this.lib.mats, this.q);
        this.sky = buildSky(this.scene, this.lib.mats, this.time);
        this.refl = new PlanarReflection(this.renderer, this.q.reflScale, this.q.reflScale > 0);
        const g = buildGround(this.scene, this.lib, this.refl, this.time);
        this.ground = g.ground; this.water = g.water;
      }],
    ];
  }

  // Light list shared with particle shaders (rain, smoke) so they glow near lamps
  lightRig() {
    if (this._rig) return this._rig;
    const all = [...this.level.lights.shadowSpots, ...this.freeSpots, ...this.level.lights.points, ...this.dynamicPoints];
    const N = all.length;
    const mk = (f) => Array.from({ length: N }, f);
    this._rig = {
      lights: all,
      uniforms: {
        uLPos: { value: mk(() => new THREE.Vector3()) }, uLDir: { value: mk(() => new THREE.Vector3()) },
        uLCol: { value: mk(() => new THREE.Vector3()) }, uLCos: { value: mk(() => new THREE.Vector2()) },
      },
      glsl: `uniform vec3 uLPos[${N}]; uniform vec3 uLDir[${N}]; uniform vec3 uLCol[${N}]; uniform vec2 uLCos[${N}];
        vec3 lightAt(vec3 p, vec3 amb){
          vec3 c = amb;
          for(int i = 0; i < ${N}; i++){
            vec3 L = uLPos[i] - p; float d2 = max(dot(L, L), 0.3);
            vec3 l = L * inversesqrt(d2);
            float spot = uLCos[i].x < -1.5 ? 1.0 : smoothstep(uLCos[i].x, uLCos[i].y, dot(-l, uLDir[i]));
            c += uLCol[i] * spot / d2;
          }
          return c;
        }`,
    };
    return this._rig;
  }

  updateLightRig() {
    const rig = this._rig; if (!rig) return;
    const u = rig.uniforms, tmp = new THREE.Vector3();
    rig.lights.forEach((l, i) => {
      u.uLPos.value[i].setFromMatrixPosition(l.matrixWorld);
      const k = l.visible ? l.intensity : 0;
      u.uLCol.value[i].set(l.color.r * k, l.color.g * k, l.color.b * k);
      if (l.isSpotLight) {
        tmp.setFromMatrixPosition(l.target.matrixWorld);
        u.uLDir.value[i].copy(tmp).sub(u.uLPos.value[i]).normalize();
        u.uLCos.value[i].set(Math.cos(l.angle), Math.cos(l.angle * (1 - l.penumbra)));
      } else u.uLCos.value[i].set(-2, -2);
    });
  }

  // Called after gameplay objects added their lights
  finalize() {
    this.pipeline = new Pipeline(this.renderer, this.q);
    this.pipeline.setupLights(this.level.lights.shadowSpots, this.freeSpots, [...this.level.lights.points, ...this.dynamicPoints]);
    this.reflHidden = [this.ground, this.water];
  }

  captureEnvironment(hidden = []) {
    const r = this.renderer;
    const cubeRT = new THREE.WebGLCubeRenderTarget(128, { type: THREE.HalfFloatType });
    const cubeCam = new THREE.CubeCamera(0.1, 1500, cubeRT);
    cubeCam.position.set(0, 2.2, 2);
    this.scene.add(cubeCam);
    const vis = hidden.map(o => o.visible);
    hidden.forEach(o => (o.visible = false));
    const prevFog = this.scene.fog;
    this.scene.fog = new THREE.FogExp2(0x0b0d12, 0.02);
    r.shadowMap.needsUpdate = true;
    cubeCam.update(r, this.scene);
    this.scene.fog = prevFog;
    hidden.forEach((o, i) => (o.visible = vis[i]));
    const pm = new THREE.PMREMGenerator(r);
    const env = pm.fromCubemap(cubeRT.texture);
    this.scene.environment = env.texture;
    this.scene.environmentIntensity = 2.4;
    pm.dispose();
    cubeRT.dispose();
    this.scene.remove(cubeCam);
  }

  setSize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.refl.setSize(w, h);
    this.pipeline.setSize(w, h);
  }

  update(dt, t) {
    // neon flicker
    for (const f of this.level.lights.flicker) {
      const ph = t * 1.0;
      let k = 1;
      const burst = Math.sin(ph * 0.7) > 0.93 || Math.sin(ph * 0.31 + 1.0) > 0.985;
      if (burst) k = Math.random() < 0.5 ? 0.05 : 1;
      f.mat.emissiveIntensity = f.base * k;
      f.light.intensity = f.lightBase * (0.75 + 0.25 * k);
    }
  }

  render(dt) {
    this.updateLightRig();
    this.pipeline.render(this.scene, this.camera, this.refl, this.reflHidden, dt);
  }
}
