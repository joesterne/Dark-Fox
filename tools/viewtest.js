// Headless visual test: builds the world and renders a fixed camera.
import * as THREE from 'three';
import { World } from '../src/world.js';
import { QUALITY } from '../src/quality.js';

const params = new URLSearchParams(location.search);
const q = { ...QUALITY[params.get('q') || 'medium'] };
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(1);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
document.body.appendChild(renderer.domElement);
const world = new World(renderer, q);
for (const [label, fn] of world.steps()) { const t = performance.now(); fn(); console.log(label, (performance.now() - t).toFixed(0)); }
world.finalize();
world.setSize(innerWidth, innerHeight);
world.captureEnvironment(world.reflHidden);
const cam = world.camera;
const [x, y, z, yaw, pitch] = (params.get('cam') || '0,1.7,19,0,0').split(',').map(Number);
cam.position.set(x, y, z);
cam.rotation.set(pitch, yaw, 0);
let frames = 0;
const exp = params.get('exp'); if (exp) world.pipeline.params.exposure = +exp;
function loop() {
  world.time.value += 0.016;
  world.update(0.016, world.time.value);
  cam.updateMatrixWorld();
  world.render(0.016);
  frames++;
  if (frames < 3) requestAnimationFrame(loop); else window.__done = 'frames ' + frames;
}
loop();
