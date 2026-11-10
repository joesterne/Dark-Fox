// DARK FOX — entry point: loading, menus, input, game loop and mission flow.
import * as THREE from 'three';
import { World } from './world.js';
import { QUALITY } from './quality.js';
import { Effects, Rain } from './fx.js';
import { Weapon } from './weapon.js';
import { Player } from './player.js';
import { DroneManager } from './drones.js';
import { Audio } from './audio.js';
import { raycastBoxes } from './geo.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const store = {
  get(k, d) { try { return localStorage.getItem('darkfox.' + k) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('darkfox.' + k, v); } catch { /* ignore */ } },
};

const qKey = params.get('q') || store.get('quality', 'high');
const quality = { ...(QUALITY[qKey] || QUALITY.high) };

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
const pixelRatio = Math.min(window.devicePixelRatio || 1, quality.pixelRatio);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.toneMapping = THREE.NoToneMapping;
$('app').appendChild(renderer.domElement);

const audio = new Audio();
const world = new World(renderer, quality);
let fx, rain, weapon, player, drones;

const game = {
  state: 'loading', // loading | menu | playing | paused | end
  t: 0, missionTime: 0, damageTaken: 0, hits: 0, kills: 0, phase: 'drones',
  flash: 0, damageFlash: 0, explosionLight: null,
};
window.__game = game;
window.__dbg = () => ({ game, drones, player, world, weapon });

// ------------------------------------------------------------------------------------------------ input
const input = { forward: false, back: false, left: false, right: false, sprint: false, crouch: false, jump: false, fire: false, firePressed: false, ads: false };
const keymap = { KeyW: 'forward', KeyS: 'back', KeyA: 'left', KeyD: 'right', ShiftLeft: 'sprint', ShiftRight: 'sprint', KeyC: 'crouch', ControlLeft: 'crouch', Space: 'jump', ArrowUp: 'forward', ArrowDown: 'back', ArrowLeft: 'left', ArrowRight: 'right' };
let sens = parseFloat(store.get('sens', '1')) || 1;
addEventListener('keydown', (e) => {
  if (keymap[e.code]) { input[keymap[e.code]] = true; if (e.code === 'Space') e.preventDefault(); }
  if (game.state !== 'playing') return;
  if (e.code === 'Escape' && game.noLock) pause();
  if (e.code === 'KeyR') weapon.startReload();
  if (e.code === 'KeyF') { weapon.toggleTorch(); $('torchtag').classList.toggle('on', weapon.torchOn); }
  if (e.code === 'F3') { $('fps').classList.toggle('hidden'); e.preventDefault(); }
});
addEventListener('keyup', (e) => { if (keymap[e.code]) input[keymap[e.code]] = false; });
addEventListener('mousedown', (e) => {
  if (game.state !== 'playing') return;
  if (e.button === 0) { input.fire = true; input.firePressed = true; }
  if (e.button === 2) input.ads = true;
});
addEventListener('mouseup', (e) => { if (e.button === 0) input.fire = false; if (e.button === 2) input.ads = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('mousemove', (e) => {
  if (game.state !== 'playing' || (document.pointerLockElement !== renderer.domElement && !game.noLock)) return;
  const adsK = weapon ? 1 - weapon.ads * 0.35 : 1;
  const s = 0.0022 * sens * adsK;
  player.look(e.movementX, e.movementY, s);
  weapon.lookDelta.x += e.movementX; weapon.lookDelta.y += e.movementY;
});
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === renderer.domElement) game.wasLocked = true;
  else if (game.state === 'playing' && !game.noLock) pause();
});
// Some embedded contexts (sandboxed iframes) refuse pointer lock: fall back to raw mouse deltas.
document.addEventListener('pointerlockerror', () => { game.noLock = true; document.body.classList.add('nolock'); });
addEventListener('blur', () => { for (const k in input) input[k] = false; });

// ------------------------------------------------------------------------------------------------ loading
async function load() {
  const steps = world.steps();
  const extra = [
    ['Arming', () => setupGameplay()],
    ['Lighting', () => {
      world.finalize();
      resize();
      world.captureEnvironment([world.water, weapon.root]);
    }],
    ['Compiling shaders', () => {
      world.camera.position.copy(world.level.spawn).add(new THREE.Vector3(0, 1.66, 0));
      world.camera.updateMatrixWorld();
      renderer.compile(world.scene, world.camera);
      const f = world.scene.fog; world.scene.fog = world.refl.fog;
      renderer.compile(world.scene, world.camera);
      world.scene.fog = f;
    }],
  ];
  const all = [...steps, ...extra];
  for (let i = 0; i < all.length; i++) {
    const [label, fn] = all[i];
    $('loadlabel').textContent = label;
    $('loadfill').style.width = `${(i / all.length) * 100}%`;
    await new Promise(r => requestAnimationFrame(() => setTimeout(r, 0)));
    fn();
  }
  $('loadfill').style.width = '100%';
  await new Promise(r => setTimeout(r, 150));
  $('loading').classList.add('hidden');
  game.state = 'menu';
  $('menu').classList.remove('hidden');
  if (params.has('autostart')) startGame(true);
}

function setupGameplay() {
  const lib = world.lib;
  // dynamic lights must exist before the pipeline/fog shaders are built
  const muzzleLight = new THREE.PointLight(0xffb070, 0, 9, 2);
  muzzleLight.userData.fogScale = 0.35;
  world.scene.add(muzzleLight);
  world.muzzleLight = muzzleLight;
  const exLight = new THREE.PointLight(0xff8a3a, 0, 30, 2);
  exLight.userData.fogScale = 0.5;
  world.scene.add(exLight);
  game.explosionLight = exLight;
  world.dynamicPoints.push(muzzleLight, exLight);

  drones = new DroneManager(world.scene, lib, world, null, audio, world.level.colliders, world.level.droneWaypoints, 3);
  world.dynamicPoints.push(drones.boltLight);
  const rig = world.lightRig();
  fx = new Effects(world.scene, lib.mats, rig, audio);
  drones.fx = fx;
  for (const s of world.level.steam) fx.addSteam(s);
  rain = new Rain(world.scene, quality.rain, rig);
  weapon = new Weapon(world.camera, lib.mats, lib.tex, world, fx, audio);
  player = new Player(world.camera, world.level.colliders, audio);
  player.spawn(world.level.spawn, world.level.spawnYaw);
  player._updateCamera(0);

  world.flashExplosion = (pos) => {
    exLight.position.copy(pos);
    game.explosionT = 0.6;
    const d = pos.distanceTo(world.camera.position);
    player.shake = Math.min(1, player.shake + Math.max(0, 1 - d / 25) * 0.9);
    game.flash = Math.max(game.flash, Math.max(0, 1 - d / 30) * 0.6);
  };
  weapon.onShot = onShot;
  drones.onKill = () => {
    game.kills++;
    notify('DRONE DESTROYED', true);
    audio.hitMarker(true);
    showHitmarker(true);
    if (drones.killed >= drones.total) {
      game.phase = 'exfil';
      setTimeout(() => notify('GRID OFFLINE — EXFILTRATE'), 1400);
    }
  };
  drones.onPlayerHit = (from) => {
    game.damageTaken += 9;
    game.damageFlash = 1;
    audio.playerHurt();
    const to = from.clone().sub(player.pos);
    const ang = Math.atan2(to.x, to.z);
    const rel = ang - (player.yaw + Math.PI);
    const el = $('dmgdir');
    el.style.transform = `rotate(${-rel}rad)`;
    el.style.transition = 'none'; el.style.opacity = '1';
    requestAnimationFrame(() => { el.style.transition = 'opacity 1.2s'; el.style.opacity = '0'; });
  };
}

// ------------------------------------------------------------------------------------------------ shooting
const _dir = new THREE.Vector3();
function onShot(muzzleW, fwd, spreadDeg, tracer) {
  const cam = world.camera;
  const origin = new THREE.Vector3().setFromMatrixPosition(cam.matrixWorld);
  // random direction in a cone around the view axis
  const sp = THREE.MathUtils.degToRad(spreadDeg) * 0.5;
  const r = Math.sqrt(Math.random()) * sp, a = Math.random() * Math.PI * 2;
  _dir.set(Math.cos(a) * Math.tan(r), Math.sin(a) * Math.tan(r), -1).normalize().applyQuaternion(cam.quaternion);
  const maxD = 250;
  const wHit = raycastBoxes(world.level.colliders, origin, _dir, maxD, true);
  const dHit = drones.raycast(origin, _dir, wHit ? wHit.t : maxD);
  let end;
  if (dHit) {
    end = dHit.point;
    game.hits++;
    const killed = drones.damage(dHit.drone, 22 + Math.random() * 4, dHit.point, dHit.crit);
    if (!killed) { showHitmarker(false); audio.hitMarker(false); }
  } else if (wHit) {
    end = wHit.point;
    fx.impact(wHit.point, wHit.normal, wHit.box.surface);
    audio.impact(wHit.point, wHit.box.surface);
  } else {
    end = origin.clone().addScaledVector(_dir, maxD);
  }
  if (tracer) fx.tracer(muzzleW.clone().addScaledVector(_dir, 0.4), end);
}

let hmTimer = 0;
function showHitmarker(kill) {
  const el = $('hitmarker');
  el.classList.toggle('kill', kill);
  el.style.opacity = '1';
  hmTimer = kill ? 0.45 : 0.18;
}
function notify(text, kill = false) {
  const d = document.createElement('div');
  d.textContent = text;
  if (kill) d.className = 'k';
  $('notify').appendChild(d);
  setTimeout(() => d.remove(), 2700);
}

// ------------------------------------------------------------------------------------------------ flow
function lockPointer() {
  if (game.noLock) return;
  try {
    const p = renderer.domElement.requestPointerLock();
    if (p && p.catch) p.catch(() => { game.noLock = true; document.body.classList.add('nolock'); });
  } catch { game.noLock = true; document.body.classList.add('nolock'); }
}

function startGame(headless = false) {
  audio.init();
  $('menu').classList.add('hidden');
  $('end').classList.add('hidden');
  $('pause').classList.add('hidden');
  $('hud').classList.remove('hidden');
  if (game.state === 'menu') {
    drones.start();
    weapon.drawT = 0.6;
  }
  game.state = 'playing';
  if (!headless) lockPointer();
  if (params.get('cam')) {
    const [x, z, yaw, pitch] = params.get('cam').split(',').map(Number);
    player.spawn(new THREE.Vector3(x, 0, z), yaw);
    player.pitch = pitch || 0;
  }
  if (params.has('ads')) input.ads = true;
  if (params.has('fire')) input.fire = true;
  if (params.has('dronetest')) {
    const d = drones.drones[0];
    const f = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
    d.pos.copy(player.pos).addScaledVector(f, parseFloat(params.get('dronetest')) || 3).add(new THREE.Vector3(0.6, 2.1, 0));
    d.target.copy(d.pos); d.state = 'patrol'; d.yaw = player.yaw + 2.4;
    d.vel.set(0, 0, 0);
    const fixed = d.pos.clone();
    drones.update = ((orig) => function (dt, p, c) { orig.call(this, dt, p, c); d.pos.copy(fixed); d.vel.set(0, 0, 0); d.g.position.copy(fixed); d.state = 'patrol'; d.seenT = 0; })(drones.update);
  }
  if (params.has('torch')) weapon.toggleTorch();
}

function pause() {
  game.state = 'paused';
  for (const k in input) input[k] = false;
  $('pause').classList.remove('hidden');
}

function endMission(success) {
  game.state = 'end';
  document.exitPointerLock?.();
  $('hud').classList.add('hidden');
  $('end').classList.remove('hidden');
  $('endtitle').textContent = success ? 'MISSION COMPLETE' : 'K.I.A.';
  $('endtitle').style.color = success ? '' : 'var(--accent)';
  const mm = Math.floor(game.missionTime / 60), ss = Math.floor(game.missionTime % 60).toString().padStart(2, '0');
  const acc = weapon.shotsFired ? Math.round(game.hits / weapon.shotsFired * 100) : 0;
  $('endstats').innerHTML = `<span>TIME</span><b>${mm}:${ss}</b><span>DRONES</span><b>${drones.killed} / ${drones.total}</b><span>ACCURACY</span><b>${acc}%</b><span>ROUNDS FIRED</span><b>${weapon.shotsFired}</b><span>DAMAGE TAKEN</span><b>${Math.round(game.damageTaken)}</b>`;
  if (success) audio.missionComplete();
}

$('deploy').addEventListener('click', () => startGame());
$('resume').addEventListener('click', () => startGame());
$('again').addEventListener('click', () => location.reload());
$('quality').value = qKey;
$('quality').addEventListener('change', (e) => { store.set('quality', e.target.value); location.reload(); });
$('sens').value = sens;
$('sens').addEventListener('input', (e) => { sens = parseFloat(e.target.value); store.set('sens', sens); });
renderer.domElement.addEventListener('click', () => { if (game.state === 'playing' && document.pointerLockElement !== renderer.domElement) lockPointer(); });

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  const pw = Math.floor(w * renderer.getPixelRatio()), ph = Math.floor(h * renderer.getPixelRatio());
  if (world.pipeline) world.setSize(pw, ph);
}
addEventListener('resize', resize);

// ------------------------------------------------------------------------------------------------ loop
const clock = new THREE.Clock();
let fpsAcc = 0, fpsN = 0;
const _proj = new THREE.Vector3();
const haltAfter = parseInt(params.get('frames') || '0', 10);
let playFrames = 0;
function frame() {
  if (window.__done && haltAfter) return;
  requestAnimationFrame(frame);
  if (game.state === 'loading') return;
  let dt = Math.min(clock.getDelta(), 1 / 20);
  if (params.has('fixeddt')) dt = 1 / 60;
  game.t += dt;
  const playing = game.state === 'playing';
  const simDt = playing ? dt : 0;

  if (playing && params.has('aimbot')) {
    // debug: aim at the nearest drone and fire (used for automated testing)
    const alive = drones.drones.filter(d => d.alive);
    if (alive.length) {
      const eye = world.camera.position;
      alive.sort((a, b) => a.pos.distanceTo(eye) - b.pos.distanceTo(eye));
      const t = alive[0].pos.clone().sub(eye);
      player.yaw = Math.atan2(-t.x, -t.z); player.pitch = Math.atan2(t.y, Math.hypot(t.x, t.z));
      input.fire = true; input.ads = true;
    } else { input.fire = false; input.ads = false; }
    if (weapon.ammo === 0) weapon.startReload();
  }
  if (playing) {
    game.missionTime += dt;
    player.update(simDt, input);
    weapon.update(simDt, input, player);
    input.firePressed = false;
    input.jump = false;
    drones.update(simDt, player, world.camera);
    if (!player.alive && !game.deadT) { game.deadT = game.t; audio.playerHurt(); }
    if (game.deadT && game.t - game.deadT > 2.2) endMission(false);
    if (game.phase === 'exfil' && player.pos.distanceTo(world.level.extraction) < 2.0) { game.phase = 'done'; endMission(true); }
  } else if (game.state === 'menu') {
    // slow cinematic drift behind the menu
    const a = game.t * 0.05;
    world.camera.position.set(-3 + Math.sin(a) * 3, 1.9 + Math.sin(a * 0.7) * 0.2, 14 + Math.cos(a) * 1.5);
    world.camera.rotation.set(0.04, -0.12 + Math.sin(a * 0.8) * 0.1, 0);
  }
  weapon.root.visible = game.state !== 'menu';
  world.camera.updateMatrixWorld();
  fx.update(simDt || (game.state === 'menu' ? dt : 0), (p) => Math.max(0, player.groundHeightAt(p, 0.05)));
  rain.update(dt, world.camera.position);
  world.time.value += dt;
  world.update(dt, game.t);
  audio.setListener(world.camera);
  if (drones) audio.setAlarm(playing ? drones.alarm : 0);

  // explosion light decay
  if (game.explosionT > 0) {
    game.explosionT -= dt;
    game.explosionLight.intensity = Math.max(0, game.explosionT / 0.6) ** 2 * 900;
  } else if (game.explosionLight) game.explosionLight.intensity = 0;

  // post params
  const P = world.pipeline.params;
  game.flash = Math.max(0, game.flash - dt * 3);
  game.damageFlash = Math.max(0, game.damageFlash - dt * 2.2);
  P.flash = game.flash;
  P.damage = game.damageFlash * 0.8;
  P.lowHealth = player.alive ? Math.max(0, 1 - player.health / 40) : 1;
  P.ads = weapon.ads;
  world.camera.fov = THREE.MathUtils.lerp(70, 54, weapon.ads) - weapon.sprint * -4;
  world.camera.updateProjectionMatrix();

  world.render(dt);
  if (playing || game.state === 'paused') updateHUD(dt);

  fpsAcc += dt; fpsN++;
  if (fpsN >= 30) { $('fps').textContent = `${Math.round(fpsN / fpsAcc)} FPS · ${quality.name}`; fpsAcc = 0; fpsN = 0; }
  if (playing) playFrames++;
  if (haltAfter && playFrames >= haltAfter && !window.__done) window.__done = 'ok';
}

let lastAmmo = -1;
function updateHUD(dt) {
  // crosshair spread
  const sp = weapon.spreadDeg(player);
  const px = 6 + sp * 7;
  const ch = $('crosshair');
  ch.style.opacity = String((1 - weapon.ads) * (1 - weapon.sprint) * (weapon.reloading ? 0.4 : 1));
  ch.children[0].style.top = `${-px - 9}px`; ch.children[1].style.top = `${px}px`;
  ch.children[2].style.left = `${-px - 9}px`; ch.children[3].style.left = `${px}px`;
  hmTimer -= dt;
  if (hmTimer <= 0) $('hitmarker').style.opacity = '0';
  // ammo
  if (weapon.ammo !== lastAmmo || weapon.reloading) {
    $('mag').textContent = weapon.ammo;
    $('mag').classList.toggle('low', weapon.ammo <= 8);
    $('reserve').textContent = weapon.reserve;
    const pips = $('pips');
    if (pips.children.length !== weapon.magSize) pips.innerHTML = '<i></i>'.repeat(weapon.magSize);
    for (let i = 0; i < weapon.magSize; i++) pips.children[i].className = i < weapon.ammo ? '' : 'e';
    lastAmmo = weapon.ammo;
  }
  // health
  const hf = $('healthfill');
  hf.style.width = `${player.health}%`;
  hf.classList.toggle('low', player.health < 40);
  // objective
  if (game.phase === 'drones') {
    $('objtext').textContent = 'Neutralise security drones';
    $('objcount').textContent = `${drones.killed} / ${drones.total}`;
    $('marker').classList.add('hidden');
  } else {
    $('objtext').textContent = 'Exfiltrate via the service door';
    const d = player.pos.distanceTo(world.level.extraction);
    $('objcount').textContent = `${d.toFixed(0)} m`;
    _proj.copy(world.level.extraction).add(new THREE.Vector3(0, 1.4, 0)).project(world.camera);
    const m = $('marker');
    if (_proj.z < 1) {
      m.classList.remove('hidden');
      m.style.left = `${(_proj.x * 0.5 + 0.5) * 100}%`;
      m.style.top = `${(-_proj.y * 0.5 + 0.5) * 100}%`;
      $('markerdist').textContent = `${d.toFixed(0)}m`;
    } else m.classList.add('hidden');
  }
  $('alert').style.opacity = drones.alarm > 0.5 ? '1' : '0';
}

load().catch((e) => {
  console.error(e);
  $('loadlabel').textContent = 'Error: ' + e.message;
});
requestAnimationFrame(frame);
