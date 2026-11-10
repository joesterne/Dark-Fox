// Security drones: procedural quad-rotor model, patrol/alert/attack AI, plasma bolts, damage & explosions.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { raycastBoxes } from './geo.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const ONE = V(1, 1, 1);
const M4 = (x, y, z, rx = 0, ry = 0, rz = 0) => new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), ONE);

function buildDroneAssets(lib) {
  const T = lib.tex;
  const mats = {
    shell: new THREE.MeshPhysicalMaterial({ color: 0x8f9499, roughness: 0.38, metalness: 0.1, clearcoat: 0.7, clearcoatRoughness: 0.25, map: T.grunge.map, normalMap: T.grunge.normalMap, normalScale: new THREE.Vector2(0.3, 0.3), roughnessMap: T.grunge.ormMap }),
    dark: new THREE.MeshStandardMaterial({ color: 0x141517, roughness: 0.5, metalness: 0.6, map: T.grunge.map, roughnessMap: T.grunge.ormMap }),
    carbon: new THREE.MeshPhysicalMaterial({ color: 0xffffff, map: T.carbon.map, normalMap: T.carbon.normalMap, roughnessMap: T.carbon.ormMap, roughness: 1, clearcoat: 1, clearcoatRoughness: 0.08 }),
    hazard: new THREE.MeshStandardMaterial({ color: 0xc89a12, roughness: 0.45, metalness: 0.1, map: T.grunge.map }),
    lens: new THREE.MeshPhysicalMaterial({ color: 0x020202, roughness: 0.05, clearcoat: 1, metalness: 0.2 }),
    prop: new THREE.MeshStandardMaterial({ color: 0x0d0d0e, roughness: 0.4, metalness: 0.1 }),
  };
  const G = {};
  const add = (k, g, m) => { const gg = g.index ? g.toNonIndexed() : g; if (m) gg.applyMatrix4(m); for (const a of Object.keys(gg.attributes)) if (!['position', 'normal', 'uv'].includes(a)) gg.deleteAttribute(a); (G[k] ||= []).push(gg); };
  // fuselage (lathe, elongated)
  const prof = [[0, 0.1], [0.1, 0.098], [0.17, 0.08], [0.22, 0.045], [0.235, 0.0], [0.22, -0.035], [0.17, -0.065], [0.09, -0.085], [0, -0.09]].map(p => new THREE.Vector2(p[0], p[1]));
  const lathe = new THREE.LatheGeometry(prof, 32);
  lathe.scale(1, 1, 1.45);
  add('shell', lathe);
  // dorsal spine + sensor mast
  add('dark', new THREE.BoxGeometry(0.07, 0.03, 0.42), M4(0, 0.1, 0.02));
  add('dark', new THREE.CylinderGeometry(0.008, 0.008, 0.12, 6), M4(0.05, 0.16, 0.12));
  add('dark', new THREE.CylinderGeometry(0.004, 0.004, 0.16, 6), M4(-0.05, 0.17, 0.14));
  // hazard stripes on the flanks
  for (const s of [-1, 1]) add('hazard', new THREE.BoxGeometry(0.01, 0.025, 0.18), M4(s * 0.228, 0.0, -0.05));
  // arms + motors + guards
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const ax = sx * 0.33, az = sz * 0.36;
    const ang = Math.atan2(ax, az);
    const len = Math.hypot(ax, az) - 0.12;
    add('carbon', new THREE.BoxGeometry(0.045, 0.022, len), M4(ax * 0.55, 0.02, az * 0.55, 0, ang, 0));
    add('dark', new THREE.CylinderGeometry(0.042, 0.048, 0.07, 16), M4(ax, 0.035, az));
    add('dark', new THREE.CylinderGeometry(0.012, 0.012, 0.03, 8), M4(ax, 0.08, az));
    add('dark', new THREE.TorusGeometry(0.2, 0.008, 6, 40), M4(ax, 0.08, az, Math.PI / 2));
    for (let k = 0; k < 3; k++) {
      const a = ang + k * 2.1;
      add('dark', new THREE.BoxGeometry(0.008, 0.008, 0.18), M4(ax + Math.sin(a) * 0.1, 0.08, az + Math.cos(a) * 0.1, 0, a, 0));
    }
    add('dark', new THREE.CylinderGeometry(0.006, 0.006, 0.12, 6), M4(ax, -0.03, az)); // landing leg
  }
  // gimbal + eye
  add('dark', new THREE.SphereGeometry(0.075, 24, 16), M4(0, -0.1, -0.2));
  add('dark', new THREE.CylinderGeometry(0.05, 0.05, 0.03, 20), M4(0, -0.1, -0.265, Math.PI / 2));
  add('lens', new THREE.SphereGeometry(0.038, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), M4(0, -0.1, -0.28, -Math.PI / 2));
  // searchlight
  add('dark', new THREE.CylinderGeometry(0.035, 0.03, 0.09, 16), M4(0.09, -0.09, -0.16, Math.PI / 2));
  // gun pod
  add('dark', new THREE.BoxGeometry(0.05, 0.045, 0.18), M4(-0.09, -0.09, -0.12));
  add('dark', new THREE.CylinderGeometry(0.009, 0.009, 0.14, 8), M4(-0.09, -0.09, -0.26, Math.PI / 2));
  const merged = {};
  for (const [k, list] of Object.entries(G)) merged[k] = mergeGeometries(list, false);

  // propeller blade
  const blade = new THREE.BoxGeometry(0.36, 0.004, 0.035);
  const bladePos = blade.attributes.position;
  for (let i = 0; i < bladePos.count; i++) { const x = bladePos.getX(i); bladePos.setY(i, bladePos.getY(i) + Math.sign(bladePos.getZ(i)) * 0.006 * Math.sign(x)); }
  blade.computeVertexNormals();
  return { mats, geos: merged, blade };
}

const discMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, side: THREE.DoubleSide,
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `varying vec2 vUv; void main(){ float r = length(vUv - 0.5) * 2.0; float a = smoothstep(1.0, 0.85, r) * smoothstep(0.08, 0.2, r) * (0.12 + 0.1 * smoothstep(0.7, 0.95, r)); gl_FragColor = vec4(vec3(0.02), a); }`,
});

export class DroneManager {
  constructor(scene, lib, world, fx, audio, colliders, waypoints, maxActive = 3) {
    this.scene = scene;
    this.world = world;
    this.fx = fx;
    this.audio = audio;
    this.colliders = colliders;
    this.waypoints = waypoints;
    this.assets = buildDroneAssets(lib);
    this.drones = [];
    this.bolts = [];
    this.total = 6;
    this.spawned = 0;
    this.killed = 0;
    this.spawnTimer = 0;
    this.maxActive = maxActive;
    this.alarm = 0;
    // pre-create light slots so the light count never changes (avoids shader recompiles)
    this.slots = [];
    for (let i = 0; i < maxActive; i++) {
      const s = new THREE.SpotLight(0xdde6ff, 0, 34, 0.32, 0.5, 2);
      s.userData.fogScale = 0.9;
      scene.add(s); scene.add(s.target);
      world.freeSpots.push(s);
      this.slots.push({ light: s, drone: null });
    }
    this.boltLight = new THREE.PointLight(0xff2a1a, 0, 10, 2);
    scene.add(this.boltLight);
  }

  _model() {
    const A = this.assets;
    const g = new THREE.Group();
    const body = new THREE.Group();
    g.add(body);
    for (const [k, geo] of Object.entries(A.geos)) {
      const m = new THREE.Mesh(geo, A.mats[k]);
      m.castShadow = true; m.receiveShadow = true;
      body.add(m);
    }
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0, emissive: 0xff1608, emissiveIntensity: 30 });
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.016, 12, 8), eyeMat);
    eye.position.set(0, -0.1, -0.312);
    body.add(eye);
    const ledMat = new THREE.MeshStandardMaterial({ color: 0, emissive: 0xff2010, emissiveIntensity: 25 });
    const ledG = new THREE.MeshStandardMaterial({ color: 0, emissive: 0x20ff60, emissiveIntensity: 18 });
    const leds = [];
    for (const [sx, sz, m] of [[1, 1, ledG], [-1, 1, ledMat], [1, -1, ledG], [-1, -1, ledMat]]) {
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 6), m);
      l.position.set(sx * 0.33, -0.005, sz * 0.36);
      body.add(l); leds.push(l);
    }
    const lampMat = new THREE.MeshStandardMaterial({ color: 0, emissive: 0xe8eeff, emissiveIntensity: 0 });
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.03, 16), lampMat);
    lamp.position.set(0.09, -0.09, -0.206);
    lamp.rotation.y = Math.PI;
    body.add(lamp);
    const props = [];
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const p = new THREE.Group();
      p.position.set(sx * 0.33, 0.1, sz * 0.36);
      const b = new THREE.Mesh(A.blade, A.mats.prop);
      p.add(b);
      const disc = new THREE.Mesh(new THREE.CircleGeometry(0.19, 32), discMat);
      disc.rotation.x = -Math.PI / 2;
      p.add(disc);
      body.add(p);
      props.push(p);
    }
    return { g, body, eyeMat, lampMat, props, leds, ledMat };
  }

  spawn(pos) {
    const m = this._model();
    m.g.position.copy(pos);
    this.scene.add(m.g);
    const d = {
      ...m, pos: pos.clone(), vel: V(0, 0, 0), yaw: Math.random() * 6.28, hp: 140, state: 'patrol', stateT: 0,
      wp: Math.floor(Math.random() * this.waypoints.length), target: V(), lastSeen: V(), seenT: 0, burst: 0,
      fireT: 1 + Math.random(), orbitA: Math.random() * 6.28, alive: true, hum: this.audio?.droneHum(), sweep: Math.random() * 6,
      hitFlash: 0, id: this.spawned,
    };
    d.target.copy(this.waypoints[d.wp]);
    const slot = this.slots.find(s => !s.drone);
    if (slot) { slot.drone = d; d.slot = slot; }
    this.drones.push(d);
    this.spawned++;
    return d;
  }

  start() {
    const entries = [V(-6, 9, -30), V(16, 9, -30), V(-22, 9, 30), V(20, 9, 30)];
    for (let i = 0; i < this.maxActive; i++) {
      const d = this.spawn(this.waypoints[(i * 4) % this.waypoints.length].clone());
      d.target.copy(this.waypoints[(i * 4 + 1) % this.waypoints.length]);
    }
    this.entries = entries;
  }

  activeCount() { return this.drones.filter(d => d.alive).length; }

  _los(from, to) {
    const dir = to.clone().sub(from);
    const dist = dir.length();
    dir.divideScalar(dist);
    const hit = raycastBoxes(this.colliders, from, dir, dist, true);
    return !hit;
  }

  // ray test from the player's weapon; returns closest hit
  raycast(origin, dir, maxDist) {
    let best = null;
    for (const d of this.drones) {
      if (!d.alive) continue;
      const oc = origin.clone().sub(d.pos);
      const b = oc.dot(dir);
      const c = oc.lengthSq() - 0.42 * 0.42;
      const disc = b * b - c;
      if (disc < 0) continue;
      const t = -b - Math.sqrt(disc);
      if (t < 0 || t > maxDist) continue;
      if (!best || t < best.t) {
        const p = origin.clone().addScaledVector(dir, t);
        // weak spot: the eye
        const eyeW = new THREE.Vector3(0, -0.1, -0.3).applyMatrix4(d.body.matrixWorld);
        const crit = p.distanceTo(eyeW) < 0.13;
        best = { t, drone: d, point: p, normal: p.clone().sub(d.pos).normalize(), crit };
      }
    }
    return best;
  }

  damage(d, amount, point, crit) {
    if (!d.alive) return false;
    d.hp -= amount * (crit ? 2 : 1);
    d.hitFlash = 1;
    this.fx.impact(point, point.clone().sub(d.pos).normalize(), 'metal');
    this.audio?.hitMetal(point);
    if (d.state === 'patrol' || d.state === 'search') this._alert(d);
    // alert nearby drones
    for (const o of this.drones) if (o !== d && o.alive && o.pos.distanceTo(d.pos) < 18 && o.state === 'patrol') this._alert(o);
    if (d.hp <= 0) { this._kill(d); return true; }
    return false;
  }

  _alert(d) {
    d.state = 'alert'; d.stateT = 0;
    this.audio?.droneAlert(d.pos);
  }

  _kill(d) {
    d.alive = false;
    this.killed++;
    this.fx.explosion(d.pos.clone());
    this.audio?.explosion(d.pos);
    this.world.flashExplosion?.(d.pos);
    this.scene.remove(d.g);
    d.hum?.stop();
    if (d.slot) { d.slot.light.intensity = 0; d.slot.drone = null; d.slot = null; }
    this.onKill?.(d);
  }

  update(dt, player, camera) {
    const playerHead = player.pos.clone().add(V(0, player.height - 0.15, 0));
    const playerChest = player.pos.clone().add(V(0, player.height * 0.65, 0));
    let anyAttacking = false;
    for (const d of this.drones) {
      if (!d.alive) continue;
      d.stateT += dt;
      const toP = playerHead.clone().sub(d.pos);
      const distP = toP.length();
      const fwd = V(-Math.sin(d.yaw), 0, -Math.cos(d.yaw));
      const ang = Math.acos(THREE.MathUtils.clamp(fwd.dot(V(toP.x, 0, toP.z).normalize()), -1, 1));
      const canSee = player.alive && distP < 36 && (ang < 1.1 || distP < 7 || d.state === 'attack') && this._los(d.pos, playerHead);
      if (canSee) { d.seenT += dt; d.lastSeen.copy(player.pos); } else d.seenT = Math.max(0, d.seenT - dt * 0.5);

      let desired = d.target.clone();
      let maxSpeed = 2.6;
      let faceTarget = null;
      switch (d.state) {
        case 'patrol': {
          if (d.pos.distanceTo(d.target) < 1.5) {
            d.wp = (d.wp + 1 + Math.floor(Math.random() * 3)) % this.waypoints.length;
            d.target.copy(this.waypoints[d.wp]);
          }
          if (d.seenT > 0.35) this._alert(d);
          break;
        }
        case 'alert': {
          desired = d.pos.clone();
          faceTarget = playerHead;
          if (d.stateT > 0.7) { d.state = 'attack'; d.stateT = 0; d.fireT = 0.4; }
          break;
        }
        case 'attack': {
          anyAttacking = true;
          d.orbitA += dt * 0.35 * (d.id % 2 ? 1 : -1);
          const r = 10 + Math.sin(d.stateT * 0.4 + d.id) * 3;
          desired = d.lastSeen.clone().add(V(Math.cos(d.orbitA) * r, 4.5 + Math.sin(d.stateT * 0.7 + d.id * 2) * 1.5, Math.sin(d.orbitA) * r));
          desired.x = THREE.MathUtils.clamp(desired.x, -24, 27); desired.z = THREE.MathUtils.clamp(desired.z, -19, 22);
          maxSpeed = 5.2;
          faceTarget = canSee ? playerHead : d.lastSeen.clone().add(V(0, 1.5, 0));
          d.fireT -= dt;
          if (canSee && d.fireT <= 0) {
            this._shoot(d, playerChest, player);
            d.burst++;
            if (d.burst >= 3) { d.burst = 0; d.fireT = 1.5 + Math.random() * 1.0; } else d.fireT = 0.14;
          }
          if (!canSee && d.seenT <= 0) { d.state = 'search'; d.stateT = 0; d.target.copy(d.lastSeen).add(V(0, 5, 0)); }
          break;
        }
        case 'search': {
          maxSpeed = 3.5;
          desired = d.target.clone();
          if (canSee && d.seenT > 0.2) { d.state = 'attack'; d.stateT = 0; }
          if (d.stateT > 9) { d.state = 'patrol'; d.target.copy(this.waypoints[d.wp]); }
          break;
        }
        case 'arrive': {
          maxSpeed = 7;
          if (d.pos.distanceTo(d.target) < 2) { d.state = 'patrol'; }
          break;
        }
      }

      // steering
      const toT = desired.clone().sub(d.pos);
      const want = toT.clone().clampLength(0, maxSpeed);
      if (toT.length() < 3) want.multiplyScalar(toT.length() / 3);
      // obstacle avoidance
      for (const b of this.colliders) {
        if (b.max.y < d.pos.y - 1.2) continue;
        const cx = THREE.MathUtils.clamp(d.pos.x, b.min.x, b.max.x), cy = THREE.MathUtils.clamp(d.pos.y, b.min.y, b.max.y), cz = THREE.MathUtils.clamp(d.pos.z, b.min.z, b.max.z);
        const dv = V(d.pos.x - cx, d.pos.y - cy, d.pos.z - cz);
        const dl = dv.length();
        if (dl < 1.4) { want.addScaledVector(dl > 1e-4 ? dv.divideScalar(dl) : V(0, 1, 0), (1.4 - dl) * 6); want.y += (1.4 - dl) * 3; }
      }
      for (const o of this.drones) {
        if (o === d || !o.alive) continue;
        const dv = d.pos.clone().sub(o.pos); const dl = dv.length();
        if (dl < 2.5 && dl > 1e-3) want.addScaledVector(dv.divideScalar(dl), (2.5 - dl) * 2);
      }
      if (d.pos.y < 2.2) want.y += (2.2 - d.pos.y) * 4;
      const acc = want.sub(d.vel).clampLength(0, 7);
      d.vel.addScaledVector(acc, dt);
      d.pos.addScaledVector(d.vel, dt);

      // orientation: yaw toward travel or target, tilt with acceleration
      const lookDir = faceTarget ? faceTarget.clone().sub(d.pos) : d.vel.clone();
      if (lookDir.x * lookDir.x + lookDir.z * lookDir.z > 0.01) {
        const ty = Math.atan2(-lookDir.x, -lookDir.z);
        let dy = ty - d.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
        d.yaw += dy * Math.min(1, dt * (faceTarget ? 5 : 2));
      }
      const bob = Math.sin(this.world.time.value * 2.1 + d.id) * 0.05;
      d.g.position.set(d.pos.x, d.pos.y + bob, d.pos.z);
      const localAcc = acc.clone().applyAxisAngle(V(0, 1, 0), -d.yaw);
      d.body.rotation.set(THREE.MathUtils.clamp(localAcc.z * 0.06 + d.vel.length() * 0.0, -0.4, 0.4) + (faceTarget ? 0 : 0), d.yaw, THREE.MathUtils.clamp(-localAcc.x * 0.06, -0.4, 0.4), 'YXZ');
      d.body.rotation.x = THREE.MathUtils.clamp(localAcc.z * 0.07, -0.35, 0.35);
      d.body.rotation.z = THREE.MathUtils.clamp(-localAcc.x * 0.07, -0.35, 0.35);
      d.body.rotation.y = d.yaw;
      for (let i = 0; i < 4; i++) d.props[i].children[0].rotation.y += dt * (i % 2 ? 90 : -90);
      // lights
      d.hitFlash = Math.max(0, d.hitFlash - dt * 6);
      const hostile = d.state === 'attack' || d.state === 'alert';
      d.eyeMat.emissiveIntensity = (hostile ? 60 : 25) + d.hitFlash * 80;
      const blink = (Math.sin(this.world.time.value * 6 + d.id) > 0.6) ? 1 : 0.1;
      d.ledMat.emissiveIntensity = 25 * blink;
      // searchlight
      if (d.slot) {
        const L = d.slot.light;
        d.body.updateWorldMatrix(true, false);
        L.position.copy(V(0.09, -0.09, -0.22).applyMatrix4(d.body.matrixWorld));
        let aim;
        if (hostile || d.state === 'search') aim = (canSee ? playerChest : d.lastSeen).clone();
        else {
          d.sweep += dt * 0.6;
          const f = V(-Math.sin(d.yaw + Math.sin(d.sweep) * 0.6), 0, -Math.cos(d.yaw + Math.sin(d.sweep) * 0.6));
          aim = d.pos.clone().addScaledVector(f, 6).setY(0);
        }
        L.target.position.lerp(aim, Math.min(1, dt * 4));
        L.color.setHex(hostile ? 0xffb0a0 : 0xdde6ff);
        L.intensity = hostile ? 300 : 200;
        d.lampMat.emissiveIntensity = 60;
      }
      // damage smoke
      if (d.hp < 60 && Math.random() < dt * (d.hp < 35 ? 18 : 7)) this.fx.damageSmoke(d.pos.clone().add(V(0, 0.08, 0)), d.hp < 35);
      // audio
      d.hum?.update(d.pos, d.vel, hostile);
    }
    this.alarm += ((anyAttacking ? 1 : 0) - this.alarm) * Math.min(1, dt * 2);

    // reinforcements
    if (this.spawned < this.total && this.activeCount() < this.maxActive) {
      this.spawnTimer += dt;
      if (this.spawnTimer > 4) {
        this.spawnTimer = 0;
        const e = this.entries[Math.floor(Math.random() * this.entries.length)];
        const d = this.spawn(e.clone());
        d.state = 'arrive';
        d.target.copy(this.waypoints[Math.floor(Math.random() * this.waypoints.length)]);
        this.audio?.droneAlert(d.pos);
      }
    }

    this._updateBolts(dt, player, playerChest);
  }

  _shoot(d, aimAt, player) {
    d.body.updateWorldMatrix(true, false);
    const muzzle = V(-0.09, -0.09, -0.34).applyMatrix4(d.body.matrixWorld);
    const lead = player.velocity.clone().multiplyScalar(muzzle.distanceTo(aimAt) / 38 * 0.6);
    const spread = 0.025 + Math.min(1, player.horizSpeed / 6) * 0.03 + (player.crouchAmt * -0.008);
    const dir = aimAt.clone().add(lead).sub(muzzle).normalize();
    dir.x += (Math.random() - 0.5) * spread * 2; dir.y += (Math.random() - 0.5) * spread * 2; dir.z += (Math.random() - 0.5) * spread * 2;
    dir.normalize();
    this.bolts.push({ pos: muzzle.clone(), vel: dir.multiplyScalar(38), age: 0 });
    this.fx.add.spawn({ pos: muzzle, size: 0.12, life: 0.05, col: new THREE.Color(14, 1.2, 0.6), type: 0 });
    this.audio?.droneShot(muzzle);
  }

  _updateBolts(dt, player, chest) {
    const keep = [];
    let lightPos = null;
    for (const b of this.bolts) {
      b.age += dt;
      const step = b.vel.clone().multiplyScalar(dt);
      const len = step.length();
      const dir = step.clone().divideScalar(len);
      // hit player? (segment vs sphere around chest/head)
      const oc = b.pos.clone().sub(chest);
      const proj = THREE.MathUtils.clamp(-oc.dot(dir), 0, len);
      const closest = b.pos.clone().addScaledVector(dir, proj);
      if (player.alive && closest.distanceTo(chest) < 0.45) {
        player.damage(9, b.pos);
        this.onPlayerHit?.(b.pos);
        continue;
      }
      // near miss whizz
      if (!b.whizz && closest.distanceTo(chest) < 2.0) { b.whizz = true; this.audio?.whizz(closest); }
      const hit = raycastBoxes(this.colliders, b.pos, dir, len, true);
      if (hit || b.age > 2.5) {
        if (hit) {
          this.fx.add.spawn({ pos: hit.point.clone().addScaledVector(hit.normal, 0.03), size: 0.25, life: 0.12, col: new THREE.Color(10, 1, 0.4), type: 0 });
          for (let i = 0; i < 6; i++) this.fx.add.spawn({ pos: hit.point.clone(), vel: hit.normal.clone().multiplyScalar(2).add(V((Math.random() - 0.5) * 4, Math.random() * 3, (Math.random() - 0.5) * 4)), size: 0.006, life: 0.3, col: new THREE.Color(10, 1.2, 0.5), type: 3, stretch: 0.03, grav: 9.8 });
          this.fx.addDecal(hit.point, hit.normal);
        }
        continue;
      }
      b.pos.add(step);
      // visual: stretched bolt
      this.fx.add.spawn({ pos: b.pos.clone(), vel: b.vel.clone(), size: 0.018, life: 0.0001 + dt * 1.05, col: new THREE.Color(16, 1.2, 0.5), type: 3, stretch: 0.012 });
      lightPos = b.pos;
      keep.push(b);
    }
    this.bolts = keep;
    if (lightPos) { this.boltLight.position.copy(lightPos); this.boltLight.intensity = 6; } else this.boltLight.intensity = 0;
  }
}
