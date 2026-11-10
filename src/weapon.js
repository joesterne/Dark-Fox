// First-person viewmodel: procedural carbine with holographic sight, gloved hands, animation and firing.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ONE = V(1, 1, 1);
const M4 = (x, y, z, rx = 0, ry = 0, rz = 0, s = ONE) => new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'XYZ')), s);

function vmPatch(mat, U) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.uVMProj = U.uVMProj;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform mat4 uVMProj;')
      .replace('#include <project_vertex>', '#include <project_vertex>\n  gl_Position = uVMProj * mvPosition;\n  gl_Position.z = gl_Position.z * 0.03 - 0.97 * gl_Position.w;');
  };
  mat.customProgramCacheKey = () => 'viewmodel-' + mat.uuid.slice(0, 4);
  return mat;
}

class PartBuilder {
  constructor() { this.groups = {}; }
  add(geo, mat, m) {
    let g = geo.index ? geo.toNonIndexed() : geo;
    if (m) g.applyMatrix4(m);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    (this.groups[mat] ||= []).push(g);
  }
  box(w, h, d, mat, x, y, z, rx = 0, ry = 0, rz = 0) { this.add(new THREE.BoxGeometry(w, h, d), mat, M4(x, y, z, rx, ry, rz)); }
  rbox(w, h, d, r, mat, x, y, z, rx = 0, ry = 0, rz = 0) { this.add(new RoundedBoxGeometry(w, h, d, 2, r), mat, M4(x, y, z, rx, ry, rz)); }
  cyl(r0, r1, len, seg, mat, x, y, z, rx = Math.PI / 2, ry = 0, rz = 0) { this.add(new THREE.CylinderGeometry(r0, r1, len, seg), mat, M4(x, y, z, rx, ry, rz)); }
  build(parent, mats) {
    for (const [k, list] of Object.entries(this.groups)) {
      const mesh = new THREE.Mesh(mergeGeometries(list, false), mats[k]);
      mesh.frustumCulled = false;
      mesh.receiveShadow = true;
      parent.add(mesh);
    }
  }
}

function extrudeProfile(points, depth, bevel = 0.002) {
  const sh = new THREE.Shape();
  sh.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) sh.lineTo(points[i][0], points[i][1]);
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 4 });
  g.translate(0, 0, -depth / 2);
  // profile is in (z, y) of the gun -> rotate so shape x maps to gun z
  g.rotateY(-Math.PI / 2);
  return g;
}

function buildArm(P, wrist, dir) {
  const d = dir.clone().normalize();
  const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), d);
  // glove cuff
  P.add(new THREE.CylinderGeometry(0.036, 0.034, 0.07, 14), 'gloveDark', new THREE.Matrix4().compose(wrist.clone().addScaledVector(d, 0.03), q, ONE));
  // sleeve
  const sl = new THREE.CylinderGeometry(0.055, 0.042, 0.42, 16, 4);
  // wrinkle the sleeve slightly
  const pos = sl.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const a = Math.atan2(z, x);
    const k = 1 + Math.sin(a * 3 + y * 25) * 0.05 + Math.sin(y * 40 + a) * 0.03;
    pos.setXYZ(i, x * k, y, z * k);
  }
  sl.computeVertexNormals();
  P.add(sl, 'sleeve', new THREE.Matrix4().compose(wrist.clone().addScaledVector(d, 0.27), q, ONE));
}

export class Weapon {
  constructor(camera, mats, tex, world, fx, audio) {
    this.camera = camera;
    this.world = world;
    this.fx = fx;
    this.audio = audio;
    this.U = { uVMProj: { value: new THREE.Matrix4() } };
    this.vmCam = new THREE.PerspectiveCamera(54, 1, 0.01, 10);
    this.baseFov = 60; this.adsFov = 42;

    const T = tex;
    const std = (o) => vmPatch(new THREE.MeshStandardMaterial(o), this.U);
    this.mats = {
      anod: std({ color: 0x2a2c30, roughness: 0.36, metalness: 0.6, envMapIntensity: 2.2, map: T.grunge.map, normalMap: T.grunge.normalMap, roughnessMap: T.grunge.ormMap, normalScale: new THREE.Vector2(0.25, 0.25) }),
      steel: std({ color: 0x2c2d30, roughness: 0.42, metalness: 0.85, envMapIntensity: 2.2, map: T.grunge.map, roughnessMap: T.grunge.ormMap }),
      steelBright: std({ color: 0x6c6e72, roughness: 0.3, metalness: 1.0, roughnessMap: T.grunge.ormMap }),
      polymer: std({ color: 0x1d1e20, roughness: 0.62, envMapIntensity: 1.8, metalness: 0, map: T.stipple.map, normalMap: T.stipple.normalMap, roughnessMap: T.stipple.ormMap }),
      tan: std({ color: 0x7a6850, roughness: 0.66, envMapIntensity: 1.6, metalness: 0, map: T.stipple.map, normalMap: T.stipple.normalMap, roughnessMap: T.stipple.ormMap, normalScale: new THREE.Vector2(0.6, 0.6) }),
      rubber: std({ color: 0x0c0c0d, roughness: 0.92, metalness: 0, normalMap: T.stipple.normalMap }),
      glove: std({ color: 0x2b2d2f, roughness: 0.85, metalness: 0, map: T.fabric.map, normalMap: T.fabric.normalMap, roughnessMap: T.fabric.ormMap }),
      gloveDark: std({ color: 0x121314, roughness: 0.6, metalness: 0, map: T.grunge.map, normalMap: T.stipple.normalMap }),
      sleeve: std({ color: 0x343b31, roughness: 0.95, metalness: 0, map: T.fabric.map, normalMap: T.fabric.normalMap, roughnessMap: T.fabric.ormMap }),
      glass: vmPatch(new THREE.MeshPhysicalMaterial({ color: 0x223322, roughness: 0.05, metalness: 0, transmission: 0, transparent: true, opacity: 0.18, envMapIntensity: 2.5, depthWrite: false }), this.U),
      lens: std({ color: 0x050505, roughness: 0.1, metalness: 0, emissive: 0x8899ff, emissiveIntensity: 0.0 }),
      brass: std({ color: 0xc8963e, roughness: 0.25, metalness: 1 }),
    };
    for (const m of Object.values(this.mats)) m.userData.vm = true;

    this.root = new THREE.Group();       // follows camera
    this.sway = new THREE.Group();       // sway/bob/recoil offsets
    this.gun = new THREE.Group();        // weapon proper
    this.root.add(this.sway); this.sway.add(this.gun);
    camera.add(this.root);
    this._buildGun();
    this._buildHands();
    this._buildFlash();
    this._buildFlashlight();

    // state
    this.magSize = 30; this.ammo = 30; this.reserve = 150;
    this.rpm = 760; this.cool = 0;
    this.reloading = false; this.reloadT = 0; this.reloadDur = 2.3; this.reloadEmpty = false;
    this.ads = 0; this.adsTarget = 0;
    this.sprint = 0;
    this.kick = 0; this.kickRot = 0; this.kickSide = 0;
    this.bloom = 0;
    this.swayV = V(0, 0, 0); this.swayP = V(0, 0, 0);
    this.lookDelta = new THREE.Vector2();
    this.bobT = 0;
    this.flashT = 0;
    this.shotsFired = 0; this.hits = 0;
    this.drawT = 0;
    this.lastShot = -10;
    this.time = 0;
  }

  _buildGun() {
    const P = new PartBuilder();
    // upper receiver
    P.rbox(0.05, 0.05, 0.25, 0.006, 'anod', 0, 0.028, 0.0);
    P.box(0.022, 0.012, 0.24, 'anod', 0, 0.058, 0.0); // rail base
    for (let i = 0; i < 22; i++) P.box(0.024, 0.005, 0.0055, 'anod', 0, 0.066, -0.115 + i * 0.0105);
    // ejection port + forward assist + dust cover
    P.box(0.004, 0.018, 0.058, 'steel', 0.026, 0.026, 0.01);
    P.cyl(0.007, 0.007, 0.02, 12, 'steel', 0.03, 0.04, 0.07, 0, 0, Math.PI / 2);
    // brass deflector
    P.rbox(0.012, 0.02, 0.02, 0.004, 'anod', 0.026, 0.045, 0.06);
    // lower receiver (extruded profile)
    P.add(extrudeProfile([[-0.12, 0.004], [0.125, 0.004], [0.125, -0.025], [0.06, -0.04], [-0.03, -0.04], [-0.035, -0.03], [-0.105, -0.03], [-0.12, -0.012]], 0.046), 'anod');
    // magwell flare
    P.add(extrudeProfile([[-0.105, -0.03], [-0.035, -0.03], [-0.04, -0.06], [-0.108, -0.06]], 0.05), 'anod');
    // trigger guard & trigger
    P.box(0.012, 0.004, 0.065, 'anod', 0, -0.065, 0.005);
    P.box(0.004, 0.022, 0.004, 'steel', 0, -0.05, 0.005, 0.3);
    // pistol grip
    P.add(extrudeProfile([[0.025, -0.035], [0.065, -0.035], [0.105, -0.15], [0.098, -0.165], [0.06, -0.165], [0.028, -0.06]], 0.03, 0.004), 'polymer');
    // buffer tube & stock
    P.cyl(0.0155, 0.0155, 0.22, 16, 'anod', 0, 0.026, 0.235);
    P.add(extrudeProfile([[0.22, 0.05], [0.4, 0.05], [0.42, 0.035], [0.42, -0.1], [0.385, -0.1], [0.3, -0.03], [0.24, -0.01], [0.22, 0.005]], 0.042, 0.004), 'tan');
    P.box(0.046, 0.15, 0.022, 'rubber', 0, -0.025, 0.428);
    P.cyl(0.006, 0.006, 0.05, 8, 'steel', 0, -0.06, 0.3, 0, 0, Math.PI / 2); // sling loop
    // castle nut / end plate
    P.cyl(0.02, 0.02, 0.01, 12, 'steel', 0, 0.026, 0.13);
    // handguard (octagonal) with slots
    P.add(new THREE.CylinderGeometry(0.029, 0.029, 0.36, 8, 1), 'anod', M4(0, 0.024, -0.305, Math.PI / 2, 0, Math.PI / 8));
    for (let i = 0; i < 6; i++) {
      for (const side of [-1, 1]) P.box(0.003, 0.009, 0.03, 'steel', side * 0.0275, 0.016, -0.17 - i * 0.048);
      P.box(0.01, 0.003, 0.03, 'steel', 0, -0.004, -0.17 - i * 0.048);
    }
    // top rail on handguard
    P.box(0.022, 0.008, 0.33, 'anod', 0, 0.056, -0.3);
    for (let i = 0; i < 31; i++) P.box(0.024, 0.005, 0.0055, 'anod', 0, 0.062, -0.14 - i * 0.0105);
    P.rbox(0.062, 0.062, 0.012, 0.004, 'anod', 0, 0.024, -0.125); // barrel nut collar
    // barrel & muzzle device
    P.cyl(0.0095, 0.0095, 0.13, 14, 'steel', 0, 0.024, -0.545);
    P.cyl(0.015, 0.015, 0.065, 16, 'steel', 0, 0.024, -0.64);
    for (let i = 0; i < 3; i++) for (const s of [-1, 1]) P.box(0.004, 0.014, 0.008, 'polymer', s * 0.0145, 0.024, -0.623 - i * 0.017);
    // angled foregrip
    P.add(extrudeProfile([[-0.36, -0.002], [-0.27, -0.002], [-0.3, -0.04], [-0.345, -0.045]], 0.028, 0.004), 'polymer');
    // flashlight on left rail
    P.cyl(0.013, 0.013, 0.085, 16, 'anod', -0.04, 0.024, -0.39);
    P.cyl(0.016, 0.016, 0.022, 16, 'anod', -0.04, 0.024, -0.442);
    P.box(0.012, 0.016, 0.03, 'anod', -0.031, 0.024, -0.39);
    // holographic sight
    P.rbox(0.034, 0.012, 0.09, 0.003, 'anod', 0, 0.073, 0.0);
    P.rbox(0.0055, 0.04, 0.055, 0.0022, 'anod', -0.0185, 0.1, 0.0);
    P.rbox(0.0055, 0.04, 0.055, 0.0022, 'anod', 0.0185, 0.1, 0.0);
    P.rbox(0.042, 0.005, 0.058, 0.002, 'anod', 0, 0.1215, 0.0);
    P.rbox(0.03, 0.01, 0.02, 0.003, 'anod', 0, 0.08, 0.02);
    P.box(0.012, 0.012, 0.024, 'polymer', 0.024, 0.082, 0.02);
    for (let i = 0; i < 3; i++) P.cyl(0.0025, 0.0025, 0.004, 8, 'rubber', 0.031, 0.08, 0.01 + i * 0.01, 0, 0, Math.PI / 2);
    // charging handle stub
    P.box(0.045, 0.008, 0.012, 'anod', 0, 0.05, 0.13);
    // sling swivel
    P.add(new THREE.TorusGeometry(0.008, 0.002, 6, 12), 'steel', M4(0, -0.008, -0.45, 0, Math.PI / 2, 0));
    P.build(this.gun, this.mats);

    // sight glass + reticle
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.03), this.mats.glass);
    glass.position.set(0, 0.1, -0.02);
    glass.frustumCulled = false;
    this.gun.add(glass);
    this.reticleMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { ...this.U, uI: { value: 1 } },
      vertexShader: /* glsl */`
        uniform mat4 uVMProj; varying vec2 vUv;
        void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = uVMProj * mv; gl_Position.z = gl_Position.z * 0.03 - 0.97 * gl_Position.w; }`,
      fragmentShader: /* glsl */`
        varying vec2 vUv; uniform float uI;
        void main(){
          vec2 c = (vUv - 0.5) * 30.0;
          float r = length(c);
          float dot_ = exp(-r * r * 6.0);
          float ring = exp(-pow(r - 5.0, 2.0) * 14.0);
          float ticks = (step(abs(c.x), 0.18) + step(abs(c.y), 0.18)) * step(5.0, r) * step(r, 6.6) * (1.0 - step(0.0, c.y) * step(abs(c.x), 0.2));
          float a = dot_ * 1.4 + ring * 0.75 + ticks * 0.45;
          gl_FragColor = vec4(vec3(14.0, 0.8, 0.5) * a * uI, 1.0);
        }`,
    });
    const ret = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.03), this.reticleMat);
    ret.position.set(0, 0.1, -0.019);
    ret.frustumCulled = false;
    this.gun.add(ret);
    this.sightPos = V(0, 0.1, 0);

    // magazine (separate for reload anim)
    this.mag = new THREE.Group();
    const MP = new PartBuilder();
    MP.add(extrudeProfile([[-0.103, -0.03], [-0.04, -0.03], [-0.045, -0.12], [-0.06, -0.2], [-0.078, -0.232], [-0.142, -0.222], [-0.124, -0.15], [-0.108, -0.07]], 0.026, 0.003), 'tan');
    MP.add(extrudeProfile([[-0.082, -0.226], [-0.074, -0.24], [-0.146, -0.23], [-0.147, -0.218]], 0.032, 0.003), 'polymer');
    for (let i = 0; i < 4; i++) MP.box(0.028, 0.004, 0.06, 'tan', 0, -0.08 - i * 0.03, -0.083 - i * 0.008, 0.18 + i * 0.05);
    MP.cyl(0.0047, 0.0047, 0.03, 8, 'brass', 0, -0.026, -0.072);
    MP.build(this.mag, this.mats);
    this.mag.userData.home = V(0, 0, 0);
    this.gun.add(this.mag);

    this.muzzle = V(0, 0.024, -0.68);
    this.ejectPort = V(0.03, 0.03, 0.01);
  }

  _buildHands() {
    const cap = (P, mat, a, b, r) => {
      const d = b.clone().sub(a);
      P.add(new THREE.CapsuleGeometry(r, d.length(), 4, 10), mat, new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(0.5), new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), d.normalize()), ONE));
    };
    // ---- right hand: fist around the pistol grip (gun space)
    this.rightHand = new THREE.Group();
    const RP = new PartBuilder();
    RP.rbox(0.05, 0.1, 0.05, 0.018, 'glove', 0.0, -0.1, 0.07, -0.28);
    RP.rbox(0.054, 0.07, 0.045, 0.016, 'glove', 0.006, -0.07, 0.108, -0.5);            // back of hand / web
    RP.rbox(0.012, 0.05, 0.03, 0.005, 'gloveDark', 0.03, -0.072, 0.105, -0.5);         // knuckle guard
    for (let i = 0; i < 3; i++) {                                                     // curled fingers on the front strap
      const y = -0.085 - i * 0.025, z = 0.04 + i * 0.007;
      cap(RP, 'glove', V(-0.022, y, z), V(0.024, y + 0.002, z - 0.004), 0.0115);
    }
    cap(RP, 'glove', V(0.026, -0.06, 0.07), V(0.012, -0.056, 0.016), 0.0095);         // index finger
    cap(RP, 'glove', V(0.012, -0.056, 0.016), V(0.003, -0.054, 0.004), 0.0085);
    cap(RP, 'glove', V(-0.026, -0.05, 0.1), V(-0.03, -0.022, 0.045), 0.0105);         // thumb (left side)
    const rw = V(0.012, -0.095, 0.135), rd = V(0.5, -0.42, 0.75).normalize();
    buildArm(RP, rw, rd);
    RP.build(this.rightHand, this.mats);
    this.gun.add(this.rightHand);

    // ---- left hand: C-grip on the handguard (local to hand anchor on the bore axis)
    this.leftHand = new THREE.Group();
    const LP = new PartBuilder();
    LP.rbox(0.024, 0.07, 0.09, 0.011, 'glove', -0.044, -0.012, 0.005, 0, 0, -0.35);    // palm on the left/lower side
    LP.rbox(0.01, 0.05, 0.07, 0.004, 'gloveDark', -0.058, -0.008, 0.0, 0, 0, -0.35);   // knuckle armour
    for (let i = 0; i < 4; i++) {
      const z = -0.03 + i * 0.021;
      const p0 = V(-0.038, -0.036, z), p1 = V(-0.004, -0.044, z - 0.002), p2 = V(0.028, -0.026, z - 0.004), p3 = V(0.036, -0.004, z - 0.005);
      const r = i === 3 ? 0.0085 : 0.0098;
      cap(LP, 'glove', p0, p1, r); cap(LP, 'glove', p1, p2, r * 0.95);
      if (i < 3) cap(LP, 'glove', p2, p3, r * 0.9);
    }
    cap(LP, 'glove', V(-0.05, 0.004, 0.04), V(-0.03, 0.026, -0.005), 0.011);         // thumb base
    cap(LP, 'glove', V(-0.03, 0.026, -0.005), V(-0.016, 0.034, -0.045), 0.0095);      // thumb over the top
    buildArm(LP, V(-0.05, -0.03, 0.05), V(-0.62, -0.72, 0.42));
    LP.build(this.leftHand, this.mats);
    this.leftHome = V(0, 0.024, -0.31);
    this.leftHand.position.copy(this.leftHome);
    this.gun.add(this.leftHand);
  }

  _buildFlash() {
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { ...this.U, uSeed: { value: 0 }, uI: { value: 0 } },
      vertexShader: /* glsl */`
        uniform mat4 uVMProj; varying vec2 vUv;
        void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = uVMProj * mv; gl_Position.z = gl_Position.z * 0.03 - 0.97 * gl_Position.w; }`,
      fragmentShader: /* glsl */`
        varying vec2 vUv; uniform float uSeed; uniform float uI;
        float h(float x){ return fract(sin(x * 12.9898 + uSeed) * 43758.5453); }
        void main(){
          vec2 c = vUv - 0.5;
          float r = length(c) * 2.0;
          float a = atan(c.y, c.x);
          float rays = 0.0;
          for(int i = 0; i < 7; i++){
            float fi = float(i);
            float ang = h(fi) * 6.2831;
            float w = 0.05 + h(fi + 9.0) * 0.12;
            float d = abs(mod(a - ang + 3.14159, 6.2831) - 3.14159);
            rays += exp(-d * d / (w * w)) * (0.4 + h(fi + 3.0));
          }
          float core = exp(-r * r * 9.0);
          float f = (core * 1.5 + rays * exp(-r * 2.4) * 0.9) * smoothstep(1.0, 0.6, r);
          vec3 col = mix(vec3(1.0, 0.45, 0.12), vec3(1.0, 0.9, 0.7), core);
          gl_FragColor = vec4(col * f * uI * 18.0, 1.0);
        }`,
    });
    const side = mat.clone();
    side.uniforms = { ...this.U, uSeed: mat.uniforms.uSeed, uI: mat.uniforms.uI };
    side.fragmentShader = /* glsl */`
      varying vec2 vUv; uniform float uSeed; uniform float uI;
      float h(float x){ return fract(sin(x * 12.9898 + uSeed) * 43758.5453); }
      void main(){
        float x = vUv.x; float y = (vUv.y - 0.5) * 2.0;
        float w = 0.12 + 0.5 * x * (0.6 + 0.4 * h(floor(x * 5.0)));
        float f = exp(-y * y / (w * w)) * pow(1.0 - x, 1.4) * smoothstep(0.0, 0.08, x);
        f *= 0.7 + 0.6 * h(floor(x * 9.0) + 2.0);
        vec3 col = mix(vec3(1.0, 0.4, 0.1), vec3(1.0, 0.85, 0.6), pow(1.0 - x, 3.0));
        gl_FragColor = vec4(col * f * uI * 12.0, 1.0);
      }`;
    this.flashMat = mat;
    this.flash = new THREE.Group();
    this.flash.position.copy(this.muzzle);
    const front = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.16), mat);
    front.frustumCulled = false;
    this.flash.add(front);
    for (const rz of [0, Math.PI / 2]) {
      const g = new THREE.PlaneGeometry(0.28, 0.1);
      g.translate(0.14, 0, 0);
      g.rotateY(Math.PI / 2);
      const m = new THREE.Mesh(g, side);
      m.rotation.z = rz;
      m.frustumCulled = false;
      this.flash.add(m);
    }
    this.flash.visible = false;
    this.gun.add(this.flash);
  }

  _buildFlashlight() {
    this.torch = new THREE.SpotLight(0xeef3ff, 0, 38, 0.36, 0.55, 2);
    this.torch.userData.fogScale = 0.55;
    this.torch.target.position.set(0, 0, -10);
    this.camera.add(this.torch);
    this.camera.add(this.torch.target);
    this.torchOn = false;
    this.torchLens = new THREE.Mesh(new THREE.CircleGeometry(0.012, 16), this.mats.lens);
    this.torchLens.position.set(-0.04, 0.024, -0.4535);
    this.torchLens.rotation.y = Math.PI;
    this.torchLens.rotation.x = Math.PI;
    this.torchLens.frustumCulled = false;
    this.gun.add(this.torchLens);
  }

  toggleTorch() {
    this.torchOn = !this.torchOn;
    this.audio?.click();
  }

  // camera-space point of a gun-local point, corrected for the viewmodel/world FOV difference
  toWorld(local, out = new THREE.Vector3()) {
    this.gun.updateWorldMatrix(true, false);
    out.copy(local).applyMatrix4(this.gun.matrixWorld); // world (camera is parent chain)
    // convert to camera space
    const inv = this.camera.matrixWorldInverse;
    const p = out.applyMatrix4(inv);
    const k = Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2) / Math.tan(THREE.MathUtils.degToRad(this.vmCam.fov) / 2);
    p.x *= k; p.y *= k;
    return p.applyMatrix4(this.camera.matrixWorld);
  }

  startReload() {
    if (this.reloading || this.ammo >= this.magSize || this.reserve <= 0) return;
    this.reloading = true;
    this.reloadT = 0;
    this.reloadEmpty = this.ammo === 0;
    this.reloadDur = this.reloadEmpty ? 2.75 : 2.25;
    this._rsnd = 0;
    this.adsTarget = 0;
  }

  update(dt, input, player) {
    this.time += dt;
    const cam = this.camera;
    // ---- aim / fov
    const wantAds = input.ads && !this.reloading && player.sprintAmt < 0.3;
    this.ads += ((wantAds ? 1 : 0) - this.ads) * Math.min(1, dt * 12);
    this.sprint += ((player.sprintAmt > 0.5 && !this.reloading ? 1 : 0) - this.sprint) * Math.min(1, dt * 8);
    this.vmCam.fov = THREE.MathUtils.lerp(this.baseFov, this.adsFov, this.ads);
    this.vmCam.aspect = cam.aspect;
    this.vmCam.updateProjectionMatrix();
    this.U.uVMProj.value.copy(this.vmCam.projectionMatrix);

    // ---- firing
    this.cool -= dt;
    const fireDelay = 60 / this.rpm;
    let fired = false;
    if (input.fire && !this.reloading && this.sprint < 0.3 && this.drawT <= 0) {
      if (this.ammo > 0) {
        while (this.cool <= 0) {
          this.cool += fireDelay;
          this._fire(player);
          fired = true;
          if (this.ammo <= 0) break;
        }
      } else if (this.cool <= 0 && input.firePressed) {
        this.audio?.dryFire();
        this.cool = 0.25;
        if (this.reserve > 0) this.startReload();
      }
    }
    if (this.cool < 0) this.cool = 0;
    if (!input.fire) this.cool = Math.max(0, Math.min(this.cool, fireDelay * 0.5));
    this.bloom = Math.max(0, this.bloom - dt * 4.5);

    // ---- reload
    if (this.reloading) {
      this.reloadT += dt;
      const t = this.reloadT / this.reloadDur;
      const evts = this.reloadEmpty ? [[0.14, 'magOut'], [0.5, 'magIn'], [0.72, 'bolt']] : [[0.18, 'magOut'], [0.58, 'magIn']];
      for (let i = this._rsnd; i < evts.length; i++) if (t >= evts[i][0]) { this.audio?.reloadEvent(evts[i][1]); this._rsnd = i + 1; }
      if (t >= 1) {
        const need = this.magSize - this.ammo;
        const take = Math.min(need, this.reserve);
        this.ammo += take; this.reserve -= take;
        this.reloading = false;
      }
    }
    this.drawT = Math.max(0, this.drawT - dt);

    // ---- springs: recoil
    this.kick += (0 - this.kick) * Math.min(1, dt * 14);
    this.kickRot += (0 - this.kickRot) * Math.min(1, dt * 10);
    this.kickSide += (0 - this.kickSide) * Math.min(1, dt * 10);

    // ---- sway from look
    const k = 1 - this.ads * 0.8;
    const target = V(-this.lookDelta.x * 0.0009 * k, this.lookDelta.y * 0.0009 * k, 0);
    target.clampLength(0, 0.04);
    this.swayV.addScaledVector(target.sub(this.swayP), dt * 160).multiplyScalar(Math.max(0, 1 - dt * 16));
    this.swayP.addScaledVector(this.swayV, dt);
    this.lookDelta.set(0, 0);

    // ---- bob
    const speed = player.horizSpeed;
    if (player.onGround) this.bobT += dt * (speed > 0.3 ? 5.2 + speed * 0.75 : 0);
    const bobAmt = Math.min(1, speed / 4.5) * (player.onGround ? 1 : 0.2) * (1 - this.ads * 0.85);
    const bx = Math.sin(this.bobT) * 0.012 * bobAmt * (1 + this.sprint);
    const by = -Math.abs(Math.cos(this.bobT)) * 0.012 * bobAmt * (1 + this.sprint * 0.8);
    const breathe = Math.sin(this.time * 1.4) * 0.0018 * (1 - this.ads * 0.7);

    // ---- base pose
    const hip = V(0.16, -0.185, -0.4);
    const ads = V(0, -this.sightPos.y, -0.25);
    const pos = hip.clone().lerp(ads, this.ads);
    const rot = new THREE.Euler(0.02 * (1 - this.ads), 0.03 * (1 - this.ads), -0.02 * (1 - this.ads));
    // sprint pose
    pos.add(V(-0.04 * this.sprint, -0.03 * this.sprint, 0.03 * this.sprint));
    rot.x += -0.25 * this.sprint; rot.y += 0.7 * this.sprint; rot.z += 0.35 * this.sprint;
    // crouch tilt
    rot.z += player.crouchAmt * 0.06 * (1 - this.ads);
    // landing dip
    pos.y -= player.landDip * 0.06;

    // reload pose
    let magOff = V(0, 0, 0), magRot = 0, magVisible = true, leftOff = V(0, 0, 0);
    if (this.reloading) {
      const t = this.reloadT / this.reloadDur;
      const e = (a, b) => THREE.MathUtils.smoothstep(t, a, b);
      const tilt = e(0, 0.15) * (1 - e(0.85, 1.0));
      rot.z += -0.45 * tilt; rot.x += 0.18 * tilt; rot.y += 0.12 * tilt;
      pos.add(V(-0.03 * tilt, -0.015 * tilt, 0.02 * tilt));
      const outT = this.reloadEmpty ? [0.12, 0.26] : [0.16, 0.3];
      const drop = e(outT[0], outT[1]);
      const insert = e(this.reloadEmpty ? 0.36 : 0.42, this.reloadEmpty ? 0.5 : 0.58);
      // left hand path: handguard -> magwell -> pouch -> magwell -> handguard / charging handle
      const toMag = e(0.04, outT[0]);
      const toPouch = e(outT[0], outT[1] + 0.05);
      const back = e(outT[1] + 0.06, this.reloadEmpty ? 0.46 : 0.54);
      const magWell = V(0.02, -0.13, -0.07).sub(this.leftHome);
      const pouch = V(-0.12, -0.42, 0.06).sub(this.leftHome);
      leftOff.copy(magWell).multiplyScalar(toMag);
      leftOff.lerp(pouch, toPouch * (1 - back));
      if (back > 0) leftOff.lerpVectors(pouch, magWell, back);
      const ret = e(this.reloadEmpty ? 0.82 : 0.66, this.reloadEmpty ? 0.95 : 0.85);
      if (this.reloadEmpty) {
        const toBolt = e(0.58, 0.68) * (1 - ret);
        const pull = e(0.7, 0.74) * (1 - e(0.76, 0.8));
        const bolt = V(0.0, 0.045, 0.15 + pull * 0.07).sub(this.leftHome);
        leftOff.lerp(bolt, toBolt);
        pos.z += pull * 0.012;
      }
      leftOff.multiplyScalar(1 - ret);
      // magazine: falls away then rides with the hand
      if (drop < 1) { magOff.set(0, -0.25 * drop * drop, 0.02 * drop); magRot = 0.3 * drop; magVisible = drop < 0.95; }
      else if (insert < 1) {
        const handMag = leftOff.clone().sub(magWell).add(V(0, 0.015 * (1 - insert), 0));
        magOff.copy(handMag).multiplyScalar(1).add(V(0, -0.03 * (1 - insert), 0.01 * (1 - insert)));
        magRot = -0.15 * (1 - insert);
        magVisible = back > 0.02;
      }
    }
    // draw animation
    if (this.drawT > 0) { const d = this.drawT / 0.6; pos.y -= d * d * 0.25; rot.x -= d * 0.6; }

    // recoil
    pos.z += this.kick * (1 - this.ads * 0.45);
    pos.y += this.kick * 0.15;
    rot.x += this.kickRot * (1 - this.ads * 0.6);
    rot.z += this.kickSide;
    rot.y += this.kickSide * 0.3;

    this.root.position.set(0, 0, 0);
    this.sway.position.set(pos.x + bx + this.swayP.x, pos.y + by + this.swayP.y + breathe, pos.z);
    this.sway.rotation.set(rot.x + this.swayP.y * 1.5, rot.y - this.swayP.x * 2.0, rot.z - this.swayP.x * 2.5 + bx * 2.0, 'XYZ');

    this.mag.position.copy(magOff);
    this.mag.rotation.set(magRot, 0, 0);
    this.mag.visible = magVisible;
    this.leftHand.position.copy(this.leftHome).add(leftOff);

    // flash
    this.flashT -= dt;
    this.flash.visible = this.flashT > 0;
    this.flashMat.uniforms.uI.value = this.flashT > 0 ? 1 : 0;
    const ml = this.world.muzzleLight;
    if (ml) ml.intensity = this.flashT > 0 ? 22 + Math.random() * 10 : 0;

    // torch
    const torchPos = this.toWorld(V(-0.04, 0.024, -0.46));
    this.torch.parent.worldToLocal(torchPos);
    this.torch.position.copy(torchPos);
    this.torch.target.position.set(torchPos.x * 0.3, torchPos.y * 0.3, -12);
    this.torch.intensity = this.torchOn ? 260 : 0;
    this.torch.visible = true;
    this.mats.lens.emissiveIntensity = this.torchOn ? 40 : 0;

    this.reticleMat.uniforms.uI.value = 0.15 + 0.85 * this.ads;
    return fired;
  }

  spreadDeg(player) {
    const move = Math.min(1, player.horizSpeed / 5);
    let s = THREE.MathUtils.lerp(2.4, 0.12, this.ads) + move * (1.6 - this.ads * 1.2) + this.bloom;
    if (!player.onGround) s += 3;
    s *= 1 - player.crouchAmt * 0.3;
    return s;
  }

  _fire(player) {
    this.ammo--;
    this.shotsFired++;
    this.lastShot = this.time;
    // recoil
    this.kick += 0.03 + Math.random() * 0.008;
    this.kickRot += 0.05 + Math.random() * 0.02;
    this.kickSide += (Math.random() - 0.5) * 0.03;
    this.bloom = Math.min(3.5, this.bloom + 0.35);
    player.addRecoil(0.0085 * (1 - this.ads * 0.35) + Math.random() * 0.003, (Math.random() - 0.45) * 0.006);
    // flash
    this.flashT = 0.035;
    this.flashMat.uniforms.uSeed.value = Math.random() * 100;
    this.flash.rotation.z = Math.random() * Math.PI;
    const s = 0.8 + Math.random() * 0.5;
    this.flash.scale.set(s, s, s);
    // world-space muzzle & eject
    const muzzleW = this.toWorld(this.muzzle);
    const ml = this.world.muzzleLight;
    if (ml) ml.position.copy(muzzleW).add(new THREE.Vector3(0, 0.05, 0));
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    if (Math.random() < 0.5) this.fx.muzzleSmoke(muzzleW, fwd);
    const ej = this.toWorld(this.ejectPort);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
    const v = right.multiplyScalar(2.2 + Math.random()).add(up.multiplyScalar(1.6 + Math.random())).add(fwd.clone().multiplyScalar(-0.4)).add(player.velocity);
    this.fx.ejectShell(ej, v);
    this.audio?.gunshot();
    this.onShot?.(muzzleW, fwd, this.spreadDeg(player), this.shotsFired % 3 === 0);
  }
}
