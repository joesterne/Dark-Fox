// GPU procedural texture synthesis.
// Every surface is described by a GLSL `surf()` function that outputs albedo, height (meters),
// roughness, metalness, ambient occlusion and alpha. The generator bakes it into three
// tileable, mip-mapped textures: albedo (sRGB), tangent-space normal, and ORM (ao/rough/metal).
import * as THREE from 'three';
import { NOISE_GLSL } from './glsl.js';

const VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

function fragFor(body) {
  return /* glsl */`
precision highp float;
varying vec2 vUv;
uniform int uMode;
uniform float uSize;
uniform vec2 uTile;
uniform vec3 uTint;
uniform vec3 uTint2;
uniform float uWear;
uniform float uSeed;
${NOISE_GLSL}
struct S { vec3 albedo; float h; float rough; float metal; float ao; float alpha; };
${body}
S evalS(vec2 uv){
  S s; s.albedo = vec3(0.5); s.h = 0.0; s.rough = 0.8; s.metal = 0.0; s.ao = 1.0; s.alpha = 1.0;
  surf(fract(uv), s);
  return s;
}
void main(){
  vec2 uv = (gl_FragCoord.xy) / uSize;
  if(uMode == 0){
    S s = evalS(uv);
    gl_FragColor = vec4(clamp(s.albedo, 0.0, 1.0), s.alpha);
  } else if(uMode == 1){
    float e = 1.0 / uSize;
    float hL = evalS(uv - vec2(e, 0.0)).h;
    float hR = evalS(uv + vec2(e, 0.0)).h;
    float hD = evalS(uv - vec2(0.0, e)).h;
    float hU = evalS(uv + vec2(0.0, e)).h;
    // slope in world units: dh / (2 * texel world size)
    float dx = (hR - hL) / (2.0 * e * uTile.x);
    float dy = (hU - hD) / (2.0 * e * uTile.y);
    vec3 n = normalize(vec3(-dx, -dy, 1.0));
    gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
  } else {
    S s = evalS(uv);
    gl_FragColor = vec4(clamp(s.ao,0.0,1.0), clamp(s.rough, 0.02, 1.0), clamp(s.metal, 0.0, 1.0), 1.0);
  }
}
`;
}

// ---------------------------------------------------------------------------------------------
// Surface library
// ---------------------------------------------------------------------------------------------
export const SURFACES = {
  asphalt: { tile: [4, 4], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec3 v = voro(uv, vec2(96.), 1.0);
  float stone = 1.0 - smoothstep(0.22, 0.5, v.x);
  vec3 v2 = voro(uv + 0.37, vec2(190.), 1.0);
  float stone2 = 1.0 - smoothstep(0.2, 0.46, v2.x);
  float grain = fbm(uv, vec2(96.), 4);
  float macro = fbm(uv, vec2(3.), 5);
  float exposure = remap(fbm(uv + 4.2, vec2(6.), 5), -0.7, 0.7);
  vec3 binder = vec3(0.040, 0.040, 0.043) * (0.82 + 0.3 * macro);
  vec3 stoneCol = mix(vec3(0.075, 0.073, 0.07), vec3(0.17, 0.16, 0.15), v.z);
  stoneCol = mix(stoneCol, vec3(0.22, 0.17, 0.13), step(0.85, v.z) * 0.6);
  float sMask = stone * smoothstep(0.35, 0.95, exposure * 0.7 + v.z * 0.45);
  float sMask2 = stone2 * exposure * 0.7;
  vec3 col = mix(binder, stoneCol, sMask);
  col = mix(col, stoneCol * 0.75, sMask2 * 0.6);
  vec2 w = vec2(fbm(uv, vec2(5.), 3), fbm(uv + 0.5, vec2(5.), 3)) * 0.035;
  vec4 cv = voronoi(uv + w, vec2(3.), 0.95);
  float crackMask = remap(fbm(uv + 0.2, vec2(2.), 3), -0.15, 0.35);
  float crackW = 0.006 + 0.01 * remap(fbm(uv + 7.0, vec2(9.), 3), -0.5, 0.5);
  float crack = (1.0 - smoothstep(0.0, crackW, cv.w)) * crackMask;
  float tar = (1.0 - smoothstep(0.02, 0.05, cv.w)) * remap(fbm(uv + 0.8, vec2(2.), 3), 0.05, 0.3);
  float oil = remap(fbm(uv + 3.1, vec2(4.), 6), 0.28, 0.75);
  float patchN = fbm(uv + 11.0, vec2(2.), 4);
  float patchM = smoothstep(0.32, 0.36, patchN);
  col = mix(col, col * vec3(0.8, 0.82, 0.86), patchM);
  col = mix(col, vec3(0.022, 0.021, 0.024), tar * 0.92);
  col *= 1.0 - oil * 0.5;
  col *= 1.0 - crack * 0.85;
  col *= 0.88 + 0.22 * grain;
  s.albedo = col;
  s.h = stone * (0.5 + 0.5 * v.z) * 0.0035 + sMask2 * 0.001 + grain * 0.0006 - crack * 0.012 + tar * 0.0012 - patchM * 0.002;
  s.rough = clamp(0.9 - sMask * 0.14 - tar * 0.4 - oil * 0.3 + grain * 0.05 - patchM * 0.05, 0.05, 1.0);
  s.metal = 0.0;
  s.ao = 1.0 - crack * 0.8 - (1.0 - stone) * 0.12;
}` },

  concrete: { tile: [3, 3], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec2 m = uv * uTile; // meters
  float m1 = fbm(uv, vec2(3.), 6);
  float m2 = fbm(uv + 1.3, vec2(14.), 5);
  float fine = fbm(uv + 2.1, vec2(160.), 3);
  vec3 col = uTint * (0.84 + 0.2 * m1 + 0.09 * m2);
  col = mix(col, col * vec3(1.04, 1.0, 0.93), remap(m2, 0.0, 0.6));
  vec3 vp = voro(uv, vec2(120.), 1.0);
  float pore = (1.0 - smoothstep(0.04, 0.17, vp.x)) * step(0.7, vp.z);
  float streakN = fbm(vec2(uv.x, uv.y * 0.12), vec2(40., 1.), 5);
  float streak = remap(streakN, 0.05, 0.75) * (0.35 + 0.65 * remap(m1, -0.3, 0.5));
  float dx = abs(mod(m.x + 0.75, 1.5) - 0.75);
  float dy = abs(mod(m.y + 1.5, 3.0) - 1.5);
  float seam = 1.0 - smoothstep(0.0, 0.006, min(dx, dy));
  vec2 tp = vec2(mod(m.x, 0.75) - 0.375, mod(m.y, 0.75) - 0.375);
  float tr = length(tp);
  float tie = 1.0 - smoothstep(0.011, 0.016, tr);
  float tieStain = (1.0 - smoothstep(0.015, 0.05, tr)) * (1.0 - tie);
  float dirt = remap(fbm(uv + 6.0, vec2(5.), 5), 0.1, 0.7);
  col *= 1.0 - streak * 0.32;
  col *= 1.0 - dirt * 0.25;
  col *= 1.0 - pore * 0.45;
  col *= 1.0 - seam * 0.35;
  col = mix(col, col * vec3(0.7, 0.55, 0.45), tieStain * 0.6);
  col *= 1.0 - tie * 0.7;
  col *= 0.94 + 0.1 * fine;
  s.albedo = col;
  s.h = fine * 0.0004 + m2 * 0.0008 - pore * 0.002 - seam * 0.004 - tie * 0.008;
  s.rough = clamp(0.86 + fine * 0.05 - streak * 0.1 + dirt * 0.05, 0.1, 1.0);
  s.ao = 1.0 - pore * 0.5 - seam * 0.4 - tie * 0.5;
}` },

  brick: { tile: [2.25, 2.4], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec2 m = uv * vec2(10., 32.);
  float row = floor(m.y);
  float off = mod(row, 2.0) * 0.5;
  vec2 bm = vec2(m.x + off, m.y);
  vec2 cell = floor(bm);
  vec2 f = fract(bm);
  vec2 cid = vec2(mod(cell.x, 10.), mod(cell.y, 32.));
  vec3 r3 = hash32(cid + 7.0);
  float en = fbm(uv, vec2(48.), 4) * 0.5 + 0.5;
  vec2 mw = vec2(0.024, 0.075);
  vec2 de = min(f, 1.0 - f) / mw;
  float e = min(de.x, de.y);
  float bmask = smoothstep(1.0, 1.4 + en * 1.8, e);
  float chip = step(0.8, fbm(uv + r3.x * 3.0, vec2(30.), 3) * 0.5 + 0.5 + (1.0 - smoothstep(1.0, 3.0, e)) * 0.25);
  bmask *= 1.0 - chip * 0.8;
  vec3 brickCol = mix(vec3(0.23, 0.075, 0.045), vec3(0.40, 0.16, 0.085), r3.x);
  brickCol = mix(brickCol, vec3(0.18, 0.11, 0.085), r3.y * 0.55);
  brickCol *= (r3.z > 0.92) ? 0.55 : 1.0;
  float surfN = fbm(uv, vec2(36.), 5);
  float speck = step(0.75, voro(uv, vec2(200.), 1.0).z) * 0.25;
  brickCol *= 0.82 + 0.28 * surfN - speck;
  vec3 mortar = vec3(0.27, 0.26, 0.245) * (0.75 + 0.35 * fbm(uv + 5.0, vec2(80.), 3));
  vec3 col = mix(mortar, brickCol, bmask);
  float grime = remap(fbm(vec2(uv.x, uv.y * 0.18), vec2(28., 1.), 5), -0.1, 0.8);
  float soot = remap(fbm(uv + 2.0, vec2(3.), 5), 0.0, 0.6);
  col *= 1.0 - grime * 0.4;
  col *= 1.0 - soot * 0.3;
  float eff = remap(fbm(uv + 9.0, vec2(5.), 6), 0.35, 0.85);
  col = mix(col, vec3(0.52, 0.5, 0.47), eff * 0.4 * (1.0 - bmask * 0.3));
  s.albedo = col;
  s.h = bmask * 0.012 + surfN * 0.0012 * bmask - chip * 0.004;
  s.rough = mix(0.97, 0.84 - r3.y * 0.08, bmask) - grime * 0.05;
  s.ao = mix(0.5, 1.0, bmask);
}` },

  container: { tile: [2.4, 2.4], body: /* glsl */`
float trap(float t){ t = fract(t); return smoothstep(0.0, 0.14, t) - smoothstep(0.5, 0.64, t); }
void surf(vec2 uv, inout S s){
  float t = uv.x * 9.0;
  float prof = trap(t);
  float slope = abs(trap(t + 0.02) - trap(t - 0.02));
  float edge = smoothstep(0.05, 0.4, slope);
  float n1 = fbm(uv, vec2(4.), 6);
  float n2 = fbm(uv + 3.3, vec2(24.), 5);
  float fine = fbm(uv + 1.7, vec2(140.), 3);
  vec3 paint = uTint * (0.9 + 0.12 * n1);
  paint = mix(paint, paint * 1.25 + 0.02, remap(n1, 0.2, 0.8) * 0.5); // sun bleaching
  float wearN = n2 * 0.6 + n1 * 0.4 + edge * 0.35 + fine * 0.15;
  float chip = smoothstep(0.62 - uWear * 0.35, 0.66 - uWear * 0.35, wearN);
  float rustN = fbm(uv + 8.0, vec2(10.), 6);
  vec3 rust = mix(vec3(0.16, 0.05, 0.02), vec3(0.42, 0.17, 0.06), rustN * 0.5 + 0.5);
  rust = mix(rust, vec3(0.08, 0.04, 0.03), remap(fine, 0.2, 0.8));
  float streakN = fbm(vec2(uv.x, uv.y * 0.08), vec2(60., 1.), 5);
  float streak = remap(streakN, 0.1, 0.8) * remap(n1, -0.4, 0.4) * uWear;
  float dirt = (1.0 - smoothstep(0.0, 0.3, uv.y)) * (0.6 + 0.4 * n2);
  vec3 col = mix(paint, rust, chip);
  col = mix(col, vec3(0.2, 0.07, 0.025), streak * 0.65);
  col = mix(col, vec3(0.06, 0.05, 0.04), dirt * 0.55);
  col *= 0.95 + 0.08 * fine;
  // stencil-like dents
  float dent = fbm(uv + 2.0, vec2(3.), 3);
  s.albedo = col;
  s.h = prof * 0.032 + dent * 0.004 - chip * 0.0006 + fine * 0.0002;
  s.rough = clamp(mix(0.48 + n2 * 0.1, 0.88, chip) + dirt * 0.25 + streak * 0.1, 0.05, 1.0);
  s.ao = 1.0 - (1.0 - prof) * 0.15 - dirt * 0.2;
}` },

  galvanized: { tile: [1.52, 1.52], body: /* glsl */`
void surf(vec2 uv, inout S s){
  float t = uv.x * 20.0 * 6.2831853;
  float prof = sin(t) * 0.5 + 0.5;
  vec3 sp = voro(uv, vec2(26.), 1.0);
  float spangle = sp.z;
  float n1 = fbm(uv, vec2(3.), 6);
  float n2 = fbm(uv + 2.0, vec2(16.), 5);
  float streak = remap(fbm(vec2(uv.x, uv.y * 0.1), vec2(50., 1.), 5), 0.0, 0.8);
  float whiteRust = remap(n2 * 0.6 + n1 * 0.5, 0.25, 0.7);
  float redRust = remap(fbm(uv + 5.0, vec2(8.), 6) + (1.0 - uv.y) * 0.25 * uWear, 0.45, 0.75) * uWear;
  vec3 zinc = vec3(0.52, 0.54, 0.56) * (0.85 + 0.25 * spangle) * (0.85 + 0.15 * n1);
  vec3 col = zinc;
  col = mix(col, vec3(0.55, 0.56, 0.55), whiteRust * 0.8);
  col = mix(col, mix(vec3(0.18, 0.06, 0.02), vec3(0.38, 0.16, 0.06), n2 * 0.5 + 0.5), redRust);
  col *= 1.0 - streak * 0.45;
  s.albedo = col;
  float metal = 1.0 - max(whiteRust * 0.85, redRust);
  s.metal = metal * (1.0 - streak * 0.4);
  s.h = prof * 0.018 + n2 * 0.0004 - redRust * 0.0005;
  s.rough = clamp(0.32 + spangle * 0.12 + whiteRust * 0.4 + redRust * 0.5 + streak * 0.15, 0.05, 1.0);
  s.ao = 0.85 + 0.15 * prof;
}` },

  diamondplate: { tile: [0.6, 0.6], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec2 g = uv * 14.0;
  vec2 c = floor(g);
  vec2 f = fract(g) - 0.5;
  float par = mod(c.x + c.y, 2.0);
  float a = par > 0.5 ? 0.7853981 : -0.7853981;
  mat2 R = mat2(cos(a), -sin(a), sin(a), cos(a));
  vec2 q = R * f;
  float d = length(q * vec2(1.0, 3.4));
  float lug = 1.0 - smoothstep(0.30, 0.36, d);
  float n1 = fbm(uv, vec2(4.), 6);
  float scratches = pow(ridged(uv * vec2(1.0, 1.0) + n1 * 0.02, vec2(60., 6.), 3), 6.0);
  float dirt = remap(fbm(uv + 2.0, vec2(6.), 6), -0.1, 0.6) * (1.0 - lug);
  float rust = remap(fbm(uv + 9.0, vec2(9.), 6), 0.35, 0.7) * uWear;
  vec3 steel = vec3(0.50, 0.50, 0.51) * (0.85 + 0.15 * n1);
  vec3 col = mix(steel, vec3(0.07, 0.06, 0.05), dirt * 0.85);
  col = mix(col, vec3(0.3, 0.12, 0.05), rust);
  col = mix(col, steel * 1.15, lug * 0.5);
  s.albedo = col;
  s.metal = 1.0 - max(dirt * 0.8, rust);
  s.h = lug * 0.0022 + scratches * -0.0001;
  s.rough = clamp(mix(0.55, 0.3, lug) + dirt * 0.35 + rust * 0.4 - scratches * 0.1, 0.05, 1.0);
  s.ao = mix(0.7, 1.0, lug);
}` },

  wood: { tile: [1.2, 1.2], body: /* glsl */`
void surf(vec2 uv, inout S s){
  float pv = uv.y * 8.0;
  float plank = floor(pv);
  float pf = fract(pv);
  vec3 r = hash32(vec2(mod(plank, 8.0), 3.0));
  vec2 guv = vec2(uv.x + r.x, pf * 0.125 + r.y);
  float grain = fbm(vec2(guv.x, guv.y), vec2(3., 70.), 5);
  float rings = sin((guv.y * 70.0 + fbm(guv, vec2(4., 8.), 4) * 6.0) * 3.14159);
  float knotsV = voro(uv + r.z, vec2(3., 24.), 1.0).x;
  float knot = 1.0 - smoothstep(0.03, 0.12, knotsV);
  vec3 base = mix(vec3(0.33, 0.24, 0.15), vec3(0.45, 0.34, 0.22), r.x);
  vec3 weather = vec3(0.30, 0.28, 0.25);
  float wN = remap(fbm(uv + 4.0, vec2(4., 4.), 6), -0.3, 0.6);
  vec3 col = mix(base, weather, wN * 0.6 + 0.2);
  col *= 0.8 + 0.2 * rings * 0.5 + 0.25 * grain;
  col = mix(col, col * 0.45, knot);
  float gap = 1.0 - smoothstep(0.0, 0.04, min(pf, 1.0 - pf));
  col *= 1.0 - gap * 0.85;
  vec2 nailP = vec2(mod(uv.x * 1.2, 0.6) - 0.05, pf - 0.5);
  vec2 nailP2 = vec2(mod(uv.x * 1.2, 0.6) - 0.05, pf - 0.5);
  float nail = 1.0 - smoothstep(0.0045, 0.0065, length(vec2(nailP.x, nailP.y * 0.15)));
  col = mix(col, vec3(0.08, 0.06, 0.05), nail);
  s.albedo = col;
  s.metal = nail * 0.6;
  s.h = grain * 0.0006 + rings * 0.0003 - gap * 0.006 - knot * 0.0005;
  s.rough = clamp(0.82 + grain * 0.06 - nail * 0.3, 0.1, 1.0);
  s.ao = 1.0 - gap * 0.6;
}` },

  paintedmetal: { tile: [1, 1], body: /* glsl */`
void surf(vec2 uv, inout S s){
  float n1 = fbm(uv, vec2(4.), 6);
  float n2 = fbm(uv + 3.0, vec2(18.), 5);
  float peel = fbm(uv + 1.0, vec2(220.), 2);
  float wearN = n2 * 0.65 + n1 * 0.35;
  float chip = smoothstep(0.6 - uWear * 0.4, 0.63 - uWear * 0.4, wearN);
  float primer = smoothstep(0.55 - uWear * 0.4, 0.58 - uWear * 0.4, wearN) - chip;
  float rust = chip * remap(fbm(uv + 7.0, vec2(12.), 4), -0.3, 0.3);
  float scratch = pow(ridged(uv + n1 * 0.05, vec2(40., 3.), 3), 8.0) * uWear;
  float streak = remap(fbm(vec2(uv.x, uv.y * 0.1), vec2(30., 1.), 5), 0.2, 0.8) * uWear;
  vec3 paint = uTint * (0.9 + 0.1 * n1);
  vec3 col = paint;
  col = mix(col, uTint2, primer);
  col = mix(col, vec3(0.42, 0.42, 0.43), chip);
  col = mix(col, vec3(0.3, 0.12, 0.04), rust);
  col = mix(col, vec3(0.5), scratch * 0.6);
  col = mix(col, col * vec3(0.55, 0.38, 0.28), streak * 0.5);
  s.albedo = col;
  s.metal = max(chip - rust, scratch);
  s.h = peel * 0.00008 - chip * 0.0002 + n2 * 0.0002;
  s.rough = clamp(0.42 + n1 * 0.08 + chip * 0.15 + rust * 0.4 + streak * 0.15, 0.05, 1.0);
  s.ao = 1.0;
}` },

  grunge: { tile: [1, 1], body: /* glsl */`
void surf(vec2 uv, inout S s){
  float n1 = fbm(uv, vec2(5.), 6);
  float n2 = fbm(uv + 2.0, vec2(30.), 5);
  float sc = pow(ridged(uv + n1 * 0.03, vec2(50., 7.), 3), 10.0);
  float sc2 = pow(ridged(uv.yx + n2 * 0.02 + 0.3, vec2(70., 9.), 3), 12.0);
  float dirt = remap(n1 * 0.7 + n2 * 0.4, 0.1, 0.8);
  s.albedo = vec3(0.92 - dirt * 0.3 + n2 * 0.05) + (sc + sc2) * 0.25;
  s.h = n2 * 0.00012 - (sc + sc2) * 0.00004;
  s.rough = clamp(0.75 + n1 * 0.15 + dirt * 0.2 - (sc + sc2) * 0.3, 0.05, 1.0);
  s.metal = 1.0;
  s.ao = 1.0;
}` },

  stipple: { tile: [0.12, 0.12], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec3 v = voro(uv, vec2(48.), 1.0);
  vec3 v2 = voro(uv + 0.5, vec2(96.), 1.0);
  float b = 1.0 - smoothstep(0.0, 0.6, v.x);
  float b2 = 1.0 - smoothstep(0.0, 0.6, v2.x);
  float n = fbm(uv, vec2(4.), 4);
  s.albedo = vec3(0.9 + n * 0.06 + b * 0.04);
  s.h = (b * 0.00025 + b2 * 0.00012);
  s.rough = 0.78 - b * 0.12 + n * 0.05;
  s.metal = 0.0;
  s.ao = 0.8 + 0.2 * b;
}` },

  fabric: { tile: [0.06, 0.06], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec2 g = uv * 32.0;
  vec2 c = floor(g); vec2 f = fract(g);
  float over = mod(c.x + floor(c.y), 2.0);
  float warp = sin(f.x * 3.14159) * (over > 0.5 ? 1.0 : 0.4);
  float weft = sin(f.y * 3.14159) * (over > 0.5 ? 0.4 : 1.0);
  float hgt = max(warp, weft);
  float fz = fbm(uv, vec2(64.), 3);
  float big = fbm(uv, vec2(2.), 4);
  s.albedo = vec3(0.75 + hgt * 0.2 + fz * 0.05 + big * 0.08);
  s.h = hgt * 0.00025 + fz * 0.00003;
  s.rough = 0.92;
  s.metal = 0.0;
  s.ao = 0.7 + 0.3 * hgt;
}` },

  carbon: { tile: [0.05, 0.05], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec2 g = uv * 16.0;
  vec2 c = floor(g); vec2 f = fract(g);
  float tw = mod(c.x + c.y, 4.0);
  bool horiz = tw < 2.0;
  float across = horiz ? f.y : f.x;
  float along = horiz ? f.x : f.y;
  float tow = sin(across * 3.14159);
  float fib = 0.5 + 0.5 * sin(across * 3.14159 * 18.0);
  s.albedo = vec3(0.03 + 0.03 * tow * (horiz ? 1.0 : 0.5) + fib * 0.01);
  s.h = tow * 0.00012 + fib * 0.00002 + (horiz ? 0.00003 : 0.0);
  s.rough = 0.35 + 0.15 * (1.0 - tow);
  s.metal = 0.0;
  s.ao = 0.85 + 0.15 * tow;
}` },

  chainlink: { tile: [0.5, 0.5], body: /* glsl */`
void surf(vec2 uv, inout S s){
  float N = 9.0;
  float a = (uv.x + uv.y) * N;
  float b = (uv.x - uv.y) * N;
  float da = abs(fract(a) - 0.5);
  float db = abs(fract(b) - 0.5);
  float w = 0.075;
  // interleave: at each crossing one wire is above
  float cross = mod(floor(a) + floor(b), 2.0);
  float wa = 1.0 - smoothstep(w * 0.7, w, da);
  float wb = 1.0 - smoothstep(w * 0.7, w, db);
  float ha = sqrt(max(0.0, 1.0 - (da / w) * (da / w)));
  float hb = sqrt(max(0.0, 1.0 - (db / w) * (db / w)));
  float h = max(ha * (cross > 0.5 ? 1.0 : 0.6), hb * (cross > 0.5 ? 0.6 : 1.0));
  float n = fbm(uv, vec2(6.), 5);
  float rust = remap(fbm(uv + 3.0, vec2(10.), 5), 0.3, 0.7);
  s.albedo = mix(vec3(0.5, 0.51, 0.52) * (0.85 + 0.2 * n), vec3(0.3, 0.13, 0.05), rust * 0.7);
  s.alpha = max(wa, wb);
  s.h = h * 0.002;
  s.rough = 0.42 + rust * 0.4;
  s.metal = 1.0 - rust * 0.7;
  s.ao = 0.7 + 0.3 * h;
}` },

  bullethole: { tile: [0.1, 0.1], body: /* glsl */`
void surf(vec2 uv, inout S s){
  vec2 p = uv - 0.5;
  float r = length(p);
  float ang = atan(p.y, p.x);
  float jag = gnoise(vec2(ang * 3.0, 0.0), vec2(19.0, 1.0)) * 0.03;
  float hole = 1.0 - smoothstep(0.06 + jag, 0.075 + jag, r);
  float crater = 1.0 - smoothstep(0.08 + jag, 0.22 + jag * 2.0, r);
  float cracks = pow(abs(sin(ang * 7.0 + gnoise(vec2(r * 9.0, ang), vec2(9., 6.)) * 3.0)), 30.0) * (1.0 - smoothstep(0.1, 0.42, r));
  float soot = 1.0 - smoothstep(0.05, 0.45, r + gnoise(p * 9.0, vec2(9.)) * 0.08);
  s.albedo = mix(vec3(0.5), vec3(0.02), max(hole, soot * 0.55));
  s.albedo = mix(s.albedo, vec3(0.65, 0.62, 0.58), crater * (1.0 - hole) * 0.35);
  s.alpha = clamp(max(max(hole, crater * 0.9), max(cracks, soot * 0.7)), 0.0, 1.0) * (1.0 - smoothstep(0.38, 0.5, r));
  s.h = -hole * 0.004 - crater * 0.002 - cracks * 0.0004;
  s.rough = 0.9;
  s.metal = 0.0;
  s.ao = 1.0 - hole * 0.9 - crater * 0.3;
}` },

  // data texture: R = puddle mask, G = macro tone, B = dirt / leaf debris
  groundmask: { tile: [36, 36], data: true, body: /* glsl */`
void surf(vec2 uv, inout S s){
  float p = fbm(uv, vec2(5.), 7);
  float p2 = fbm(uv + 1.7, vec2(14.), 5);
  float puddle = smoothstep(0.12, 0.26, p + p2 * 0.25);
  float damp = smoothstep(-0.15, 0.2, p + p2 * 0.3);
  float macro = fbm(uv + 3.0, vec2(3.), 6) * 0.5 + 0.5;
  float dirt = remap(fbm(uv + 7.0, vec2(9.), 6), 0.1, 0.7);
  s.albedo = vec3(puddle, macro, dirt);
  s.alpha = damp;
}` },
};

// ---------------------------------------------------------------------------------------------

export class TextureGenerator {
  constructor(renderer, quality = 1) {
    this.renderer = renderer;
    this.quality = quality;
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new THREE.Scene();
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.maxAniso = Math.min(16, renderer.capabilities.getMaxAnisotropy());
    this.programs = {};
  }

  _material(name) {
    if (!this.programs[name]) {
      const def = SURFACES[name];
      this.programs[name] = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: fragFor(def.body),
        uniforms: {
          uMode: { value: 0 }, uSize: { value: 512 }, uTile: { value: new THREE.Vector2(...def.tile) },
          uTint: { value: new THREE.Color(0.5, 0.5, 0.5) }, uTint2: { value: new THREE.Color(0.4, 0.4, 0.4) },
          uWear: { value: 0.5 }, uSeed: { value: 0 },
        },
        depthTest: false, depthWrite: false,
      });
    }
    return this.programs[name];
  }

  _rt(size, srgb) {
    const rt = new THREE.WebGLRenderTarget(size, size, {
      type: THREE.UnsignedByteType,
      format: THREE.RGBAFormat,
      colorSpace: srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.RepeatWrapping,
      wrapT: THREE.RepeatWrapping,
      depthBuffer: false,
      anisotropy: this.maxAniso,
    });
    return rt;
  }

  /**
   * Bake a surface. Returns { map, normalMap, ormMap, tile }.
   * opts: size, tint, tint2, wear
   */
  bake(name, opts = {}) {
    const def = SURFACES[name];
    const size = Math.max(64, Math.round((opts.size || 1024) * this.quality / 64) * 64);
    const mat = this._material(name);
    const u = mat.uniforms;
    u.uSize.value = size;
    if (opts.tint) u.uTint.value.set(opts.tint); else u.uTint.value.setRGB(0.36, 0.355, 0.34);
    if (opts.tint2) u.uTint2.value.set(opts.tint2); else u.uTint2.value.setRGB(0.35, 0.33, 0.3);
    u.uWear.value = opts.wear !== undefined ? opts.wear : 0.5;
    this.quad.material = mat;

    const r = this.renderer;
    const prevRT = r.getRenderTarget();
    const out = { tile: def.tile.slice() };
    const passes = def.data ? [['map', 0, false]] : [['map', 0, true], ['normalMap', 1, false], ['ormMap', 2, false]];
    for (const [key, mode, srgb] of passes) {
      const rt = this._rt(size, srgb);
      u.uMode.value = mode;
      r.setRenderTarget(rt);
      r.render(this.scene, this.camera);
      rt.texture.name = `${name}.${key}`;
      out[key] = rt.texture;
      out[key + 'RT'] = rt;
    }
    r.setRenderTarget(prevRT);
    return out;
  }
}
