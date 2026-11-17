// Night sky with light-polluted overcast clouds, distant city skyline and harbour cranes.
import * as THREE from 'three';
import { NOISE_GLSL } from './glsl.js';
import { M4 } from './level.js';

export function buildSky(scene, M, time) {
  const group = new THREE.Group();
  group.name = 'sky';
  scene.add(group);

  // ---------------------------------------------------------------- sky dome
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uTime: time },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main(){
        vDir = normalize(position);
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vDir;
      uniform float uTime;
      ${NOISE_GLSL}
      float n3(vec2 p){ return fbm(fract(p), vec2(8.0), 6); }
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        // base gradient: sodium light pollution near horizon, deep blue above
        vec3 zenith = vec3(0.0035, 0.0045, 0.008);
        vec3 horizon = vec3(0.05, 0.028, 0.016);
        float hg = pow(1.0 - clamp(h, 0.0, 1.0), 4.0);
        vec3 col = mix(zenith, horizon, hg);
        // directional glow toward the city (east & south)
        float cityDir = pow(max(dot(normalize(vec2(d.x, d.z)), normalize(vec2(1.0, 0.35))), 0.0), 2.0);
        col += vec3(0.04, 0.02, 0.01) * cityDir * hg;
        // clouds (projected onto a plane)
        if(h > 0.0){
          vec2 cp = d.xz / (h + 0.12) * 0.12;
          vec2 wind = vec2(uTime * 0.0025, uTime * 0.001);
          float c1 = n3(cp + wind);
          float c2 = n3(cp * 2.3 + wind * 1.7 + 0.3);
          float cov = smoothstep(-0.25, 0.6, c1 * 0.75 + c2 * 0.35);
          float lit = 0.35 + 0.65 * hg + 0.4 * cityDir * hg;
          vec3 cloudCol = vec3(0.045, 0.03, 0.025) * lit;
          float dense = smoothstep(0.1, 0.9, c1 + 0.2);
          cloudCol *= mix(1.0, 0.45, dense * (1.0 - hg));
          col = mix(col, cloudCol, cov * smoothstep(0.0, 0.08, h));
        } else {
          col = horizon * 0.6;
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(900, 48, 24), skyMat);
  dome.frustumCulled = false;
  dome.renderOrder = -1000;
  group.add(dome);

  // ---------------------------------------------------------------- skyline
  const rng = mulberry(7);
  const buildings = [];
  const addRing = (count, cx, cz, rx, rz, minH, maxH) => {
    for (let i = 0; i < count; i++) {
      const x = cx + (rng() - 0.5) * rx, z = cz + (rng() - 0.5) * rz;
      const w = 12 + rng() * 30, d = 12 + rng() * 30;
      const h = minH + Math.pow(rng(), 2.2) * (maxH - minH);
      buildings.push([x, z, w, d, h]);
    }
  };
  addRing(70, 380, 0, 300, 900, 20, 190);   // across the harbour
  addRing(40, 0, 340, 600, 250, 15, 90);     // south
  addRing(30, -320, 0, 200, 700, 15, 70);    // west
  addRing(40, 0, -330, 700, 240, 15, 120);   // north, behind the warehouse
  const bgeo = new THREE.BoxGeometry(1, 1, 1);
  bgeo.translate(0, 0.5, 0);
  const bmat = new THREE.ShaderMaterial({
    uniforms: { uTime: time },
    vertexShader: /* glsl */`
      varying vec3 vW; varying vec3 vN; varying float vId; varying vec3 vLocal; varying vec3 vScale;
      void main(){
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
        vId = float(gl_InstanceID);
        vScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        vLocal = position * vScale;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vW; varying vec3 vN; varying float vId; varying vec3 vLocal; varying vec3 vScale;
      uniform float uTime;
      float h12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      void main(){
        vec3 n = normalize(vN);
        vec3 base = vec3(0.004, 0.0045, 0.006) * (0.6 + 0.4 * clamp(vW.y / 120.0, 0.0, 1.0));
        vec3 col = base;
        if(abs(n.y) < 0.5){
          float u = abs(n.x) > 0.5 ? vLocal.z : vLocal.x;
          vec2 g = vec2(u / 3.2, vLocal.y / 3.6);
          vec2 cell = floor(g);
          vec2 f = fract(g);
          float win = step(0.18, f.x) * step(f.x, 0.82) * step(0.25, f.y) * step(f.y, 0.85);
          float floorLit = h12(vec2(cell.y, vId * 3.1));
          float r = h12(cell + vId * 13.7 + floor(n.x * 2.0 + n.z * 3.0) * 7.0);
          float lit = step(0.72 - floorLit * 0.25, r);
          vec3 wc = mix(vec3(1.0, 0.62, 0.3), vec3(0.6, 0.75, 1.0), step(0.75, h12(cell * 1.7 + vId)));
          wc *= 0.25 + 0.75 * h12(cell + 3.3);
          float flick = 1.0;
          float fw = max(fwidth(g.x), fwidth(g.y));
          float aa = smoothstep(0.25, 0.7, fw);
          vec3 detail = win * lit * wc * 0.55 * flick + win * (1.0 - lit) * vec3(0.006, 0.007, 0.01);
          vec3 avg = vec3(0.07, 0.05, 0.035) * (0.6 + 0.8 * h12(vec2(floor(g.y / 4.0), vId)));
          col += mix(detail, avg, aa);
          // top floors / crown lighting
          float crown = smoothstep(vScale.y - 6.0, vScale.y - 1.0, vLocal.y) * step(80.0, vScale.y) * step(0.6, h12(vec2(vId, 1.0)));
          col += crown * vec3(0.4, 0.55, 0.9) * 0.6;
        }
        // aviation light
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const inst = new THREE.InstancedMesh(bgeo, bmat, buildings.length);
  const dummy = new THREE.Object3D();
  const beacons = [];
  buildings.forEach((b, i) => {
    dummy.position.set(b[0], -2, b[1]);
    dummy.rotation.set(0, (rng() - 0.5) * 0.4, 0);
    dummy.scale.set(b[2], b[4], b[3]);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
    if (b[4] > 70) beacons.push(new THREE.Vector3(b[0], b[4] - 2 + 1.5, b[1]));
  });
  inst.frustumCulled = false;
  group.add(inst);

  // ---------------------------------------------------------------- harbour cranes (silhouettes with lights)
  const cmat = M.steelDark;
  const craneGeos = [];
  const addBox = (w, h, d, m) => { const g = new THREE.BoxGeometry(w, h, d); g.applyMatrix4(m); craneGeos.push(g); };
  for (const [cx, cz, rot] of [[95, -45, 0.15], [120, 25, -0.1], [160, 70, 0.05]]) {
    const base = M4(cx, -1.5, cz, rot);
    const P = (x, y, z, ry = 0, rx = 0, rz = 0) => base.clone().multiply(M4(x, y, z, ry, rx, rz));
    for (const sx of [-9, 9]) for (const sz of [-7, 7]) addBox(1.6, 46, 1.6, P(sx, 23, sz));
    for (const sz of [-7, 7]) addBox(20, 2.2, 1.4, P(0, 46, sz));
    for (const sx of [-9, 9]) addBox(1.4, 2.2, 15, P(sx, 46, 0));
    for (const sx of [-9, 9]) addBox(1.0, 1.0, 18, P(sx, 14, 0, 0, 0.75));
    // boom
    addBox(85, 3.2, 3.2, P(-12, 52, 0));
    addBox(26, 2.0, 2.0, P(25, 56, 0, 0, 0, -0.25));
    addBox(26, 2.0, 2.0, P(-40, 56, 0, 0, 0, 0.18));
    addBox(4, 10, 4, P(0, 55, 0));
    addBox(8, 5, 6, P(5, 50, 0));
    beacons.push(new THREE.Vector3().setFromMatrixPosition(P(-54, 54, 0)));
    beacons.push(new THREE.Vector3().setFromMatrixPosition(P(0, 60.5, 0)));
    beacons.push(new THREE.Vector3().setFromMatrixPosition(P(28, 59, 0)));
  }
  const cgeo = mergeSimple(craneGeos);
  const cranes = new THREE.Mesh(cgeo, cmat);
  group.add(cranes);

  // ---------------------------------------------------------------- beacons (blinking red aviation lights) as points
  const bgeo2 = new THREE.BufferGeometry();
  const bp = new Float32Array(beacons.length * 3), bph = new Float32Array(beacons.length);
  beacons.forEach((b, i) => { bp.set([b.x, b.y, b.z], i * 3); bph[i] = rng(); });
  bgeo2.setAttribute('position', new THREE.BufferAttribute(bp, 3));
  bgeo2.setAttribute('phase', new THREE.BufferAttribute(bph, 1));
  const beaconMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: time },
    vertexShader: /* glsl */`
      attribute float phase; varying float vI; uniform float uTime;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float b = fract(uTime * 0.5 + phase);
        vI = smoothstep(0.0, 0.05, b) * (1.0 - smoothstep(0.25, 0.45, b));
        gl_PointSize = clamp(900.0 / -mv.z, 2.0, 10.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      varying float vI;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = exp(-dot(c,c) * 18.0); gl_FragColor = vec4(vec3(30.0, 1.5, 0.6) * d * (0.15 + vI), 1.0); }`,
  });
  const beaconPts = new THREE.Points(bgeo2, beaconMat);
  beaconPts.frustumCulled = false;
  group.add(beaconPts);

  // distant street-light glints along the far quay
  const glintN = 160;
  const gp = new Float32Array(glintN * 3), gph = new Float32Array(glintN);
  for (let i = 0; i < glintN; i++) {
    const a = rng();
    const far = 150 + rng() * 350;
    const ang = -1.2 + a * 2.4;
    gp.set([Math.cos(ang) * far + 40, 2 + rng() * 25, Math.sin(ang) * far], i * 3);
    gph[i] = rng();
  }
  const gg = new THREE.BufferGeometry();
  gg.setAttribute('position', new THREE.BufferAttribute(gp, 3));
  gg.setAttribute('phase', new THREE.BufferAttribute(gph, 1));
  const glintMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      attribute float phase; varying vec3 vC;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vC = mix(vec3(6.0, 3.0, 1.2), vec3(3.0, 3.6, 5.0), step(0.7, phase)) * (0.4 + phase);
        gl_PointSize = clamp(500.0 / -mv.z, 1.5, 4.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vC;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = exp(-dot(c,c) * 16.0); gl_FragColor = vec4(vC * d, 1.0); }`,
  });
  const glints = new THREE.Points(gg, glintMat);
  glints.frustumCulled = false;
  group.add(glints);

  return { group, dome };
}

function mergeSimple(geos) {
  let count = 0;
  const parts = geos.map(g => g.toNonIndexed());
  parts.forEach(p => (count += p.attributes.position.count));
  const pos = new Float32Array(count * 3), nor = new Float32Array(count * 3), uv = new Float32Array(count * 2);
  let o = 0;
  for (const p of parts) {
    pos.set(p.attributes.position.array, o * 3);
    nor.set(p.attributes.normal.array, o * 3);
    uv.set(p.attributes.uv.array, o * 2);
    o += p.attributes.position.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.computeBoundingSphere();
  return g;
}

export function mulberry(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
