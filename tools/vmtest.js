// Viewmodel layout test: renders the weapon from first-person (hip & ADS), side and top views.
import * as THREE from 'three';
import { TextureGenerator } from '../src/texgen.js';
import { Weapon } from '../src/weapon.js';

const W = 1600, H = 900;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(W, H);
renderer.setScissorTest(true);
document.body.appendChild(renderer.domElement);
const gen = new TextureGenerator(renderer, 0.5);
const tex = { grunge: gen.bake('grunge', { size: 512 }), stipple: gen.bake('stipple', { size: 256 }), fabric: gen.bake('fabric', { size: 256 }), carbon: gen.bake('carbon', { size: 256 }) };
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x404850);
scene.add(new THREE.HemisphereLight(0xbfd0ff, 0x302820, 1.5));
const dl = new THREE.DirectionalLight(0xffffff, 2.5); dl.position.set(2, 3, 1); scene.add(dl);
const cam = new THREE.PerspectiveCamera(70, (W / 2) / (H / 2), 0.01, 100);
scene.add(cam);
const fakeWorld = { muzzleLight: null };
const weapon = new Weapon(cam, {}, tex, fakeWorld, { muzzleSmoke() {}, ejectShell() {} }, null);
const player = { sprintAmt: 0, horizSpeed: 0, onGround: true, crouchAmt: 0, landDip: 0, velocity: new THREE.Vector3(), addRecoil() {} };
const input = { ads: false, fire: false };
const params = new URLSearchParams(location.search);
const reloadT = params.get('reload');

function view(x, y, setup) {
  renderer.setViewport(x, y, W / 2, H / 2);
  renderer.setScissor(x, y, W / 2, H / 2);
  const c = setup();
  renderer.render(scene, c || cam);
}
// hip
view(0, H / 2, () => { input.ads = false; weapon.ads = 0; for (let i = 0; i < 3; i++) weapon.update(0.016, input, player); });
// ads
view(W / 2, H / 2, () => { input.ads = true; for (let i = 0; i < 60; i++) weapon.update(0.05, input, player); });
// reload or side
if (reloadT) {
  view(0, 0, () => { input.ads = false; weapon.ads = 0; weapon.ammo = 0; weapon.startReload(); weapon.reloadT = parseFloat(reloadT) * weapon.reloadDur; weapon.update(0.0001, input, player); });
  view(W / 2, 0, () => { weapon.reloadT = (parseFloat(reloadT) + 0.15) * weapon.reloadDur; weapon.update(0.0001, input, player); });
} else {
  // side view: orthographic-like perspective from +x
  const side = new THREE.PerspectiveCamera(30, (W / 2) / (H / 2), 0.01, 100);
  view(0, 0, () => {
    input.ads = false; weapon.ads = 0; weapon.reloading = false; for (let i = 0; i < 3; i++) weapon.update(0.016, input, player);
    weapon.U.uVMProj.value.copy(side.projectionMatrix);
    cam.updateMatrixWorld();
    side.position.set(1.6, 0.0, -0.3); side.lookAt(0, -0.1, -0.3);
    side.updateMatrixWorld();
    return side;
  });
  view(W / 2, 0, () => {
    const top = new THREE.PerspectiveCamera(30, (W / 2) / (H / 2), 0.01, 100);
    top.position.set(0.1, 1.6, -0.3); top.lookAt(0.1, 0, -0.3); top.updateMatrixWorld();
    weapon.U.uVMProj.value.copy(top.projectionMatrix);
    return top;
  });
}
window.__done = 'ok';
