import * as THREE from 'three';
import { TextureGenerator, SURFACES } from '../src/texgen.js';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(1600, 900);
document.body.appendChild(renderer.domElement);
const gen = new TextureGenerator(renderer, 0.5);
const names = Object.keys(SURFACES);
const scene = new THREE.Scene();
const cam = new THREE.OrthographicCamera(0, 16, 9, 0, -1, 1);
let i = 0;
const t0 = performance.now();
for (const n of names) {
  const opts = { tint: n === 'container' ? 0x7a1f12 : n === 'paintedmetal' ? 0x1d3a5a : undefined, wear: 0.6 };
  const r = gen.bake(n, opts);
  const keys = ['map', 'normalMap', 'ormMap'].filter(k => r[k]);
  keys.forEach((k, j) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.95), new THREE.MeshBasicMaterial({ map: r[k], transparent: n==='chainlink'||n==='bullethole' }));
    const col = (i % 5) * 3 + j, row = Math.floor(i / 5);
    m.position.set(col + 0.5 + (i%5)*0.2, 8.5 - row * 1.1, 0);
    scene.add(m);
  });
  i++;
}
renderer.setClearColor(0x203040);
renderer.render(scene, cam);
window.__done = (performance.now() - t0).toFixed(0);
