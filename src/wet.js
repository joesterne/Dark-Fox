// Wet asphalt ground and harbour water, both using a shared planar reflection of the scene.
import * as THREE from 'three';

export class PlanarReflection {
  constructor(renderer, scale, enabled = true) {
    this.renderer = renderer;
    this.scale = scale;
    this.enabled = enabled;
    this.camera = new THREE.PerspectiveCamera();
    this.textureMatrix = new THREE.Matrix4();
    this.rt = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType, generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter,
    });
    this.fog = new THREE.FogExp2(0x0b0d12, 0.022);
    this._plane = new THREE.Plane();
    this._normal = new THREE.Vector3(0, 1, 0);
    this._rp = new THREE.Vector3();
    this._cp = new THREE.Vector3();
    this._rot = new THREE.Matrix4();
    this._look = new THREE.Vector3(0, 0, -1);
    this._view = new THREE.Vector3();
    this._target = new THREE.Vector3();
    this._clip = new THREE.Vector4();
    this._q = new THREE.Vector4();
    if (!enabled) {
      // 1x1 black fallback
      this.rt.setSize(1, 1);
    }
  }

  setSize(w, h) {
    if (!this.enabled) return;
    this.rt.setSize(Math.max(2, Math.floor(w * this.scale)), Math.max(2, Math.floor(h * this.scale)));
  }

  update(scene, camera, hidden) {
    if (!this.enabled) return;
    const rp = this._rp.set(0, 0, 0), normal = this._normal;
    const cp = this._cp.setFromMatrixPosition(camera.matrixWorld);
    const view = this._view.subVectors(rp, cp);
    if (view.dot(normal) > 0) return;
    view.reflect(normal).negate().add(rp);
    this._rot.extractRotation(camera.matrixWorld);
    const look = this._look.set(0, 0, -1).applyMatrix4(this._rot).add(cp);
    const target = this._target.subVectors(rp, look).reflect(normal).negate().add(rp);
    const vc = this.camera;
    vc.position.copy(view);
    vc.up.set(0, 1, 0).applyMatrix4(this._rot).reflect(normal);
    vc.lookAt(target);
    vc.far = camera.far; vc.near = camera.near;
    vc.updateMatrixWorld();
    vc.projectionMatrix.copy(camera.projectionMatrix);
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.textureMatrix.multiply(vc.projectionMatrix).multiply(vc.matrixWorldInverse);
    // oblique near plane clipping (Lengyel)
    this._plane.setFromNormalAndCoplanarPoint(normal, rp).applyMatrix4(vc.matrixWorldInverse);
    const clip = this._clip.set(this._plane.normal.x, this._plane.normal.y, this._plane.normal.z, this._plane.constant);
    const e = vc.projectionMatrix.elements, q = this._q;
    q.x = (Math.sign(clip.x) + e[8]) / e[0];
    q.y = (Math.sign(clip.y) + e[9]) / e[5];
    q.z = -1.0;
    q.w = (1.0 + e[10]) / e[14];
    clip.multiplyScalar(2.0 / clip.dot(q));
    e[2] = clip.x; e[6] = clip.y; e[10] = clip.z + 1.0 - 0.003; e[14] = clip.w;

    const r = this.renderer;
    const vis = hidden.map(o => o.visible);
    hidden.forEach(o => (o.visible = false));
    const prevFog = scene.fog;
    scene.fog = this.fog;
    const prevRT = r.getRenderTarget();
    r.setRenderTarget(this.rt);
    r.clear();
    r.render(scene, vc);
    r.setRenderTarget(prevRT);
    scene.fog = prevFog;
    hidden.forEach((o, i) => (o.visible = vis[i]));
  }
}

const RIPPLE_GLSL = /* glsl */`
float rh(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 rippleLayer(vec2 p, float t, float cell, float seed){
  vec2 g = p / cell;
  vec2 id = floor(g);
  vec2 f = fract(g) - 0.5;
  float r1 = rh(id + seed), r2 = rh(id + seed + 17.3);
  vec2 c = vec2(r1, r2) * 0.5 - 0.25;
  float age = fract(t * (0.7 + r1 * 0.6) + r2);
  vec2 d = f - c;
  float dist = length(d) * cell;
  float radius = age * cell * 0.42;
  float x = dist - radius;
  float ring = sin(x * 140.0) * exp(-x * x * 9000.0) * (1.0 - age) * (1.0 - age);
  return ring * normalize(d + 1e-5);
}
vec2 rainRipples(vec2 p, float t){
  vec2 n = rippleLayer(p, t, 0.42, 0.0);
  n += rippleLayer(p + vec2(0.21, 0.13), t * 1.1 + 0.37, 0.42, 5.0);
  n += rippleLayer(p + vec2(0.07, 0.29), t * 0.9 + 0.71, 0.33, 9.0) * 0.8;
  return n;
}
`;

function patchReflective(mat, refl, mask, opts) {
  const uniforms = {
    uRefl: { value: refl.rt.texture }, uReflMatrix: { value: refl.textureMatrix },
    uMask: { value: mask }, uTime: opts.time, uReflOn: { value: refl.enabled ? 1 : 0 },
  };
  mat.userData.uniforms = uniforms;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform mat4 uReflMatrix; varying vec4 vReflCoord; varying vec3 vWPos;')
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
        vec4 wp4 = modelMatrix * vec4(transformed, 1.0);
        vWPos = wp4.xyz; vReflCoord = uReflMatrix * wp4;`);
    let frag = shader.fragmentShader.replace('#include <common>', `#include <common>
      uniform sampler2D uRefl; uniform sampler2D uMask; uniform float uTime; uniform float uReflOn;
      varying vec4 vReflCoord; varying vec3 vWPos;
      ${RIPPLE_GLSL}
      float gPuddle = 0.0; float gWet = 0.0; vec2 gRip = vec2(0.0);
      float lineMask(float d, float w){ return 1.0 - smoothstep(w * 0.5 - 0.004, w * 0.5 + 0.004, abs(d)); }
    `);
    if (opts.water) {
      frag = frag
        .replace('#include <map_fragment>', `#include <map_fragment>
          gPuddle = 1.0; gWet = 1.0;`)
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          {
            vec2 p = vWPos.xz;
            float t = uTime;
            vec2 w = vec2(0.0);
            w += vec2(sin(p.x * 0.35 + t * 0.9 + p.y * 0.12), cos(p.y * 0.31 - t * 0.7)) * 0.05;
            w += vec2(sin(p.x * 1.3 - t * 1.7 + p.y * 0.8), cos(p.y * 1.1 + t * 1.3 - p.x * 0.4)) * 0.03;
            w += vec2(sin(p.x * 4.1 + t * 3.1 + p.y * 2.3), cos(p.y * 3.7 - t * 2.9 + p.x * 1.9)) * 0.012;
            gRip = rainRipples(p, t) * 0.35 + w;
            vec3 wn = normalize(vec3(-gRip.x, 1.0, -gRip.y));
            normal = normalize((viewMatrix * vec4(wn, 0.0)).xyz);
          }`);
    } else {
      frag = frag
        .replace('#include <map_fragment>', `#include <map_fragment>
        {
          vec4 m = texture2D(uMask, vWPos.xz / 36.0);
          gPuddle = m.r; gWet = clamp(m.a * 0.65 + 0.35, 0.0, 1.0);
          diffuseColor.rgb *= mix(0.8, 1.18, m.g);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.75, 0.68, 0.6), m.b * 0.4);
          // painted markings
          float wear = smoothstep(0.25, 0.75, texture2D(uMask, vWPos.xz / 3.7 + 0.31).g);
          float paint = 0.0; vec3 pcol = vec3(0.0);
          // yellow hatched zone in front of the loading dock
          vec2 q = vWPos.xz - vec2(-12.0, -16.6);
          float box = step(abs(q.x), 5.0) * step(abs(q.y), 2.0);
          float border = box * (1.0 - step(abs(q.x), 4.85) * step(abs(q.y), 1.85));
          float hatch = box * lineMask(fract((q.x + q.y) / 1.2) - 0.5, 0.18);
          float yellow = max(border, hatch);
          // white parking bays along the south
          vec2 b = vWPos.xz - vec2(-8.0, 21.0);
          float bays = step(abs(b.y), 2.5) * step(-12.0, b.x) * step(b.x, 10.0) * lineMask(mod(b.x, 2.75) - 1.375, 0.12);
          float bayLine = step(-12.0, b.x) * step(b.x, 10.0) * lineMask(b.y + 2.5, 0.12);
          // walkway line
          float walk = step(-20.0, vWPos.z) * step(vWPos.z, 20.0) * lineMask(vWPos.x - 0.6, 0.12) * step(0.4, fract(vWPos.z / 3.0));
          float white = max(max(bays, bayLine), walk);
          paint = max(yellow, white) * (1.0 - wear * 0.85);
          pcol = yellow > white ? vec3(0.62, 0.42, 0.04) : vec3(0.62, 0.62, 0.6);
          diffuseColor.rgb = mix(diffuseColor.rgb, pcol, paint * 0.9);
          // wet darkening
          diffuseColor.rgb *= mix(1.0, 0.5, gWet);
          diffuseColor.rgb *= mix(1.0, 0.45, gPuddle);
        }`)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
          roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.38, gWet);
          roughnessFactor = mix(roughnessFactor, 0.035, gPuddle);`)
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          {
            vec3 flatN = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
            normal = normalize(mix(normal, flatN, gPuddle * 0.92));
            gRip = rainRipples(vWPos.xz, uTime) * (0.25 + 0.75 * gPuddle) * gWet;
            vec3 rn = normalize((viewMatrix * vec4(-gRip.x * 0.6, 0.0, -gRip.y * 0.6, 0.0)).xyz + normal);
            normal = normalize(mix(normal, rn, 0.9));
          }`);
    }
    frag = frag.replace('#include <opaque_fragment>', `
      {
        vec3 V = normalize(vViewPosition);
        float NdV = clamp(dot(normal, -V) , 0.0, 1.0);
        float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
        vec2 ruv = vReflCoord.xy / vReflCoord.w;
        ruv += gRip * ${opts.water ? '0.045' : '0.035'};
        float rough = clamp(roughnessFactor, 0.0, 1.0);
        float lod = rough * 7.0 + ${opts.water ? '1.6' : '0.0'};
        vec3 rc = vec3(0.0);
        float stretch = (0.004 + rough * 0.05);
        rc += textureLod(uRefl, ruv + vec2(0.0, -2.0 * stretch), lod + 1.0).rgb * 0.12;
        rc += textureLod(uRefl, ruv + vec2(0.0, -1.0 * stretch), lod + 0.5).rgb * 0.22;
        rc += textureLod(uRefl, ruv, lod).rgb * 0.32;
        rc += textureLod(uRefl, ruv + vec2(0.0, 1.0 * stretch), lod + 0.5).rgb * 0.22;
        rc += textureLod(uRefl, ruv + vec2(0.0, 2.0 * stretch), lod + 1.0).rgb * 0.12;
        float strength = ${opts.water ? '1.0' : 'mix(0.35, 1.0, gPuddle) * gWet'} * (1.0 - rough * 0.6);
        outgoingLight += rc * F * strength * uReflOn;
      }
      #include <opaque_fragment>`);
    shader.fragmentShader = frag;
  };
  mat.customProgramCacheKey = () => (opts.water ? 'water' : 'ground') + '-refl';
}

export function buildGround(scene, lib, refl, time) {
  const T = lib.tex;
  const geo = new THREE.PlaneGeometry(92, 120, 1, 1);
  geo.rotateX(-Math.PI / 2);
  geo.translate(-14, 0, 0);
  // world uv
  const pos = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i) / T.asphalt.tile[0], -pos.getZ(i) / T.asphalt.tile[1]);
  const mat = new THREE.MeshStandardMaterial({
    map: T.asphalt.map, normalMap: T.asphalt.normalMap, roughnessMap: T.asphalt.ormMap,
    roughness: 1, metalness: 0, envMapIntensity: 0.45,
  });
  mat.normalScale.set(1.5, 1.5);
  patchReflective(mat, refl, T.groundmask.map, { time });
  const ground = new THREE.Mesh(geo, mat);
  ground.receiveShadow = true;
  ground.name = 'ground';
  scene.add(ground);

  const wgeo = new THREE.PlaneGeometry(1200, 1400, 1, 1);
  wgeo.rotateX(-Math.PI / 2);
  wgeo.translate(32 + 600, -1.5, 0);
  const wmat = new THREE.MeshStandardMaterial({ color: 0x020304, roughness: 0.06, metalness: 0, envMapIntensity: 0.25 });
  patchReflective(wmat, refl, T.groundmask.map, { time, water: true });
  const water = new THREE.Mesh(wgeo, wmat);
  water.name = 'water';
  water.receiveShadow = true;
  scene.add(water);
  return { ground, water };
}
