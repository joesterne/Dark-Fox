// Particles and effects: rain, splashes, sparks, smoke, tracers, explosions, decals, brass, debris, steam.
import * as THREE from 'three';

function smokeTexture() {
  const S = 128;
  const c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  // tileless puff: radial falloff modulated by value-noise fbm
  const L = new Float32Array(32 * 32).map(() => Math.random());
  const vn = (x, y, n) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const s = (t) => t * t * (3 - 2 * t);
    const v = (a, b) => L[((b % n + n) % n) * 32 + ((a % n + n) % n)];
    return (v(xi, yi) * (1 - s(xf)) + v(xi + 1, yi) * s(xf)) * (1 - s(yf)) + (v(xi, yi + 1) * (1 - s(xf)) + v(xi + 1, yi + 1) * s(xf)) * s(yf);
  };
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const u = x / S, v = y / S;
    let n = 0, a = 0.5, f = 4;
    for (let o = 0; o < 5; o++) { n += vn(u * f, v * f, Math.min(32, f)) * a; a *= 0.5; f *= 2; }
    const dx = u - 0.5, dy = v - 0.5;
    const r = Math.sqrt(dx * dx + dy * dy) * 2;
    const fall = Math.max(0, 1 - r);
    const d = Math.max(0, Math.min(1, (n - 0.25) * 1.8)) * Math.pow(fall, 1.2);
    const i = (y * S + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = 255 * Math.min(1, n * 1.2);
    img.data[i + 3] = 255 * d;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

// ------------------------------------------------------------------------------------------------
// Generic billboard particle system (CPU simulated, GPU instanced)
// type: 0 glow, 1 smoke, 2 fire, 3 streak (velocity aligned)
// ------------------------------------------------------------------------------------------------
class ParticleSystem {
  constructor(scene, max, additive, rig, smokeTex) {
    this.max = max;
    this.count = 0;
    this.p = [];
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), 3));
    geo.setIndex([0, 1, 2, 0, 2, 3]);
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4); // xyz + size
    this.aVel = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4); // vel xyz + stretch
    this.aCol = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4); // rgb + alpha
    this.aMisc = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4); // rot, type, life01, seed
    for (const a of [this.aPos, this.aVel, this.aCol, this.aMisc]) a.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('iPos', this.aPos); geo.setAttribute('iVel', this.aVel);
    geo.setAttribute('iCol', this.aCol); geo.setAttribute('iMisc', this.aMisc);
    geo.instanceCount = 0;
    this.geo = geo;
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { tSmoke: { value: smokeTex }, uAmb: { value: new THREE.Vector3(0.02, 0.022, 0.03) }, ...rig.uniforms },
      vertexShader: /* glsl */`
        attribute vec4 iPos; attribute vec4 iVel; attribute vec4 iCol; attribute vec4 iMisc;
        varying vec2 vUv; varying vec4 vCol; varying vec3 vMisc; varying vec3 vLight;
        uniform vec3 uAmb;
        ${rig.glsl}
        void main(){
          vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
          vec2 q = position.xy;
          float size = iPos.w;
          if(iMisc.y > 2.5){
            vec3 v = mat3(viewMatrix) * iVel.xyz;
            vec4 p0 = projectionMatrix * mv;
            vec4 p1 = projectionMatrix * (mv + vec4(v * 0.02, 0.0));
            vec2 sd = p1.xy / p1.w - p0.xy / p0.w;
            vec2 dir = length(sd) > 1e-6 ? normalize(sd) : vec2(0.0, 1.0);
            vec2 side = vec2(-dir.y, dir.x);
            float len = length(iVel.xyz) * iVel.w;
            vec3 axis = normalize(v + vec3(1e-5));
            vec3 sideV = normalize(cross(axis, normalize(mv.xyz)));
            mv.xyz += axis * (q.y * 0.5 - 0.5) * len + sideV * q.x * size;
          } else {
            float c = cos(iMisc.x), s = sin(iMisc.x);
            q = mat2(c, -s, s, c) * q;
            mv.xy += q * size;
          }
          gl_Position = projectionMatrix * mv;
          vUv = position.xy * 0.5 + 0.5;
          vCol = iCol; vMisc = iMisc.yzw;
          vLight = iMisc.y > 0.5 && iMisc.y < 1.5 ? lightAt(iPos.xyz, uAmb) : vec3(1.0);
        }`,
      fragmentShader: /* glsl */`
        uniform sampler2D tSmoke;
        varying vec2 vUv; varying vec4 vCol; varying vec3 vMisc; varying vec3 vLight;
        void main(){
          float type = vMisc.x;
          vec2 c = vUv - 0.5;
          vec4 o;
          if(type < 0.5){
            float d = exp(-dot(c, c) * 22.0);
            o = vec4(vCol.rgb * d * vCol.a, 1.0);
          } else if(type < 1.5){
            vec4 t = texture2D(tSmoke, vUv);
            o = vec4(vCol.rgb * vLight * (0.6 + 0.4 * t.r), t.a * vCol.a);
          } else if(type < 2.5){
            vec4 t = texture2D(tSmoke, vUv);
            float heat = clamp(t.r * t.a * 1.6 * (1.0 - vMisc.y * 0.8), 0.0, 1.0);
            vec3 fire = mix(vec3(0.8, 0.12, 0.02), vec3(1.0, 0.75, 0.35), heat) * (2.0 + heat * 14.0);
            o = vec4(fire * vCol.rgb * t.a * vCol.a, 1.0);
          } else {
            float d = exp(-c.x * c.x * 30.0) * smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.6, vUv.y);
            o = vec4(vCol.rgb * d * vCol.a, 1.0);
          }
          gl_FragColor = o;
        }`,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = additive ? 20 : 10;
    scene.add(this.mesh);
  }

  spawn(o) {
    if (this.p.length >= this.max) this.p.shift();
    const p = {
      pos: o.pos.clone(), vel: o.vel ? o.vel.clone() : new THREE.Vector3(),
      size: o.size ?? 0.1, grow: o.grow ?? 0, life: o.life ?? 1, age: 0,
      col: o.col ? o.col.clone() : new THREE.Color(1, 1, 1), alpha: o.alpha ?? 1,
      type: o.type ?? 0, rot: o.rot ?? Math.random() * 6.28, spin: o.spin ?? 0,
      drag: o.drag ?? 0, grav: o.grav ?? 0, stretch: o.stretch ?? 0, bounce: o.bounce ?? 0,
      fadeIn: o.fadeIn ?? 0, buoy: o.buoy ?? 0, collide: o.collide,
    };
    this.p.push(p);
    return p;
  }

  update(dt) {
    const keep = [];
    for (const p of this.p) {
      p.age += dt;
      if (p.age >= p.life) continue;
      p.vel.y -= p.grav * dt;
      p.vel.y += p.buoy * dt;
      p.vel.multiplyScalar(Math.max(0, 1 - p.drag * dt));
      p.pos.addScaledVector(p.vel, dt);
      if (p.bounce && p.pos.y < 0.01) { p.pos.y = 0.01; p.vel.y = Math.abs(p.vel.y) * p.bounce; p.vel.x *= 0.6; p.vel.z *= 0.6; }
      p.size += p.grow * dt;
      p.rot += p.spin * dt;
      keep.push(p);
    }
    this.p = keep;
    const n = Math.min(keep.length, this.max);
    const P = this.aPos.array, Vv = this.aVel.array, C = this.aCol.array, Mi = this.aMisc.array;
    for (let i = 0; i < n; i++) {
      const p = keep[i];
      const t = p.age / p.life;
      let a = p.alpha * (1 - t);
      if (p.type === 1) a = p.alpha * Math.sin(Math.min(1, t * 1.0) * Math.PI) ** 0.7 * (1 - t);
      if (p.fadeIn) a *= Math.min(1, p.age / p.fadeIn);
      P[i * 4] = p.pos.x; P[i * 4 + 1] = p.pos.y; P[i * 4 + 2] = p.pos.z; P[i * 4 + 3] = p.size;
      Vv[i * 4] = p.vel.x; Vv[i * 4 + 1] = p.vel.y; Vv[i * 4 + 2] = p.vel.z; Vv[i * 4 + 3] = p.stretch;
      C[i * 4] = p.col.r; C[i * 4 + 1] = p.col.g; C[i * 4 + 2] = p.col.b; C[i * 4 + 3] = a;
      Mi[i * 4] = p.rot; Mi[i * 4 + 1] = p.type; Mi[i * 4 + 2] = t; Mi[i * 4 + 3] = 0;
    }
    this.geo.instanceCount = n;
    for (const a of [this.aPos, this.aVel, this.aCol, this.aMisc]) { a.needsUpdate = true; a.clearUpdateRanges(); a.addUpdateRange(0, n * 4); }
  }
}

// ------------------------------------------------------------------------------------------------
export class Rain {
  constructor(scene, count, rig) {
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0]), 3));
    geo.setIndex([0, 1, 2, 0, 2, 3]);
    const seeds = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) { seeds[i * 4] = Math.random(); seeds[i * 4 + 1] = Math.random(); seeds[i * 4 + 2] = Math.random(); seeds[i * 4 + 3] = Math.random(); }
    geo.setAttribute('seed', new THREE.InstancedBufferAttribute(seeds, 4));
    geo.instanceCount = count;
    this.uniforms = { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uWind: { value: new THREE.Vector3(1.2, 0, 0.6) }, ...rig.uniforms };
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: this.uniforms,
      vertexShader: /* glsl */`
        attribute vec4 seed;
        uniform float uTime; uniform vec3 uCam; uniform vec3 uWind;
        varying vec2 vUv; varying vec3 vLight; varying float vFade;
        ${rig.glsl}
        void main(){
          vec3 box = vec3(34.0, 22.0, 34.0);
          float speed = 8.5 + seed.w * 2.5;
          vec3 vel = vec3(uWind.x, -speed, uWind.z);
          vec3 p = seed.xyz * box + vel * uTime;
          p = mod(p - uCam + box * 0.5, box) + uCam - box * 0.5;
          p.y = max(p.y, -2.0);
          vec3 axis = normalize(vel);
          float len = speed * 0.028;
          vec3 toCam = normalize(cameraPosition - p);
          vec3 side = normalize(cross(axis, toCam));
          float dist = length(cameraPosition - p);
          float w = 0.0022 * max(1.0, dist * 0.35);
          vec3 wp = p + axis * position.y * len + side * position.x * w;
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
          vUv = position.xy;
          vLight = lightAt(p, vec3(0.04, 0.045, 0.06));
          vFade = smoothstep(0.4, 1.5, dist) * (1.0 - smoothstep(12.0, 17.0, dist)) * step(0.0, p.y) / max(1.0, dist * 0.35);
        }`,
      fragmentShader: /* glsl */`
        varying vec2 vUv; varying vec3 vLight; varying float vFade;
        void main(){
          float a = (1.0 - abs(vUv.x)) * sin(vUv.y * 3.14159);
          gl_FragColor = vec4(vLight * 0.045 * a * vFade, 1.0);
        }`,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 30;
    scene.add(this.mesh);

    // splashes
    const n = Math.floor(count * 0.12);
    const sgeo = new THREE.InstancedBufferGeometry();
    sgeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0]), 3));
    sgeo.setIndex([0, 1, 2, 0, 2, 3]);
    const ss = new Float32Array(n * 4);
    for (let i = 0; i < n * 4; i++) ss[i] = Math.random();
    sgeo.setAttribute('seed', new THREE.InstancedBufferAttribute(ss, 4));
    sgeo.instanceCount = n;
    const smat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: this.uniforms,
      vertexShader: /* glsl */`
        attribute vec4 seed;
        uniform float uTime; uniform vec3 uCam;
        varying vec2 vUv; varying vec3 vLight; varying float vT;
        float h(float x){ return fract(sin(x * 91.345) * 47453.5453); }
        ${rig.glsl}
        void main(){
          float period = 0.45 + seed.z * 0.3;
          float tt = uTime / period + seed.w;
          float cyc = floor(tt); float t = fract(tt);
          vec2 r = vec2(h(seed.x * 13.1 + cyc), h(seed.y * 7.7 + cyc * 1.3)) - 0.5;
          vec3 p = vec3(uCam.x + r.x * 24.0, 0.01, uCam.z + r.y * 24.0);
          vec3 toCam = cameraPosition - p; toCam.y = 0.0; toCam = normalize(toCam + vec3(1e-4));
          vec3 side = vec3(toCam.z, 0.0, -toCam.x);
          float s = 0.03 + t * 0.09;
          vec3 wp = p + side * position.x * s + vec3(0.0, position.y * s * 1.2, 0.0);
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
          vUv = position.xy; vT = t;
          vLight = lightAt(p + vec3(0.0, 0.1, 0.0), vec3(0.05, 0.055, 0.07)) / max(1.0, length(cameraPosition - p) * 0.25);
        }`,
      fragmentShader: /* glsl */`
        varying vec2 vUv; varying vec3 vLight; varying float vT;
        void main(){
          vec2 c = vec2(vUv.x, vUv.y * 1.6);
          float crown = exp(-pow(length(c) - 0.6, 2.0) * 60.0) * smoothstep(0.0, 0.2, vUv.y);
          float drops = exp(-pow(length(c - vec2(0.0, 0.9)), 2.0) * 120.0) * 0.6;
          float a = (crown + drops) * (1.0 - vT) * (1.0 - vT);
          gl_FragColor = vec4(vLight * a * 0.05, 1.0);
        }`,
    });
    this.splash = new THREE.Mesh(sgeo, smat);
    this.splash.frustumCulled = false;
    this.splash.renderOrder = 31;
    scene.add(this.splash);
  }

  update(dt, camPos) {
    this.uniforms.uTime.value += dt;
    this.uniforms.uCam.value.copy(camPos);
  }
}

// ------------------------------------------------------------------------------------------------
export class Effects {
  constructor(scene, mats, rig, audio) {
    this.scene = scene;
    this.audio = audio;
    const tex = smokeTexture();
    this.add = new ParticleSystem(scene, 2500, true, rig, tex);
    this.alpha = new ParticleSystem(scene, 900, false, rig, tex);
    this.steamSources = [];

    // decals
    const dgeo = new THREE.PlaneGeometry(1, 1);
    this.decals = new THREE.InstancedMesh(dgeo, mats.bulletHole, 96);
    this.decals.count = 0;
    this.decals.frustumCulled = false;
    this.decals.receiveShadow = true;
    this.decalIdx = 0;
    scene.add(this.decals);

    // brass casings
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xc8963e, metalness: 1, roughness: 0.28 });
    const cg = new THREE.CylinderGeometry(0.0048, 0.0048, 0.045, 10);
    cg.rotateZ(Math.PI / 2);
    this.shellMesh = new THREE.InstancedMesh(cg, brassMat, 48);
    this.shellMesh.count = 0;
    this.shellMesh.frustumCulled = false;
    this.shellMesh.castShadow = false;
    scene.add(this.shellMesh);
    this.shells = [];

    // debris
    const dbg = new THREE.BoxGeometry(1, 1, 1);
    this.debrisMesh = new THREE.InstancedMesh(dbg, mats.housing, 80);
    this.debrisMesh.count = 0;
    this.debrisMesh.frustumCulled = false;
    this.debrisMesh.castShadow = true;
    scene.add(this.debrisMesh);
    this.debris = [];
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._s = new THREE.Vector3();
  }

  addSteam(pos) { this.steamSources.push({ pos, acc: 0 }); }

  impact(point, normal, surface) {
    const n = normal;
    const isMetal = surface === 'metal';
    const isWood = surface === 'wood';
    // flash
    this.add.spawn({ pos: point.clone().addScaledVector(n, 0.02), size: isMetal ? 0.18 : 0.1, life: 0.06, col: new THREE.Color(8, 5, 2.5), type: 0 });
    // sparks
    const sparks = isMetal ? 14 : isWood ? 2 : 6;
    for (let i = 0; i < sparks; i++) {
      const v = n.clone().multiplyScalar(2 + Math.random() * 4).add(new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6));
      this.add.spawn({ pos: point.clone(), vel: v, size: 0.006, life: 0.25 + Math.random() * 0.5, col: new THREE.Color(9, 4.5, 1.4), type: 3, stretch: 0.035, grav: 9.8, drag: 1.5, bounce: 0.35 });
    }
    // dust/chips
    const dustCol = isWood ? new THREE.Color(0.35, 0.27, 0.18) : isMetal ? new THREE.Color(0.25, 0.25, 0.27) : new THREE.Color(0.42, 0.4, 0.37);
    for (let i = 0; i < (isMetal ? 2 : 4); i++) {
      this.alpha.spawn({
        pos: point.clone().addScaledVector(n, 0.05), vel: n.clone().multiplyScalar(0.6 + Math.random()).add(new THREE.Vector3((Math.random() - 0.5) * 0.6, Math.random() * 0.5, (Math.random() - 0.5) * 0.6)),
        size: 0.06 + Math.random() * 0.05, grow: 0.5, life: 0.8 + Math.random() * 0.8, col: dustCol, alpha: 0.75, type: 1, drag: 2.5, spin: (Math.random() - 0.5) * 2,
      });
    }
    for (let i = 0; i < (isMetal ? 0 : 5); i++) {
      const v = n.clone().multiplyScalar(1.5 + Math.random() * 2.5).add(new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3));
      this.alpha.spawn({ pos: point.clone(), vel: v, size: 0.008 + Math.random() * 0.01, life: 0.6, col: dustCol.clone().multiplyScalar(0.5), alpha: 1, type: 1, grav: 9.8, bounce: 0.2 });
    }
    this.addDecal(point, n);
  }

  addDecal(point, n) {
    const q = this._q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    const rot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.random() * 6.28);
    q.multiply(rot);
    const s = 0.08 + Math.random() * 0.04;
    this._m.compose(point.clone().addScaledVector(n, 0.004), q, this._s.set(s, s, s));
    this.decals.setMatrixAt(this.decalIdx, this._m);
    this.decalIdx = (this.decalIdx + 1) % 96;
    this.decals.count = Math.max(this.decals.count, this.decalIdx === 0 ? 96 : this.decalIdx);
    this.decals.instanceMatrix.needsUpdate = true;
  }

  tracer(from, to, color = new THREE.Color(14, 6, 2), speed = 320, len = 0.012) {
    const dir = to.clone().sub(from);
    const dist = dir.length();
    dir.normalize();
    this.add.spawn({ pos: from.clone(), vel: dir.multiplyScalar(speed), size: 0.012, life: dist / speed, col: color, type: 3, stretch: len, alpha: 1 });
  }

  muzzleSmoke(pos, dir) {
    this.alpha.spawn({ pos: pos.clone(), vel: dir.clone().multiplyScalar(0.8).add(new THREE.Vector3(0, 0.25, 0)), size: 0.04, grow: 0.25, life: 1.0 + Math.random() * 0.6, col: new THREE.Color(0.5, 0.5, 0.52), alpha: 0.28, type: 1, drag: 1.5, buoy: 0.2, spin: (Math.random() - 0.5) });
  }

  ejectShell(pos, vel) {
    if (this.shells.length >= 48) this.shells.shift();
    this.shells.push({ pos: pos.clone(), vel: vel.clone(), rot: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6), spin: new THREE.Vector3((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, 20 + Math.random() * 20), age: 0, bounced: 0 });
  }

  explosion(pos) {
    for (let i = 0; i < 26; i++) {
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize().multiplyScalar(2 + Math.random() * 5);
      this.add.spawn({ pos: pos.clone().add(v.clone().multiplyScalar(0.05)), vel: v, size: 0.35 + Math.random() * 0.4, grow: 1.6, life: 0.45 + Math.random() * 0.45, col: new THREE.Color(1, 1, 1), type: 2, drag: 4, buoy: 1.5, spin: (Math.random() - 0.5) * 3 });
    }
    for (let i = 0; i < 18; i++) {
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.6, Math.random() - 0.5).normalize().multiplyScalar(1 + Math.random() * 3);
      this.alpha.spawn({ pos: pos.clone(), vel: v, size: 0.5 + Math.random() * 0.5, grow: 1.1, life: 2.5 + Math.random() * 2.5, col: new THREE.Color(0.08, 0.075, 0.07), alpha: 0.85, type: 1, drag: 1.6, buoy: 0.6, spin: (Math.random() - 0.5), fadeIn: 0.15 });
    }
    for (let i = 0; i < 60; i++) {
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.2, Math.random() - 0.5).normalize().multiplyScalar(6 + Math.random() * 14);
      this.add.spawn({ pos: pos.clone(), vel: v, size: 0.01, life: 0.5 + Math.random() * 1.2, col: new THREE.Color(12, 5, 1.2), type: 3, stretch: 0.03, grav: 9.8, drag: 0.8, bounce: 0.3 });
    }
    this.add.spawn({ pos: pos.clone(), size: 2.2, life: 0.12, col: new THREE.Color(30, 18, 8), type: 0 });
    for (let i = 0; i < 14; i++) {
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.8 + 0.1, Math.random() - 0.5).normalize().multiplyScalar(3 + Math.random() * 6);
      const s = 0.03 + Math.random() * 0.09;
      if (this.debris.length >= 80) this.debris.shift();
      this.debris.push({ pos: pos.clone(), vel: v, rot: new THREE.Euler(Math.random() * 6, Math.random() * 6, 0), spin: new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20), size: new THREE.Vector3(s, s * (0.2 + Math.random() * 0.6), s * (0.5 + Math.random())), age: 0, smoke: Math.random() < 0.35 });
    }
  }

  // drone damage smoke
  damageSmoke(pos, heavy) {
    this.alpha.spawn({ pos: pos.clone(), vel: new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.6, (Math.random() - 0.5) * 0.4), size: 0.12, grow: 0.6, life: 1.6, col: new THREE.Color(0.06, 0.06, 0.06), alpha: heavy ? 0.7 : 0.4, type: 1, drag: 1, buoy: 0.4, spin: 1 });
    if (heavy && Math.random() < 0.4) this.add.spawn({ pos: pos.clone(), vel: new THREE.Vector3(0, 0.6, 0), size: 0.08, grow: 0.3, life: 0.25, col: new THREE.Color(1, 1, 1), type: 2, buoy: 1 });
  }

  update(dt, groundHeight) {
    // steam vents
    for (const s of this.steamSources) {
      s.acc += dt;
      while (s.acc > 0.09) {
        s.acc -= 0.09;
        this.alpha.spawn({
          pos: s.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.15, (Math.random() - 0.5) * 0.4)),
          vel: new THREE.Vector3(0.35 + (Math.random() - 0.5) * 0.3, 0.9 + Math.random() * 0.6, 0.15 + (Math.random() - 0.5) * 0.3),
          size: 0.25, grow: 0.7, life: 3.5 + Math.random() * 1.5, col: new THREE.Color(0.55, 0.56, 0.58), alpha: 0.32, type: 1, drag: 0.5, spin: (Math.random() - 0.5) * 0.6, fadeIn: 0.4,
        });
      }
    }
    this.add.update(dt);
    this.alpha.update(dt);

    // shells
    const m = this._m, q = this._q;
    let i = 0;
    for (const s of this.shells) {
      s.age += dt;
      s.vel.y -= 9.8 * dt;
      s.pos.addScaledVector(s.vel, dt);
      const gh = groundHeight(s.pos);
      if (s.pos.y < gh + 0.005) {
        s.pos.y = gh + 0.005;
        if (Math.abs(s.vel.y) > 0.4) { if (s.bounced < 2 && this.audio) this.audio.shellClink(s.pos, s.bounced); s.bounced++; }
        s.vel.y = Math.abs(s.vel.y) * 0.35; s.vel.x *= 0.5; s.vel.z *= 0.5; s.spin.multiplyScalar(0.5);
      }
      s.rot.x += s.spin.x * dt; s.rot.y += s.spin.y * dt; s.rot.z += s.spin.z * dt;
      m.compose(s.pos, q.setFromEuler(s.rot), this._s.set(1, 1, 1));
      this.shellMesh.setMatrixAt(i++, m);
    }
    this.shells = this.shells.filter(s => s.age < 8);
    this.shellMesh.count = i;
    this.shellMesh.instanceMatrix.needsUpdate = true;

    i = 0;
    for (const d of this.debris) {
      d.age += dt;
      d.vel.y -= 9.8 * dt;
      d.pos.addScaledVector(d.vel, dt);
      const gh = groundHeight(d.pos);
      if (d.pos.y < gh + d.size.y * 0.5) { d.pos.y = gh + d.size.y * 0.5; d.vel.y = Math.abs(d.vel.y) * 0.25; d.vel.x *= 0.5; d.vel.z *= 0.5; d.spin.multiplyScalar(0.4); }
      d.rot.x += d.spin.x * dt; d.rot.y += d.spin.y * dt; d.rot.z += d.spin.z * dt;
      if (d.smoke && d.age < 3 && Math.random() < dt * 12) this.damageSmoke(d.pos, false);
      m.compose(d.pos, q.setFromEuler(d.rot), d.size);
      this.debrisMesh.setMatrixAt(i++, m);
    }
    this.debris = this.debris.filter(d => d.age < 25);
    this.debrisMesh.count = i;
    this.debrisMesh.instanceMatrix.needsUpdate = true;
  }
}
