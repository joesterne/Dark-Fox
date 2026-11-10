// The level: a rain-soaked container yard in front of a brick warehouse at night.
import * as THREE from 'three';
import { StaticBatcher, boxUV, scaleUV } from './geo.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ONE = new THREE.Vector3(1, 1, 1);
export function M4(x, y, z, ry = 0, rx = 0, rz = 0, s = ONE) {
  return new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), s);
}

// Simple stroke font for the neon sign (0..0.6 wide, 0..1 tall)
const GLYPHS = {
  D: [[[0, 0], [0, 1], [0.32, 1], [0.48, 0.94], [0.57, 0.78], [0.6, 0.5], [0.57, 0.22], [0.48, 0.06], [0.32, 0], [0, 0]]],
  A: [[[0, 0], [0.3, 1], [0.6, 0]], [[0.11, 0.37], [0.49, 0.37]]],
  R: [[[0, 0], [0, 1], [0.38, 1], [0.53, 0.94], [0.6, 0.78], [0.55, 0.6], [0.4, 0.52], [0, 0.52]], [[0.3, 0.52], [0.6, 0]]],
  K: [[[0, 0], [0, 1]], [[0.58, 1], [0, 0.42]], [[0.2, 0.6], [0.6, 0]]],
  F: [[[0, 0], [0, 1], [0.6, 1]], [[0, 0.54], [0.44, 0.54]]],
  O: [Array.from({ length: 25 }, (_, i) => { const a = i / 24 * Math.PI * 2; return [0.3 + Math.sin(a) * 0.3, 0.5 + Math.cos(a) * 0.5]; })],
  X: [[[0, 0], [0.6, 1]], [[0, 1], [0.6, 0]]],
};
const FOX_ICON = [
  [[-0.55, 0.78], [-0.28, 0.36], [0.28, 0.36], [0.55, 0.78], [0.46, 0.08], [0.0, -0.5], [-0.46, 0.08], [-0.55, 0.78]],
  [[-0.27, 0.06], [-0.09, 0.0]], [[0.09, 0.0], [0.27, 0.06]],
  [[-0.06, -0.36], [0.0, -0.42], [0.06, -0.36]],
];

function tubeStrokes(strokes, scale, radius, offset) {
  const geos = [];
  const up = V(0, 1, 0);
  for (const stroke of strokes) {
    for (let i = 0; i < stroke.length - 1; i++) {
      const a = V(stroke[i][0] * scale + offset.x, stroke[i][1] * scale + offset.y, offset.z);
      const b = V(stroke[i + 1][0] * scale + offset.x, stroke[i + 1][1] * scale + offset.y, offset.z);
      const len = a.distanceTo(b);
      if (len < 1e-4) continue;
      const g = new THREE.CylinderGeometry(radius, radius, len, 8, 1, true);
      const q = new THREE.Quaternion().setFromUnitVectors(up, b.clone().sub(a).normalize());
      g.applyMatrix4(new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(0.5), q, ONE));
      geos.push(g);
      const s = new THREE.SphereGeometry(radius, 8, 6);
      s.translate(b.x, b.y, b.z);
      geos.push(s);
      if (i === 0) { const s0 = new THREE.SphereGeometry(radius, 8, 6); s0.translate(a.x, a.y, a.z); geos.push(s0); }
    }
  }
  return geos;
}

class HelixCurve extends THREE.Curve {
  constructor(a, b, r, turns) { super(); this.a = a; this.b = b; this.r = r; this.turns = turns; }
  getPoint(t, target = new THREE.Vector3()) {
    const p = this.a.clone().lerp(this.b, t);
    const ang = t * this.turns * Math.PI * 2;
    return target.set(p.x, p.y + Math.sin(ang) * this.r, p.z + Math.cos(ang) * this.r);
  }
}

export function buildLevel(scene, M, quality) {
  const B = new StaticBatcher(M);
  const lights = { shadowSpots: [], points: [], flicker: [] };
  const root = new THREE.Group();
  root.name = 'level';
  scene.add(root);

  // implicit ground collider
  B.collider(-60, -2, -60, 32, 0, 60, 'asphalt');

  // ---------------------------------------------------------------- containers
  const CONT = {
    red: ['contRed', 'frameRed'], blue: ['contBlue', 'frameBlue'],
    green: ['contGreen', 'frameGreen'], orange: ['contOrange', 'frameOrange'],
  };
  function container(x, y, z, L, alongZ, color) {
    const H = 2.59, W = 2.44;
    const [bodyMat, frameMat] = CONT[color];
    const ry = alongZ ? Math.PI / 2 : 0;
    const base = M4(x, y, z, ry);
    const put = (geo, mat, lx, ly, lz, rx = 0, rz = 0, ryl = 0) =>
      B.add(geo, mat, base.clone().multiply(M4(lx, ly, lz, ryl, rx, rz)), { uv: 'local' });
    const body = new THREE.BoxGeometry(L - 0.12, H - 0.24, W - 0.08);
    boxUV(body, L - 0.12, H - 0.24, W - 0.08, M[bodyMat].userData.tile);
    put(body, bodyMat, 0, H / 2, 0);
    // corner posts
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const g = new THREE.BoxGeometry(0.17, H, 0.17); boxUV(g, 0.17, H, 0.17, [1, 1]);
      put(g, frameMat, sx * (L / 2 - 0.085), H / 2, sz * (W / 2 - 0.085));
    }
    // long rails
    for (const yy of [0.08, H - 0.07]) for (const sz of [-1, 1]) {
      const g = new THREE.BoxGeometry(L - 0.3, 0.15, 0.13); boxUV(g, L, 0.15, 0.13, [1, 1]);
      put(g, frameMat, 0, yy, sz * (W / 2 - 0.065));
    }
    // end rails
    for (const yy of [0.08, H - 0.07]) for (const sx of [-1, 1]) {
      const g = new THREE.BoxGeometry(0.13, 0.15, W - 0.3); boxUV(g, 0.13, 0.15, W, [1, 1]);
      put(g, frameMat, sx * (L / 2 - 0.065), yy, 0);
    }
    // corner castings
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const yy of [0.06, H - 0.06]) {
      put(new THREE.BoxGeometry(0.19, 0.12, 0.19), 'steelDark', sx * (L / 2 - 0.09), yy, sz * (W / 2 - 0.09));
    }
    // door end: locking bars, cams, handles, hinges
    const dx = L / 2 - 0.02;
    for (const zz of [-0.92, -0.5, 0.5, 0.92]) {
      const bar = new THREE.CylinderGeometry(0.02, 0.02, H - 0.35, 8);
      put(bar, 'steel', dx + 0.03, H / 2, zz);
      for (const yy of [0.32, H - 0.32]) put(new THREE.BoxGeometry(0.06, 0.08, 0.07), 'steelDark', dx + 0.03, yy, zz);
      const handle = new THREE.BoxGeometry(0.03, 0.03, 0.32);
      put(handle, 'steel', dx + 0.07, 1.15, zz + (zz > 0 ? -0.14 : 0.14));
    }
    for (const sz of [-1, 1]) for (const yy of [0.5, 1.3, 2.1]) put(new THREE.BoxGeometry(0.05, 0.14, 0.08), 'steelDark', dx + 0.02, yy, sz * (W / 2 - 0.12));
    // door seam
    put(new THREE.BoxGeometry(0.02, H - 0.3, 0.012), 'steelDark', dx + 0.01, H / 2, 0);
    // collider
    const hx = (alongZ ? W : L) / 2, hz = (alongZ ? L : W) / 2;
    B.collider(x - hx, y, z - hz, x + hx, y + H, z + hz, 'metal');
  }

  // west wall of stacked 40ft containers
  const colors = ['red', 'blue', 'green', 'orange'];
  let ci = 0;
  for (const zc of [-12.2, 0, 12.2]) {
    container(-27, 0, zc, 12.19, true, colors[(ci++) % 4]);
    container(-27, 2.59, zc + (ci % 2 ? 0.15 : -0.1), 12.19, true, colors[(ci + 1) % 4]);
  }
  // yard containers
  container(-15, 0, 4, 6.06, false, 'red');
  container(-15, 2.59, 4.05, 6.06, false, 'blue');
  container(-15.3, 0, 6.5, 6.06, false, 'green');
  container(7, 0, -2, 12.19, true, 'blue');
  container(19, 0, 8, 6.06, false, 'orange');
  container(21, 0, -13, 6.06, true, 'green');
  container(21.05, 2.59, -13.1, 6.06, true, 'red');
  container(-20, 0, 15, 6.06, true, 'red');

  // ---------------------------------------------------------------- warehouse facade
  const FZ = -22; // front face z
  const T = 0.4;
  const brickSeg = (x0, x1, y0, y1) => B.box(x1 - x0, y1 - y0, T, 'brick', (x0 + x1) / 2, (y0 + y1) / 2, FZ - T / 2, { uv: 'world' });
  const galvSeg = (x0, x1, y0, y1) => B.box(x1 - x0, y1 - y0, T, 'galv', (x0 + x1) / 2, (y0 + y1) / 2, FZ - T / 2 + 0.02, { uv: 'world' });
  brickSeg(-34, -14.5, 0, 4.2); brickSeg(-9.5, 3.45, 0, 4.2); brickSeg(4.55, 22, 0, 4.2); brickSeg(3.45, 4.55, 2.25, 4.2);
  galvSeg(-34, -14.5, 4.2, 11); galvSeg(-9.5, 22, 4.2, 11); galvSeg(-14.5, -9.5, 5.3, 11);
  B.box(56, 0.12, 0.1, 'galv', -6, 4.2, FZ + 0.03, { uv: 'world' }); // flashing ledge
  B.box(56.4, 0.25, 0.6, 'steelDark', -6, 11.1, FZ - 0.2);              // parapet cap
  B.box(0.4, 11.2, 30, 'brick', 22.2, 5.6, FZ - 15, { uv: 'world' });   // east gable
  B.collider(-34, 0, -40, 22.4, 11.3, FZ, 'brick');
  // concrete plinth
  B.box(56, 0.35, 0.12, 'concreteDark', -6, 0.175, FZ + 0.06, { uv: 'world' });
  // clerestory windows
  for (let x = -30; x <= 18; x += 4) {
    if (x > -16 && x < -8) continue;
    B.box(2.8, 1.5, 0.12, 'steelDark', x, 8.6, FZ + 0.05);
    const lit = ((x * 7 + 3) % 5 + 5) % 5 < 2;
    for (const px of [-0.68, 0.68]) {
      const pane = new THREE.PlaneGeometry(1.25, 1.3);
      B.add(pane, lit ? 'windowWarm' : 'glassDark', M4(x + px, 8.6, FZ + 0.115), { noShadow: true });
    }
    B.box(0.06, 1.3, 0.03, 'steelDark', x, 8.6, FZ + 0.13);
  }
  // downspouts
  for (const x of [-31, -3, 20.5]) {
    const g = new THREE.CylinderGeometry(0.065, 0.065, 11, 12); scaleUV(g, 0.4, 11);
    B.add(g, 'galv', M4(x, 5.5, FZ + 0.12), { uv: 'local' });
    for (let y = 1; y < 11; y += 2.5) B.box(0.18, 0.04, 0.16, 'steelDark', x, y, FZ + 0.08);
    const elbow = new THREE.CylinderGeometry(0.065, 0.065, 0.35, 12); B.add(elbow, 'galv', M4(x, 0.15, FZ + 0.25, 0, Math.PI / 2), { uv: 'local' });
  }
  // roll-up door
  const ruGeo = new THREE.BoxGeometry(5.0, 5.3, 0.12); boxUV(ruGeo, 5, 5.3, 0.12, [1.52, 1.52], true);
  B.add(ruGeo, 'galv', M4(-12, 2.65, FZ - 0.25), { uv: 'local' });
  B.box(0.18, 5.3, 0.25, 'steelDark', -14.6, 2.65, FZ - 0.1); B.box(0.18, 5.3, 0.25, 'steelDark', -9.4, 2.65, FZ - 0.1);
  B.box(5.6, 0.7, 0.55, 'galv', -12, 5.65, FZ + 0.1, { uv: 'world' });
  B.box(5.0, 0.08, 0.16, 'rubber', -12, 0.04, FZ - 0.2);
  // personnel door
  B.box(1.1, 2.22, 0.06, 'pmGreen', 4, 1.11, FZ - 0.08, { uv: 'world' });
  B.box(0.08, 2.3, 0.18, 'steelDark', 3.41, 1.15, FZ - 0.02); B.box(0.08, 2.3, 0.18, 'steelDark', 4.59, 1.15, FZ - 0.02);
  B.box(1.26, 0.08, 0.18, 'steelDark', 4, 2.29, FZ - 0.02);
  B.box(1.0, 0.25, 0.012, 'diamond', 4, 0.14, FZ - 0.045, { uv: 'world' });
  B.box(0.04, 0.04, 0.12, 'steel', 4.38, 1.05, FZ + 0.02);
  B.box(0.16, 0.035, 0.035, 'steel', 4.32, 1.05, FZ + 0.08);
  B.box(0.09, 0.2, 0.05, 'steelDark', 4.38, 1.2, FZ - 0.02);
  // electrical cabinet & conduit
  B.box(0.6, 0.8, 0.22, 'pmGray', 6.2, 1.6, FZ + 0.11, { uv: 'world' });
  B.box(0.05, 2.4, 0.05, 'steel', 6.2, 3.2, FZ + 0.05);
  B.box(0.5, 0.06, 0.06, 'steel', 6.5, 4.38, FZ + 0.05);
  // door lamp
  B.box(0.32, 0.14, 0.3, 'housing', 4, 2.75, FZ + 0.15);
  B.box(0.26, 0.02, 0.22, 'doorLens', 4, 2.67, FZ + 0.17, { noShadow: true });
  {
    const s = new THREE.SpotLight(0xffc890, 160, 22, 1.05, 0.65, 2);
    s.position.set(4, 2.62, FZ + 0.25); s.target.position.set(4, 0, FZ + 2.2);
    lights.shadowSpots.push(s);
  }

  // ---------------------------------------------------------------- loading dock
  B.box(10, 1.2, 3.4, 'concrete', -12, 0.6, FZ + 1.7, { uv: 'world', collider: true, surface: 'concrete' });
  B.box(10, 0.08, 0.08, 'steelDark', -12, 1.18, FZ + 3.38);
  B.box(4.2, 0.012, 2.2, 'diamond', -12, 1.206, FZ + 1.1, { uv: 'world' });
  for (const x of [-15.5, -13.2, -10.8, -8.5]) B.box(0.28, 0.5, 0.14, 'rubber', x, 0.8, FZ + 3.47);
  for (let i = 0; i < 6; i++) {
    const top = (i + 1) * 0.2;
    const x0 = -7 + (5 - i) * 0.3;
    B.box(0.3, top, 1.6, 'concrete', x0 + 0.15, top / 2, FZ + 2.45, { uv: 'world', collider: true });
    B.box(0.3, 0.012, 1.6, 'diamond', x0 + 0.15, top + 0.006, FZ + 2.45, { uv: 'world' });
  }
  // stair railing
  const railPts = [V(-5.25, 0.2, FZ + 3.22), V(-6.85, 1.2, FZ + 3.22)];
  for (const p of [V(-5.3, 0, FZ + 3.22), V(-6.1, 0, FZ + 3.22), V(-6.85, 0, FZ + 3.22)]) {
    const h = 1.0 + Math.max(0, Math.min(1.2, (-5.2 - p.x) / 1.8 * 1.2));
    const g = new THREE.CylinderGeometry(0.025, 0.025, h + 0.3, 8);
    B.add(g, 'pmYellow', M4(p.x, (h + 0.3) / 2, p.z), { uv: 'local' });
  }
  {
    const a = railPts[0].clone().add(V(0, 1.05, 0)), b = railPts[1].clone().add(V(0, 1.05, 0));
    const len = a.distanceTo(b);
    const g = new THREE.CylinderGeometry(0.025, 0.025, len, 8);
    const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), b.clone().sub(a).normalize());
    B.add(g, 'pmYellow', new THREE.Matrix4().compose(a.clone().add(b).multiplyScalar(0.5), q, ONE), { uv: 'local' });
  }
  // dock edge railing (west side)
  for (const z of [FZ + 0.3, FZ + 1.7, FZ + 3.2]) B.add(new THREE.CylinderGeometry(0.025, 0.025, 1.05, 8), 'pmYellow', M4(-16.9, 1.72, z), { uv: 'local' });
  B.add(new THREE.CylinderGeometry(0.025, 0.025, 3.0, 8), 'pmYellow', M4(-16.9, 2.22, FZ + 1.75, 0, Math.PI / 2), { uv: 'local' });
  B.collider(-17.0, 1.2, FZ, -16.8, 2.3, FZ + 3.4, 'metal', { bulletPass: true });

  // ---------------------------------------------------------------- neon sign
  {
    const signX = 0.2, signY = 6.0, signZ = FZ + 0.18;
    B.box(9.9, 2.0, 0.12, 'housing', 4.75, signY + 0.55, FZ + 0.06);
    for (const x of [1.0, 4.9, 8.8]) B.box(0.06, 0.5, 0.12, 'steelDark', x, signY + 1.75, FZ + 0.08);
    const text = 'DARKFOX';
    const scale = 1.1;
    let cx = 2.2;
    const strokeGeos = { text: [], flick: [] };
    for (let i = 0; i < text.length; i++) {
      if (i === 4) cx += 0.45;
      const geos = tubeStrokes(GLYPHS[text[i]], scale, 0.03, V(cx, signY, signZ));
      (i === 3 ? strokeGeos.flick : strokeGeos.text).push(...geos);
      // mounting standoffs
      cx += 0.6 * scale + 0.28;
    }
    const iconGeos = tubeStrokes(FOX_ICON, 1.3, 0.032, V(signX + 0.6, signY + 0.6, signZ));
    const mkMesh = (geos, mat) => {
      const merged = geos.length > 1 ? mergeAll(geos) : geos[0];
      const mesh = new THREE.Mesh(merged, mat);
      root.add(mesh);
      return mesh;
    };
    mkMesh(strokeGeos.text, M.neonCyan);
    const flickMat = M.neonCyan.clone();
    mkMesh(strokeGeos.flick, flickMat);
    mkMesh(iconGeos, M.neonPink);
    const pc = new THREE.PointLight(0x30d8ff, 45, 16, 2); pc.position.set(5.6, signY + 0.5, FZ + 1.0);
    const pp = new THREE.PointLight(0xff3a80, 25, 12, 2); pp.position.set(signX + 0.6, signY + 0.6, FZ + 1.0);
    lights.points.push(pc, pp);
    lights.flicker.push({ mat: flickMat, base: flickMat.emissiveIntensity, light: pc, lightBase: pc.intensity });
  }

  // ---------------------------------------------------------------- floodlights on facade
  for (const [x, tx, tz] of [[-20, -13, -6], [13, 9, -5]]) {
    B.box(0.12, 0.6, 0.5, 'steelDark', x, 9.6, FZ + 0.25);
    B.add(new THREE.BoxGeometry(0.7, 0.45, 0.25), 'housing', M4(x, 9.4, FZ + 0.6, 0, 0.9));
    B.add(new THREE.PlaneGeometry(0.6, 0.36), 'floodLens', M4(x, 9.4 - 0.099, FZ + 0.6 + 0.079, 0, 0.9), { noShadow: true });
    const s = new THREE.SpotLight(0xdfe7ff, 1700, 45, 0.52, 0.55, 2);
    s.userData.fogScale = 0.3;
    s.position.set(x, 9.25, FZ + 0.85); s.target.position.set(tx, 0, tz);
    lights.shadowSpots.push(s);
  }

  // ---------------------------------------------------------------- lamp poles
  function lampPole(x, z, dirX, dirZ) {
    const ang = Math.atan2(dirX, dirZ);
    B.add(new THREE.CylinderGeometry(0.32, 0.36, 0.6, 16), 'concreteDark', M4(x, 0.3, z), { uv: 'world' });
    const pole = new THREE.CylinderGeometry(0.07, 0.11, 7.2, 16); scaleUV(pole, 0.6, 7.2);
    B.add(pole, 'pmGray', M4(x, 3.6 + 0.6, z), { uv: 'local' });
    for (let k = 0; k < 4; k++) B.add(new THREE.CylinderGeometry(0.025, 0.03, 0.08, 6), 'steelDark', M4(x + Math.cos(k * 1.57 + 0.78) * 0.22, 0.64, z + Math.sin(k * 1.57 + 0.78) * 0.22));
    const ax = x + dirX * 0.8, az = z + dirZ * 0.8;
    const arm = new THREE.CylinderGeometry(0.045, 0.05, 1.7, 10);
    B.add(arm, 'pmGray', M4(ax, 7.65, az, ang, Math.PI / 2 - 0.12), { uv: 'local' });
    const hx = x + dirX * 1.65, hz = z + dirZ * 1.65;
    B.add(new THREE.BoxGeometry(0.42, 0.16, 0.8), 'housing', M4(hx, 7.72, hz, ang, -0.06));
    B.add(new THREE.BoxGeometry(0.3, 0.04, 0.55), 'sodiumLens', M4(hx, 7.62, hz, ang, -0.06), { noShadow: true });
    B.collider(x - 0.14, 0, z - 0.14, x + 0.14, 7.8, z + 0.14, 'metal');
    B.collider(x - 0.36, 0, z - 0.36, x + 0.36, 0.6, z + 0.36, 'concrete');
    const s = new THREE.SpotLight(0xff9440, 520, 30, 1.1, 0.7, 2);
    s.position.set(hx, 7.55, hz); s.target.position.set(hx + dirX * 0.8, 0, hz + dirZ * 0.8);
    lights.shadowSpots.push(s);
  }
  lampPole(-8, 11, 1, 0);
  lampPole(14, 3, -1, 0);
  lampPole(-20, -7, 0.7, -0.7);
  lampPole(15, 17, -0.7, -0.7);

  // ---------------------------------------------------------------- perimeter
  // south wall with fence
  B.box(58, 2.4, 0.3, 'concrete', 0, 1.2, 24.15, { uv: 'world', collider: true });
  B.box(58.2, 0.12, 0.42, 'concreteDark', 0, 2.46, 24.15, { uv: 'world' });
  fence(B, V(-29, 2.5, 24.1), V(29, 2.5, 24.1), 1.6);
  // east fence along the quay
  fence(B, V(29, 0, -22), V(29, 0, 24), 3.4);
  B.collider(28.9, 0, -22, 29.1, 4, 24.3, 'metal', { bulletPass: true });
  B.collider(-29, 2.4, 24.0, 29, 4.2, 24.3, 'metal', { bulletPass: true });
  // NE wall
  B.box(6.8, 3.6, 0.3, 'concrete', 25.6, 1.8, -22.15, { uv: 'world', collider: true });
  // west corners
  B.box(0.3, 5.2, 4.0, 'concrete', -27, 2.6, -20.3, { uv: 'world', collider: true });
  B.box(0.3, 5.2, 5.8, 'concrete', -27, 2.6, 21.2, { uv: 'world', collider: true });
  B.collider(-34, 0, -60, -28.3, 20, 60, 'concrete');
  // quay
  B.box(3.0, 0.25, 50, 'concreteDark', 30.5, -0.125, 1, { uv: 'world' });
  B.box(0.4, 1.8, 50, 'concreteDark', 32.2, -0.9, 1, { uv: 'world' });
  B.box(0.3, 0.18, 50, 'concrete', 31.9, 0.09, 1, { uv: 'world' });
  for (const z of [-12, 2, 16]) {
    B.add(new THREE.CylinderGeometry(0.2, 0.24, 0.6, 16), 'steelDark', M4(31.2, 0.3, z));
    B.add(new THREE.SphereGeometry(0.25, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), 'steelDark', M4(31.2, 0.6, z));
  }

  // quay floodlights mounted on tall fence posts (unshadowed, cheap)
  for (const z of [-9, 9]) {
    B.add(new THREE.CylinderGeometry(0.07, 0.09, 6.2, 12), 'pmGray', M4(29.35, 3.1, z), { uv: 'world' });
    B.add(new THREE.BoxGeometry(0.5, 0.3, 0.6), 'housing', M4(29.0, 6.1, z, 0, 0, 0.5));
    B.add(new THREE.PlaneGeometry(0.42, 0.5), 'floodLens', M4(28.84, 5.97, z, -Math.PI / 2, 0.5, 0), { noShadow: true });
    const s = new THREE.SpotLight(0xcfe0ff, 380, 32, 0.75, 0.6, 2);
    s.position.set(28.7, 5.85, z); s.target.position.set(22, 0, z * 0.6);
    s.userData.fogScale = 0.5;
    lights.freeSpots = lights.freeSpots || [];
    lights.freeSpots.push(s);
  }

  // ---------------------------------------------------------------- props
  function barrier(x, z, alongZ) {
    const sh = new THREE.Shape();
    const P = [[-0.305, 0], [0.305, 0], [0.305, 0.075], [0.15, 0.33], [0.08, 0.81], [-0.08, 0.81], [-0.15, 0.33], [-0.305, 0.075]];
    sh.moveTo(P[0][0], P[0][1]); for (let i = 1; i < P.length; i++) sh.lineTo(P[i][0], P[i][1]);
    const g = new THREE.ExtrudeGeometry(sh, { depth: 2.9, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.015, bevelSegments: 2, steps: 1 });
    g.translate(0, 0, -1.45);
    B.add(g, 'concrete', M4(x, 0.015, z, alongZ ? 0 : Math.PI / 2), { uv: 'world' });
    const hx = alongZ ? 0.32 : 1.47, hz = alongZ ? 1.47 : 0.32;
    B.collider(x - hx, 0, z - hz, x + hx, 0.83, z + hz, 'concrete');
  }
  barrier(-5.5, 13, false); barrier(-2.5, 13, false); barrier(13.5, 18.5, true);
  barrier(-10, -8, false); barrier(25, 1, true); barrier(25, 4, true); barrier(2, -14, false);

  function crate(x, y, z, s = 1.1, ry = 0) {
    const g = new THREE.BoxGeometry(s, s, s); boxUV(g, s, s, s, M.wood.userData.tile);
    B.add(g, 'wood', M4(x, y + s / 2, z, ry), { uv: 'local' });
    const t = 0.07;
    const base = M4(x, y + s / 2, z, ry);
    for (const a of [-1, 1]) for (const b of [-1, 1]) {
      B.add(new THREE.BoxGeometry(s + 0.02, t, t), 'wood', base.clone().multiply(M4(0, a * (s / 2 - t / 2 + 0.01), b * (s / 2 - t / 2 + 0.01))), { uv: 'world' });
      B.add(new THREE.BoxGeometry(t, s + 0.02, t), 'wood', base.clone().multiply(M4(a * (s / 2 - t / 2 + 0.01), 0, b * (s / 2 - t / 2 + 0.01))), { uv: 'world' });
      B.add(new THREE.BoxGeometry(t, t, s + 0.02), 'wood', base.clone().multiply(M4(a * (s / 2 - t / 2 + 0.01), b * (s / 2 - t / 2 + 0.01), 0)), { uv: 'world' });
    }
    const h = s / 2 * (Math.abs(Math.cos(ry)) + Math.abs(Math.sin(ry)));
    B.collider(x - h, y, z - h, x + h, y + s + 0.02, z + h, 'wood');
  }
  crate(-21, 0, -17.2); crate(-19.75, 0, -17.0, 1.1, 0.15); crate(-21, 0, -15.9, 1.0, -0.1); crate(-20.6, 1.12, -16.9, 1.0, 0.3);
  crate(16.5, 0, -6.5, 1.2, 0.4); crate(17.6, 0, -5.6, 0.9, 0.1);
  crate(-6.5, 0, 4.0, 1.1, 0.05);

  function pallet(x, z, ry = 0) {
    const base = M4(x, 0, z, ry);
    for (let i = 0; i < 5; i++) B.add(new THREE.BoxGeometry(1.2, 0.022, 0.12), 'wood', base.clone().multiply(M4(0, 0.135, -0.44 + i * 0.22)), { uv: 'world' });
    for (const zz of [-0.44, 0, 0.44]) B.add(new THREE.BoxGeometry(1.2, 0.1, 0.1), 'wood', base.clone().multiply(M4(0, 0.07, zz)), { uv: 'world' });
    B.collider(x - 0.62, 0, z - 0.6, x + 0.62, 0.15, z + 0.6, 'wood');
  }
  function barrel(x, y, z, mat, ry = 0, tipped = false) {
    const g = new THREE.CylinderGeometry(0.29, 0.29, 0.88, 28, 1, true); scaleUV(g, 1.82, 0.88);
    const m = tipped ? M4(x, y + 0.29, z, ry, 0, Math.PI / 2) : M4(x, y + 0.44, z, ry);
    B.add(g, mat, m, { uv: 'local' });
    for (const yy of [-0.44, 0.44]) {
      const lid = new THREE.CylinderGeometry(0.285, 0.285, 0.01, 28); scaleUV(lid, 0.6, 0.6);
      B.add(lid, mat, m.clone().multiply(M4(0, yy * 0.98, 0)), { uv: 'local' });
      const rim = new THREE.TorusGeometry(0.29, 0.014, 6, 28); B.add(rim, mat, m.clone().multiply(M4(0, yy, 0, 0, Math.PI / 2)), { uv: 'world' });
    }
    for (const yy of [-0.15, 0.15]) B.add(new THREE.TorusGeometry(0.295, 0.012, 6, 28), mat, m.clone().multiply(M4(0, yy, 0, 0, Math.PI / 2)), { uv: 'world' });
    B.add(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 10), 'steel', m.clone().multiply(M4(0.15, 0.445, 0.05)));
    if (tipped) B.collider(x - 0.45, y, z - 0.45, x + 0.45, y + 0.58, z + 0.45, 'metal');
    else B.collider(x - 0.29, y, z - 0.29, x + 0.29, y + 0.88, z + 0.29, 'metal');
  }
  pallet(12, -17.5); barrel(11.7, 0.15, -17.8, 'pmBlue'); barrel(12.3, 0.15, -17.75, 'pmBlue', 1); barrel(11.75, 0.15, -17.2, 'pmBlue', 2); barrel(12.35, 0.15, -17.15, 'pmRed', 3);
  barrel(13.6, 0, -16.2, 'pmBlue', 0.5); barrel(14.0, 0, -18.4, 'pmRed', 0.2, true);
  barrel(-5.2, 0, -13.2, 'pmRed', 0.3); barrel(-4.6, 0, -13.6, 'pmRed', 1.3); barrel(-5.0, 0, -12.6, 'pmBlue', 2.1);
  barrel(-12.5, 0, 9.5, 'pmBlue', 0.7); pallet(-10.3, 9.6, 0.3);
  barrel(22.5, 0, 12.0, 'pmRed', 0.2);

  // traffic cones
  function cone(x, z) {
    B.add(new THREE.ConeGeometry(0.16, 0.6, 20, 1, true), 'plasticOrange', M4(x, 0.33, z), { uv: 'world' });
    B.add(new THREE.BoxGeometry(0.38, 0.04, 0.38), 'plasticBlack', M4(x, 0.02, z));
    B.add(new THREE.CylinderGeometry(0.105, 0.125, 0.1, 20, 1, true), 'plasticWhite', M4(x, 0.38, z), { uv: 'world' });
  }
  cone(-1, 11.5); cone(0.5, 11.8); cone(11.5, 16.5); cone(-8.3, -6.6); cone(3.6, -12.8);

  // manhole cover
  B.add(new THREE.CylinderGeometry(0.42, 0.42, 0.02, 32), 'diamond', M4(-2, 0.004, 6), { uv: 'world', noShadow: true });

  // build batches
  const meshes = B.build(root);

  // add lights
  for (const s of lights.shadowSpots) {
    s.castShadow = true;
    s.shadow.mapSize.set(quality.shadowSize, quality.shadowSize);
    s.shadow.bias = -0.0004;
    s.shadow.normalBias = 0.03;
    s.shadow.camera.near = 0.3;
    s.shadow.radius = 2;
    root.add(s); root.add(s.target);
  }
  for (const p of lights.points) root.add(p);
  for (const s of lights.freeSpots || []) { root.add(s); root.add(s.target); }

  const hemi = new THREE.HemisphereLight(0x2a3a55, 0x0c0907, 0.6);
  root.add(hemi);
  lights.hemi = hemi;

  return {
    root, meshes, colliders: B.colliders, lights,
    spawn: V(0, 0, 20), spawnYaw: 0,
    steam: [V(-2, 0.05, 6)],
    extraction: V(4, 0, FZ + 1.2),
    droneWaypoints: [
      V(0, 6, 12), V(-9, 5.5, -1), V(0, 6.5, -11), V(12, 6, -8), V(13, 5.5, 11), V(-12, 6.5, -14),
      V(-19, 7.5, 8), V(4, 7, 4), V(22, 7, 2), V(-4, 5.5, 18), V(9, 6.5, -17), V(-20, 7, -3),
    ],
  };
}

function mergeAll(geos) {
  const parts = geos.map(g => (g.index ? g.toNonIndexed() : g));
  for (const p of parts) for (const k of Object.keys(p.attributes)) if (!['position', 'normal', 'uv'].includes(k)) p.deleteAttribute(k);
  let count = 0; parts.forEach(p => count += p.attributes.position.count);
  const pos = new Float32Array(count * 3), nor = new Float32Array(count * 3), uv = new Float32Array(count * 2);
  let o = 0;
  for (const p of parts) {
    pos.set(p.attributes.position.array, o * 3); nor.set(p.attributes.normal.array, o * 3);
    if (p.attributes.uv) uv.set(p.attributes.uv.array, o * 2);
    o += p.attributes.position.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.computeBoundingSphere();
  return g;
}

function fence(B, a, b, height) {
  const dir = b.clone().sub(a);
  const len = dir.length();
  dir.normalize();
  const ang = Math.atan2(dir.x, dir.z);
  const n = Math.ceil(len / 3);
  for (let i = 0; i <= n; i++) {
    const p = a.clone().addScaledVector(dir, (i / n) * len);
    B.add(new THREE.CylinderGeometry(0.035, 0.035, height + 0.1, 10), 'steel', M4(p.x, p.y + (height + 0.1) / 2, p.z));
    // barbed wire arm
    const arm = new THREE.BoxGeometry(0.03, 0.5, 0.03);
    B.add(arm, 'steel', M4(p.x, p.y + height + 0.2, p.z, ang + Math.PI / 2, 0, 0).multiply(M4(0, 0, 0, 0, 0.6, 0)));
  }
  // top & bottom rails
  const mid = a.clone().add(b).multiplyScalar(0.5);
  for (const yy of [height, 0.08]) {
    const g = new THREE.CylinderGeometry(0.025, 0.025, len, 8);
    B.add(g, 'steel', M4(mid.x, a.y + yy, mid.z, ang, Math.PI / 2));
  }
  // mesh panel
  const pg = new THREE.PlaneGeometry(len, height - 0.1);
  scaleUV(pg, len / B.materials.chain.userData.tile[0], (height - 0.1) / B.materials.chain.userData.tile[1]);
  B.add(pg, 'chain', M4(mid.x, a.y + height / 2 + 0.02, mid.z, ang + Math.PI / 2), { uv: 'local' });
  // barbed wire coils
  const side = new THREE.Vector3(dir.z, 0, -dir.x);
  for (const off of [0]) {
    const p0 = a.clone().add(V(0, height + 0.42, 0)).addScaledVector(side, off);
    const p1 = b.clone().add(V(0, height + 0.42, 0)).addScaledVector(side, off);
    // helix around the line: build in local frame aligned to dir
    const curve = new HelixCurve(V(0, 0, 0), V(len, 0, 0), 0.2, len / 0.22);
    const tube = new THREE.TubeGeometry(curve, Math.floor(len / 0.22 * 10), 0.005, 4, false);
    const m = new THREE.Matrix4().compose(p0, new THREE.Quaternion().setFromUnitVectors(V(1, 0, 0), dir), ONE);
    B.add(tube, 'steel', m, { noShadow: false });
    void p1;
  }
}
