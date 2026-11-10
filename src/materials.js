// Material library: bakes procedural surfaces and wraps them in PBR materials.
// Also installs a global "rain-wet" shader patch: upward facing surfaces get glossier and darker,
// vertical surfaces get running-water streak variation.
import * as THREE from 'three';
import { TextureGenerator } from './texgen.js';

export const WET = { uniforms: { uTime: { value: 0 }, uWetness: { value: 1 } } };

export function applyWet(mat, opts = {}) {
  const porosity = opts.porosity ?? 0.5; // how much albedo darkens when wet
  const gloss = opts.gloss ?? 0.55;       // roughness multiplier strength
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, r) => {
    if (prev) prev(shader, r);
    shader.uniforms.uTime = WET.uniforms.uTime;
    shader.uniforms.uWetness = WET.uniforms.uWetness;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWetWorldPos;')
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
      vWetWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
      varying vec3 vWetWorldPos;
      uniform float uTime; uniform float uWetness;
      float wetHash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float wetNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(wetHash(i), wetHash(i+vec2(1,0)), f.x), mix(wetHash(i+vec2(0,1)), wetHash(i+vec2(1,1)), f.x), f.y); }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      {
        vec3 wN = normalize(inverseTransformDirection(normal, viewMatrix));
        float up = smoothstep(0.55, 0.95, wN.y);
        float side = 1.0 - smoothstep(0.2, 0.6, abs(wN.y));
        // running water sheets on vertical surfaces
        float hcoord = dot(vWetWorldPos.xz, vec2(0.7071));
        float sheet = wetNoise(vec2(hcoord * 6.0 + vWetWorldPos.x * 3.0, vWetWorldPos.y * 0.6 + uTime * 0.9));
        sheet = smoothstep(0.45, 0.85, sheet) * side;
        float wet = clamp(up * 0.9 + sheet * 0.8 + 0.25, 0.0, 1.0) * uWetness;
        roughnessFactor = mix(roughnessFactor, roughnessFactor * ${(1 - gloss).toFixed(3)}, wet);
        diffuseColor.rgb *= 1.0 - ${porosity.toFixed(3)} * wet * 0.55;
      }`);
  };
  mat.customProgramCacheKey = () => 'wet' + porosity + gloss + (opts.key || '');
  return mat;
}

function std(tex, params = {}) {
  const m = new THREE.MeshStandardMaterial({
    map: tex.map, normalMap: tex.normalMap, roughnessMap: tex.ormMap,
    metalnessMap: params.metalMap ? tex.ormMap : null,
    roughness: 1, metalness: params.metalMap ? 1 : (params.metalness ?? 0),
    ...params.extra,
  });
  if (params.normalScale) m.normalScale.set(params.normalScale, params.normalScale);
  m.userData.tile = tex.tile;
  return m;
}

export class MaterialLibrary {
  constructor(renderer, quality) {
    this.gen = new TextureGenerator(renderer, quality.texScale);
    this.tex = {};
    this.mats = {};
  }

  // Bakes in small steps so the loading bar can advance between them
  steps() {
    const g = this.gen, T = this.tex;
    return [
      ['Asphalt', () => { T.asphalt = g.bake('asphalt', { size: 2048 }); T.groundmask = g.bake('groundmask', { size: 1024 }); }],
      ['Concrete', () => { T.concrete = g.bake('concrete', { size: 1024, tint: 0x5e5b57 }); T.concreteDark = g.bake('concrete', { size: 1024, tint: 0x3d3c3a }); }],
      ['Brick', () => { T.brick = g.bake('brick', { size: 2048 }); }],
      ['Shipping containers', () => {
        T.contRed = g.bake('container', { size: 1024, tint: 0x6e1a10, wear: 0.65 });
        T.contBlue = g.bake('container', { size: 1024, tint: 0x123b5e, wear: 0.5 });
        T.contGreen = g.bake('container', { size: 1024, tint: 0x24482c, wear: 0.7 });
        T.contOrange = g.bake('container', { size: 1024, tint: 0x9a4a12, wear: 0.45 });
      }],
      ['Sheet metal', () => { T.galv = g.bake('galvanized', { size: 1024, wear: 0.5 }); T.diamond = g.bake('diamondplate', { size: 1024, wear: 0.4 }); }],
      ['Timber', () => { T.wood = g.bake('wood', { size: 1024 }); }],
      ['Painted steel', () => {
        T.pmGray = g.bake('paintedmetal', { size: 512, tint: 0x2a2c2e, tint2: 0x4a4038, wear: 0.4 });
        T.pmBlue = g.bake('paintedmetal', { size: 512, tint: 0x0f2f63, tint2: 0x555048, wear: 0.6 });
        T.pmRed = g.bake('paintedmetal', { size: 512, tint: 0x6a1410, tint2: 0x555048, wear: 0.55 });
        T.pmYellow = g.bake('paintedmetal', { size: 512, tint: 0xb08a10, tint2: 0x3a3a3a, wear: 0.5 });
        T.pmGreen = g.bake('paintedmetal', { size: 512, tint: 0x1b2e22, tint2: 0x6a5a48, wear: 0.35 });
      }],
      ['Detail maps', () => {
        T.grunge = g.bake('grunge', { size: 1024 });
        T.stipple = g.bake('stipple', { size: 512 });
        T.fabric = g.bake('fabric', { size: 512 });
        T.carbon = g.bake('carbon', { size: 512 });
        T.chain = g.bake('chainlink', { size: 1024 });
        T.hole = g.bake('bullethole', { size: 256 });
      }],
      ['Materials', () => this.build()],
    ];
  }

  build() {
    const T = this.tex, M = this.mats;
    M.concrete = applyWet(std(T.concrete), { porosity: 0.8 });
    M.concreteDark = applyWet(std(T.concreteDark), { porosity: 0.8 });
    M.brick = applyWet(std(T.brick, { normalScale: 1.2 }), { porosity: 0.9 });
    M.contRed = applyWet(std(T.contRed), { porosity: 0.2, gloss: 0.6 });
    M.contBlue = applyWet(std(T.contBlue), { porosity: 0.2, gloss: 0.6 });
    M.contGreen = applyWet(std(T.contGreen), { porosity: 0.2, gloss: 0.6 });
    M.contOrange = applyWet(std(T.contOrange), { porosity: 0.2, gloss: 0.6 });
    M.galv = applyWet(std(T.galv, { metalMap: true }), { porosity: 0.1, gloss: 0.5 });
    M.diamond = applyWet(std(T.diamond, { metalMap: true }), { porosity: 0.1, gloss: 0.5 });
    M.wood = applyWet(std(T.wood), { porosity: 0.9, gloss: 0.4 });
    M.pmGray = applyWet(std(T.pmGray, { metalMap: true }), { porosity: 0.2 });
    M.pmBlue = applyWet(std(T.pmBlue, { metalMap: true }), { porosity: 0.2 });
    M.pmRed = applyWet(std(T.pmRed, { metalMap: true }), { porosity: 0.2 });
    M.pmYellow = applyWet(std(T.pmYellow, { metalMap: true }), { porosity: 0.2 });
    M.pmGreen = applyWet(std(T.pmGreen, { metalMap: true }), { porosity: 0.2 });

    const grungeMat = (color, rough, metal, opts = {}) => {
      const m = new THREE.MeshStandardMaterial({
        color, roughness: rough, metalness: metal,
        map: T.grunge.map, normalMap: T.grunge.normalMap, roughnessMap: T.grunge.ormMap,
        ...opts,
      });
      m.userData.tile = [1, 1];
      return m;
    };
    M.rubber = applyWet(grungeMat(0x0b0b0c, 0.9, 0), { porosity: 0.1 });
    M.steelDark = applyWet(grungeMat(0x2a2b2d, 0.45, 0.9), { porosity: 0.05 });
    M.steel = applyWet(grungeMat(0x8a8c8f, 0.35, 1.0), { porosity: 0.05 });
    M.frameRed = applyWet(grungeMat(0x4a120c, 0.55, 0.2), { porosity: 0.2 });
    M.frameBlue = applyWet(grungeMat(0x0d2a44, 0.55, 0.2), { porosity: 0.2 });
    M.frameGreen = applyWet(grungeMat(0x1a3320, 0.55, 0.2), { porosity: 0.2 });
    M.frameOrange = applyWet(grungeMat(0x6e3410, 0.55, 0.2), { porosity: 0.2 });
    M.plasticBlack = applyWet(grungeMat(0x111214, 0.6, 0), { porosity: 0.05 });
    M.plasticOrange = applyWet(grungeMat(0xc0400a, 0.55, 0), { porosity: 0.05 });
    M.plasticWhite = applyWet(grungeMat(0x9a9ea2, 0.5, 0), { porosity: 0.05 });
    M.housing = applyWet(grungeMat(0x1d1f22, 0.5, 0.6), { porosity: 0.05 });

    M.chain = applyWet(new THREE.MeshStandardMaterial({
      map: T.chain.map, normalMap: T.chain.normalMap, roughnessMap: T.chain.ormMap, metalnessMap: T.chain.ormMap,
      metalness: 1, roughness: 1, alphaTest: 0.5, alphaToCoverage: true, side: THREE.DoubleSide,
    }), { porosity: 0, key: 'chain' });
    M.chain.userData.tile = T.chain.tile;

    M.glassDark = new THREE.MeshPhysicalMaterial({ color: 0x050607, roughness: 0.08, metalness: 0, clearcoat: 1, envMapIntensity: 1.2 });

    // Emissive materials (HDR values; bloom picks them up)
    const emissive = (hex, intensity) => new THREE.MeshStandardMaterial({ color: 0x000000, emissive: hex, emissiveIntensity: intensity, roughness: 0.4 });
    M.sodiumLens = emissive(0xff9a3c, 60);
    M.floodLens = emissive(0xdfe8ff, 80);
    M.doorLens = emissive(0xffd9a8, 40);
    M.redLamp = emissive(0xff1a0a, 50);
    M.neonPink = emissive(0xff2a7a, 22);
    M.neonCyan = emissive(0x25d8ff, 18);
    M.windowWarm = emissive(0xffb36b, 1.2);
    M.windowCool = emissive(0x9ab8ff, 0.7);

    // Decal material for bullet holes
    M.bulletHole = new THREE.MeshStandardMaterial({
      map: T.hole.map, normalMap: T.hole.normalMap, roughness: 0.9, transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    });
    return M;
  }
}
