// First-person controller with capsule-vs-AABB collision, step-up, crouch, sprint and camera feel.
import * as THREE from 'three';

const STAND_H = 1.78, CROUCH_H = 1.15, RADIUS = 0.33, STEP = 0.45;

export class Player {
  constructor(camera, colliders, audio) {
    this.camera = camera;
    this.colliders = colliders;
    this.audio = audio;
    this.pos = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0;
    this.recoilPitch = 0; this.recoilYaw = 0;
    this.height = STAND_H;
    this.onGround = true;
    this.crouchAmt = 0;
    this.sprintAmt = 0;
    this.horizSpeed = 0;
    this.landDip = 0;
    this.stepDist = 0;
    this.health = 100;
    this.lastHit = -10;
    this.alive = true;
    this.shake = 0;
    this.bobT = 0;
    this.time = 0;
    this.eyeSmooth = STAND_H - 0.12;
  }

  spawn(p, yaw) {
    this.pos.copy(p); this.velocity.set(0, 0, 0);
    this.yaw = yaw; this.pitch = 0; this.health = 100; this.alive = true;
  }

  look(dx, dy, sens) {
    this.yaw -= dx * sens;
    this.pitch -= dy * sens;
    this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch));
  }

  addRecoil(p, y) { this.recoilPitch += p; this.recoilYaw += y; }

  groundHeightAt(p, r = RADIUS, maxY = Infinity) {
    let h = -Infinity;
    for (const b of this.colliders) {
      if (b.noWalk) continue;
      if (b.max.y > maxY) continue;
      const cx = Math.max(b.min.x, Math.min(p.x, b.max.x));
      const cz = Math.max(b.min.z, Math.min(p.z, b.max.z));
      const dx = p.x - cx, dz = p.z - cz;
      if (dx * dx + dz * dz < r * r * 0.7 && b.max.y > h) h = b.max.y;
    }
    return h;
  }

  _collideXZ(feetY, height) {
    for (let iter = 0; iter < 3; iter++) {
      for (const b of this.colliders) {
        if (b.max.y <= feetY + STEP || b.min.y >= feetY + height) continue;
        const cx = Math.max(b.min.x, Math.min(this.pos.x, b.max.x));
        const cz = Math.max(b.min.z, Math.min(this.pos.z, b.max.z));
        let dx = this.pos.x - cx, dz = this.pos.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 < RADIUS * RADIUS) {
          if (d2 < 1e-8) {
            // center inside box: push out along smallest axis
            const pen = [this.pos.x - b.min.x, b.max.x - this.pos.x, this.pos.z - b.min.z, b.max.z - this.pos.z];
            const m = Math.min(...pen); const i = pen.indexOf(m);
            if (i === 0) this.pos.x = b.min.x - RADIUS; else if (i === 1) this.pos.x = b.max.x + RADIUS;
            else if (i === 2) this.pos.z = b.min.z - RADIUS; else this.pos.z = b.max.z + RADIUS;
            continue;
          }
          const d = Math.sqrt(d2);
          const push = RADIUS - d;
          dx /= d; dz /= d;
          this.pos.x += dx * push; this.pos.z += dz * push;
          const vn = this.velocity.x * dx + this.velocity.z * dz;
          if (vn < 0) { this.velocity.x -= vn * dx; this.velocity.z -= vn * dz; }
        }
      }
    }
  }

  update(dt, input) {
    this.time += dt;
    if (!this.alive) { this._updateCamera(dt); return; }
    // crouch / sprint
    const wantCrouch = input.crouch;
    this.crouchAmt += ((wantCrouch ? 1 : 0) - this.crouchAmt) * Math.min(1, dt * 10);
    const targetH = wantCrouch ? CROUCH_H : STAND_H;
    if (!wantCrouch && this.height < STAND_H) {
      // check headroom
      const head = this.pos.y + STAND_H;
      let blocked = false;
      for (const b of this.colliders) {
        if (b.min.y > this.pos.y + this.height && b.min.y < head) {
          const cx = Math.max(b.min.x, Math.min(this.pos.x, b.max.x)), cz = Math.max(b.min.z, Math.min(this.pos.z, b.max.z));
          if ((this.pos.x - cx) ** 2 + (this.pos.z - cz) ** 2 < RADIUS * RADIUS) blocked = true;
        }
      }
      if (!blocked) this.height = Math.min(STAND_H, this.height + dt * 4);
    } else this.height += (targetH - this.height) * Math.min(1, dt * 10);

    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = new THREE.Vector3();
    if (input.forward) wish.add(fwd);
    if (input.back) wish.sub(fwd);
    if (input.right) wish.add(right);
    if (input.left) wish.sub(right);
    if (wish.lengthSq() > 0) wish.normalize();
    const sprinting = input.sprint && input.forward && !wantCrouch && !input.ads;
    this.sprintAmt += ((sprinting ? 1 : 0) - this.sprintAmt) * Math.min(1, dt * 6);
    let speed = 4.3;
    if (sprinting) speed = 6.8;
    if (wantCrouch) speed = 2.2;
    if (input.ads) speed = Math.min(speed, 2.8);

    const accel = this.onGround ? 11 : 2.5;
    const target = wish.multiplyScalar(speed);
    this.velocity.x += (target.x - this.velocity.x) * Math.min(1, dt * accel);
    this.velocity.z += (target.z - this.velocity.z) * Math.min(1, dt * accel);

    if (this.onGround && input.jump) {
      this.velocity.y = 4.7;
      this.onGround = false;
      this.audio?.jump();
    }
    this.velocity.y -= 18 * dt;

    // integrate XZ with collision
    const steps = Math.ceil(Math.max(1, this.velocity.length() * dt / 0.15));
    const sdt = dt / steps;
    for (let s = 0; s < steps; s++) {
      this.pos.x += this.velocity.x * sdt;
      this.pos.z += this.velocity.z * sdt;
      this._collideXZ(this.pos.y, this.height);
    }
    // vertical
    const prevY = this.pos.y;
    this.pos.y += this.velocity.y * dt;
    const gh = this.groundHeightAt(this.pos, RADIUS, prevY + STEP);
    const wasGround = this.onGround;
    if (this.pos.y <= gh + 0.001 || (wasGround && this.velocity.y <= 0 && this.pos.y - gh < STEP && this.pos.y - gh > 0)) {
      if (!wasGround && this.velocity.y < -3) {
        this.landDip = Math.min(1, -this.velocity.y / 9);
        this.audio?.land(Math.min(1, -this.velocity.y / 9));
      }
      // smooth step-up
      if (gh > this.pos.y) this.eyeSmooth -= (gh - this.pos.y);
      this.pos.y = gh;
      this.velocity.y = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }
    // ceiling
    for (const b of this.colliders) {
      if (this.velocity.y > 0 && b.min.y > prevY + this.height - 0.05 && b.min.y < this.pos.y + this.height) {
        const cx = Math.max(b.min.x, Math.min(this.pos.x, b.max.x)), cz = Math.max(b.min.z, Math.min(this.pos.z, b.max.z));
        if ((this.pos.x - cx) ** 2 + (this.pos.z - cz) ** 2 < RADIUS * RADIUS * 0.8) { this.pos.y = b.min.y - this.height; this.velocity.y = 0; }
      }
    }
    // bounds
    this.pos.x = Math.max(-26, Math.min(28.6, this.pos.x));
    this.pos.z = Math.max(-21.5, Math.min(23.6, this.pos.z));

    this.horizSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    if (this.onGround && this.horizSpeed > 0.5) {
      this.stepDist += this.horizSpeed * dt;
      const stride = sprinting ? 1.9 : wantCrouch ? 1.0 : 1.55;
      if (this.stepDist > stride) { this.stepDist = 0; this.audio?.footstep(this.horizSpeed / 6.8, this.pos); }
    }
    this.landDip = Math.max(0, this.landDip - dt * 3);

    // regen
    if (this.time - this.lastHit > 4.5 && this.health < 100) this.health = Math.min(100, this.health + dt * 14);
    this._updateCamera(dt);
  }

  damage(amount, fromPos) {
    if (!this.alive) return;
    this.health -= amount;
    this.lastHit = this.time;
    this.shake = Math.min(1, this.shake + 0.35);
    if (this.health <= 0) { this.health = 0; this.alive = false; }
  }

  _updateCamera(dt) {
    // recoil recovery
    const rec = Math.min(1, dt * 7);
    const pp = this.recoilPitch * rec, py = this.recoilYaw * rec;
    this.recoilPitch -= pp; this.recoilYaw -= py;
    // keep 55% of recoil as permanent aim drift (player compensates), recover the rest
    this.pitch += pp * 0.55; this.yaw += py * 0.55;
    this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch));
    const eye = this.alive ? this.height - 0.12 : 0.35;
    this.eyeSmooth += (eye - this.eyeSmooth) * Math.min(1, dt * (this.alive ? 14 : 3));
    this.bobT += dt * (this.onGround ? this.horizSpeed * 1.25 : 0);
    const bobA = Math.min(1, this.horizSpeed / 6) * 0.035;
    const shakeT = this.time * 40;
    this.shake = Math.max(0, this.shake - dt * 1.8);
    const sh = this.shake * this.shake;
    const cam = this.camera;
    cam.position.set(
      this.pos.x + Math.cos(this.bobT) * bobA * 0.5 + Math.sin(shakeT) * sh * 0.03,
      this.pos.y + this.eyeSmooth + Math.abs(Math.sin(this.bobT)) * bobA - this.landDip * 0.08 + Math.sin(shakeT * 1.3) * sh * 0.03,
      this.pos.z,
    );
    cam.rotation.set(
      this.pitch + this.recoilPitch * 0.45 + Math.sin(shakeT * 0.9) * sh * 0.02,
      this.yaw + this.recoilYaw * 0.45,
      Math.sin(this.bobT * 0.5) * bobA * 0.15 + (this.alive ? 0 : 0.5),
    );
  }
}
