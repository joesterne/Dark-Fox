// Geometry helpers: world-projected UVs, per-face box UVs, static batching and AABB colliders.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const _v = new THREE.Vector3();
const _n = new THREE.Vector3();

// Box-projects UVs from world space (after the geometry has been transformed into world space).
export function worldUV(geo, tile, offset = [0, 0]) {
  const pos = geo.attributes.position, nor = geo.attributes.normal;
  let uv = geo.attributes.uv;
  if (!uv) { uv = new THREE.BufferAttribute(new Float32Array(pos.count * 2), 2); geo.setAttribute('uv', uv); }
  const [tu, tv] = tile;
  for (let i = 0; i < pos.count; i++) {
    _v.fromBufferAttribute(pos, i); _n.fromBufferAttribute(nor, i);
    const ax = Math.abs(_n.x), ay = Math.abs(_n.y), az = Math.abs(_n.z);
    let u, v;
    if (ay >= ax && ay >= az) { u = _v.x; v = -_v.z * Math.sign(_n.y || 1); }
    else if (ax >= az) { u = -_v.z * Math.sign(_n.x); v = _v.y; }
    else { u = _v.x * Math.sign(_n.z); v = _v.y; }
    uv.setXY(i, u / tu + offset[0], v / tv + offset[1]);
  }
  uv.needsUpdate = true;
  return geo;
}

// Scale a box geometry's UVs per face so 1 UV unit == tile meters (local space mapping).
export function boxUV(geo, w, h, d, tile, rotate = false) {
  const uv = geo.attributes.uv;
  const [tu, tv] = tile;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      let u = uv.getX(i) * dims[f][0], v = uv.getY(i) * dims[f][1];
      if (rotate) { const t = u; u = v; v = t; }
      uv.setXY(i, u / tu, v / tv);
    }
  }
  return geo;
}

export function scaleUV(geo, sx, sy, ox = 0, oy = 0) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * sx + ox, uv.getY(i) * sy + oy);
  return geo;
}

export class AABB {
  constructor(min, max, surface = 'concrete', flags = {}) {
    this.min = min; this.max = max; this.surface = surface;
    this.bulletPass = !!flags.bulletPass;
    this.noWalk = !!flags.noWalk;
  }
}

// Collects transformed geometries per material and merges them into a handful of draw calls.
export class StaticBatcher {
  constructor(materials) {
    this.materials = materials;
    this.groups = new Map();
    this.colliders = [];
  }

  add(geo, matKey, matrix, opts = {}) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (matrix) g.applyMatrix4(matrix);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    const mat = this.materials[matKey];
    if (!mat) throw new Error('missing material ' + matKey);
    if (opts.uv === 'world') worldUV(g, mat.userData.tile || [1, 1], opts.uvOffset);
    if (!g.attributes.uv) worldUV(g, [1, 1]);
    const key = matKey + (opts.noShadow ? '|ns' : '');
    if (!this.groups.has(key)) this.groups.set(key, { matKey, geos: [], noShadow: !!opts.noShadow });
    this.groups.get(key).geos.push(g);
    if (opts.collider) {
      g.computeBoundingBox();
      const bb = g.boundingBox;
      this.colliders.push(new AABB(bb.min.clone(), bb.max.clone(), opts.surface || 'concrete', opts));
    }
    return g;
  }

  // convenience: axis aligned box positioned by center
  box(w, h, d, matKey, x, y, z, opts = {}) {
    const geo = new THREE.BoxGeometry(w, h, d);
    if (opts.uv === 'local') boxUV(geo, w, h, d, this.materials[matKey].userData.tile || [1, 1], opts.rotateUV);
    const m = new THREE.Matrix4();
    if (opts.rotY) m.makeRotationY(opts.rotY);
    m.setPosition(x, y, z);
    return this.add(geo, matKey, m, { uv: opts.uv === 'local' ? 'local' : 'world', ...opts });
  }

  collider(minX, minY, minZ, maxX, maxY, maxZ, surface = 'concrete', flags = {}) {
    this.colliders.push(new AABB(new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, maxY, maxZ), surface, flags));
  }

  build(parent) {
    const meshes = [];
    for (const [, grp] of this.groups) {
      const merged = mergeGeometries(grp.geos, false);
      merged.computeBoundingSphere();
      merged.computeBoundingBox();
      const mesh = new THREE.Mesh(merged, this.materials[grp.matKey]);
      mesh.castShadow = !grp.noShadow;
      mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      parent.add(mesh);
      meshes.push(mesh);
      grp.geos.forEach(g => g.dispose());
    }
    return meshes;
  }
}

// Ray vs AABB list. Returns {t, point, normal, box} or null.
const _inv = new THREE.Vector3();
export function raycastBoxes(boxes, origin, dir, maxDist = 1000, forBullets = false) {
  let best = null, bestT = maxDist;
  _inv.set(1 / dir.x, 1 / dir.y, 1 / dir.z);
  for (const b of boxes) {
    if (forBullets && b.bulletPass) continue;
    let tmin = (b.min.x - origin.x) * _inv.x, tmax = (b.max.x - origin.x) * _inv.x;
    let axis = 0;
    if (tmin > tmax) { const t = tmin; tmin = tmax; tmax = t; }
    let tymin = (b.min.y - origin.y) * _inv.y, tymax = (b.max.y - origin.y) * _inv.y;
    if (tymin > tymax) { const t = tymin; tymin = tymax; tymax = t; }
    if (tmin > tymax || tymin > tmax) continue;
    if (tymin > tmin) { tmin = tymin; axis = 1; }
    if (tymax < tmax) tmax = tymax;
    let tzmin = (b.min.z - origin.z) * _inv.z, tzmax = (b.max.z - origin.z) * _inv.z;
    if (tzmin > tzmax) { const t = tzmin; tzmin = tzmax; tzmax = t; }
    if (tmin > tzmax || tzmin > tmax) continue;
    if (tzmin > tmin) { tmin = tzmin; axis = 2; }
    if (tzmax < tmax) tmax = tzmax;
    if (tmin < 0 || tmin >= bestT) continue;
    bestT = tmin;
    const normal = new THREE.Vector3();
    if (axis === 0) normal.x = -Math.sign(dir.x); else if (axis === 1) normal.y = -Math.sign(dir.y); else normal.z = -Math.sign(dir.z);
    best = { t: tmin, normal, box: b };
  }
  if (best) best.point = origin.clone().addScaledVector(dir, best.t);
  return best;
}
