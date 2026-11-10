// HDR render pipeline:
//   planar reflection -> MSAA HDR scene (+depth) -> ray-marched volumetric fog with shadowed light shafts
//   -> depth-aware upsample/composite -> physically based bloom -> grade/tonemap/lens effects -> screen
import * as THREE from 'three';

const FS_VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

function fsMaterial(frag, uniforms, extra = {}) {
  return new THREE.ShaderMaterial({ vertexShader: FS_VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false, ...extra });
}

function make3DNoise(size = 64) {
  const data = new Uint8Array(size * size * size);
  // tileable value noise fbm
  const lattice = (n) => {
    const a = new Float32Array(n * n * n);
    for (let i = 0; i < a.length; i++) a[i] = Math.random();
    return a;
  };
  const octs = [[4, 0.5], [8, 0.27], [16, 0.15], [32, 0.08]].map(([n, amp]) => ({ n, amp, l: lattice(n) }));
  const s = (t) => t * t * (3 - 2 * t);
  let i = 0;
  for (let z = 0; z < size; z++) for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let v = 0;
    for (const o of octs) {
      const fx = x / size * o.n, fy = y / size * o.n, fz = z / size * o.n;
      const x0 = Math.floor(fx), y0 = Math.floor(fy), z0 = Math.floor(fz);
      const tx = s(fx - x0), ty = s(fy - y0), tz = s(fz - z0);
      const n = o.n, L = o.l;
      const idx = (a, b, c) => L[((c % n) * n + (b % n)) * n + (a % n)];
      const c00 = idx(x0, y0, z0) * (1 - tx) + idx(x0 + 1, y0, z0) * tx;
      const c10 = idx(x0, y0 + 1, z0) * (1 - tx) + idx(x0 + 1, y0 + 1, z0) * tx;
      const c01 = idx(x0, y0, z0 + 1) * (1 - tx) + idx(x0 + 1, y0, z0 + 1) * tx;
      const c11 = idx(x0, y0 + 1, z0 + 1) * (1 - tx) + idx(x0 + 1, y0 + 1, z0 + 1) * tx;
      v += ((c00 * (1 - ty) + c10 * ty) * (1 - tz) + (c01 * (1 - ty) + c11 * ty) * tz) * o.amp;
    }
    data[i++] = Math.max(0, Math.min(255, v * 255));
  }
  const tex = new THREE.Data3DTexture(data, size, size, size);
  tex.format = THREE.RedFormat;
  tex.type = THREE.UnsignedByteType;
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = tex.wrapR = THREE.RepeatWrapping;
  tex.unpackAlignment = 1;
  tex.needsUpdate = true;
  return tex;
}

function makeLensDirt() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 512, 512);
  let seed = 3;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 60; i++) { // smudges
    const x = r() * 512, y = r() * 512, rad = 40 + r() * 140;
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    const a = 0.03 + r() * 0.05;
    gr.addColorStop(0, `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.beginPath(); g.ellipse(x, y, rad, rad * (0.4 + r() * 0.6), r() * 3, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 220; i++) { // droplets / dust specks
    const x = r() * 512, y = r() * 512, rad = 1 + Math.pow(r(), 3) * 14;
    const gr = g.createRadialGradient(x, y, rad * 0.3, x, y, rad);
    const a = 0.15 + r() * 0.35;
    gr.addColorStop(0, `rgba(255,255,255,${a * 0.4})`); gr.addColorStop(0.8, `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

export class Pipeline {
  constructor(renderer, quality) {
    this.renderer = renderer;
    this.q = quality;
    this.quadScene = new THREE.Scene();
    this.quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
    this.quad.frustumCulled = false;
    this.quadScene.add(this.quad);

    const hdr = { type: THREE.HalfFloatType, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false };
    this.depthTex = new THREE.DepthTexture(4, 4);
    this.depthTex.type = THREE.UnsignedIntType;
    this.sceneRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: quality.msaa, depthBuffer: true, depthTexture: this.depthTex });
    this.fogRT = new THREE.WebGLRenderTarget(4, 4, hdr);
    this.hdrRT = new THREE.WebGLRenderTarget(4, 4, hdr);
    this.bloomRTs = [];
    for (let i = 0; i < 6; i++) this.bloomRTs.push(new THREE.WebGLRenderTarget(4, 4, hdr));

    this.noise3D = make3DNoise(64);
    this.lensDirt = makeLensDirt();
    this.time = { value: 0 };
    this.params = {
      exposure: 1.0, bloom: 0.05, dirt: 0.5, fogDensity: 0.022, fogFalloff: 0.13,
      vignette: 0.32, grain: 0.02, ca: 0.0008, damage: 0, flash: 0, saturation: 1.0, lowHealth: 0, ads: 0,
    };
  }

  // Must be called once lights exist; builds the fog shader with unrolled per-light code.
  setupLights(shadowSpots, freeSpots, points) {
    this.shadowSpots = shadowSpots;
    this.freeSpots = freeSpots;
    this.points = points;
    const NS = shadowSpots.length, NF = freeSpots.length, NP = points.length;
    let shadowCode = '';
    for (let i = 0; i < NS; i++) {
      shadowCode += `
      {
        vec3 L = uSPos[${i}] - p; float d2 = dot(L, L); vec3 l = L * inversesqrt(d2);
        float cd = dot(-l, uSDir[${i}]);
        if(cd > uSCos[${i}].x){
          float spot = smoothstep(uSCos[${i}].x, uSCos[${i}].y, cd);
          vec4 sc = uSMat[${i}] * vec4(p, 1.0); sc.xyz /= sc.w;
          float sh = 1.0;
          if(sc.x > 0.0 && sc.x < 1.0 && sc.y > 0.0 && sc.y < 1.0 && sc.z < 1.0)
            sh = step(sc.z - 0.0015, unpackRGBAToDepth(texture2D(uSMap${i}, sc.xy)));
          float att = 1.0 / max(d2, 0.25);
          float rng = uSCos[${i}].z; att *= clamp(1.0 - pow(d2 / (rng * rng), 2.0), 0.0, 1.0);
          light += uSCol[${i}] * spot * sh * att * phaseHG(dot(l, rd));
        }
      }`;
    }
    let freeCode = '';
    for (let i = 0; i < NF; i++) {
      freeCode += `
      {
        vec3 L = uFPos[${i}] - p; float d2 = dot(L, L); vec3 l = L * inversesqrt(d2);
        float cd = dot(-l, uFDir[${i}]);
        if(cd > uFCos[${i}].x){
          float spot = smoothstep(uFCos[${i}].x, uFCos[${i}].y, cd);
          light += uFCol[${i}] * spot / max(d2, 0.25) * phaseHG(dot(l, rd));
        }
      }`;
    }
    let pointCode = '';
    for (let i = 0; i < NP; i++) {
      pointCode += `
      {
        vec3 L = uPPos[${i}] - p; float d2 = dot(L, L);
        light += uPCol[${i}] / max(d2, 0.5) * phaseHG(dot(L * inversesqrt(d2), rd)) * clamp(1.0 - d2 / (uPPos[${i}].y * 0.0 + 400.0), 0.0, 1.0);
      }`;
    }
    const samplers = Array.from({ length: NS }, (_, i) => `uniform sampler2D uSMap${i};`).join('\n');
    const uniforms = {
      tDepth: { value: this.depthTex }, tNoise: { value: this.noise3D },
      uInvProj: { value: new THREE.Matrix4() }, uCamWorld: { value: new THREE.Matrix4() }, uCamPos: { value: new THREE.Vector3() },
      uTime: this.time, uDensity: { value: 0.03 }, uFalloff: { value: 0.13 }, uAmbient: { value: new THREE.Color(0.0009, 0.0011, 0.0017) },
      uSteps: { value: this.q.fogSteps }, uMaxDist: { value: 70 }, uNear: { value: 0.1 }, uFar: { value: 1000 }, uFrame: { value: 0 },
      uSPos: { value: Array.from({ length: Math.max(NS, 1) }, () => new THREE.Vector3()) },
      uSDir: { value: Array.from({ length: Math.max(NS, 1) }, () => new THREE.Vector3()) },
      uSCol: { value: Array.from({ length: Math.max(NS, 1) }, () => new THREE.Vector3()) },
      uSCos: { value: Array.from({ length: Math.max(NS, 1) }, () => new THREE.Vector3()) },
      uSMat: { value: Array.from({ length: Math.max(NS, 1) }, () => new THREE.Matrix4()) },
      uFPos: { value: Array.from({ length: Math.max(NF, 1) }, () => new THREE.Vector3()) },
      uFDir: { value: Array.from({ length: Math.max(NF, 1) }, () => new THREE.Vector3()) },
      uFCol: { value: Array.from({ length: Math.max(NF, 1) }, () => new THREE.Vector3()) },
      uFCos: { value: Array.from({ length: Math.max(NF, 1) }, () => new THREE.Vector2()) },
      uPPos: { value: Array.from({ length: Math.max(NP, 1) }, () => new THREE.Vector3()) },
      uPCol: { value: Array.from({ length: Math.max(NP, 1) }, () => new THREE.Vector3()) },
    };
    for (let i = 0; i < NS; i++) uniforms['uSMap' + i] = { value: null };
    const frag = /* glsl */`
      precision highp float;
      precision highp sampler3D;
      #include <packing>
      varying vec2 vUv;
      uniform sampler2D tDepth; uniform sampler3D tNoise;
      uniform mat4 uInvProj; uniform mat4 uCamWorld; uniform vec3 uCamPos;
      uniform float uTime, uDensity, uFalloff, uMaxDist, uNear, uFar, uFrame; uniform int uSteps;
      uniform vec3 uAmbient;
      uniform vec3 uSPos[${Math.max(NS, 1)}]; uniform vec3 uSDir[${Math.max(NS, 1)}]; uniform vec3 uSCol[${Math.max(NS, 1)}]; uniform vec3 uSCos[${Math.max(NS, 1)}]; uniform mat4 uSMat[${Math.max(NS, 1)}];
      uniform vec3 uFPos[${Math.max(NF, 1)}]; uniform vec3 uFDir[${Math.max(NF, 1)}]; uniform vec3 uFCol[${Math.max(NF, 1)}]; uniform vec2 uFCos[${Math.max(NF, 1)}];
      uniform vec3 uPPos[${Math.max(NP, 1)}]; uniform vec3 uPCol[${Math.max(NP, 1)}];
      ${samplers}
      float phaseHG(float c){ const float g = 0.55; float g2 = g * g; return (1.0 - g2) / (12.566 * pow(1.0 + g2 - 2.0 * g * c, 1.5)) + 0.02; }
      float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
      float density(vec3 p){
        float h = exp(-max(p.y, 0.0) * uFalloff);
        vec3 w = vec3(uTime * 0.25, -uTime * 0.05, uTime * 0.12);
        float n1 = texture(tNoise, p * 0.035 + w * 0.035).r;
        float n2 = texture(tNoise, p * 0.11 - w * 0.08).r;
        float n = smoothstep(0.25, 0.75, n1) * 0.8 + n2 * 0.5;
        return uDensity * h * (0.35 + n * 1.1);
      }
      void main(){
        float depth = texture2D(tDepth, vUv).r;
        vec4 ndc = vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
        vec4 vp = uInvProj * ndc; vp /= vp.w;
        float dist = length(vp.xyz);
        if(depth >= 0.99999) dist = 450.0;
        vec3 wp = (uCamWorld * vec4(vp.xyz, 1.0)).xyz;
        vec3 rd = normalize(wp - uCamPos);
        float L = min(dist, uMaxDist);
        float jitter = ign(gl_FragCoord.xy + uFrame * 5.588238);
        vec3 scat = vec3(0.0); float T = 1.0;
        float N = float(uSteps);
        float prevT = 0.0;
        for(int s = 0; s < 64; s++){
          if(s >= uSteps) break;
          float fi = (float(s) + jitter) / N;
          float t = L * fi * fi;
          float dt = t - prevT; prevT = t;
          vec3 p = uCamPos + rd * t;
          float sigma = density(p);
          vec3 light = uAmbient;
          ${shadowCode}
          ${freeCode}
          ${pointCode}
          float Ts = exp(-sigma * dt);
          scat += T * light * (1.0 - Ts);
          T *= Ts;
        }
        // last segment to L
        {
          vec3 p = uCamPos + rd * L;
          float sigma = density(p);
          float dt = L - prevT;
          float Ts = exp(-sigma * dt);
          scat += T * uAmbient * (1.0 - Ts); T *= Ts;
        }
        // analytic exponential height-fog tail beyond the march distance
        if(dist > L){
          float y0 = uCamPos.y + rd.y * L;
          float len = dist - L;
          float k = uFalloff;
          float dy = rd.y;
          float od = uDensity * 0.9 * exp(-max(y0, 0.0) * k) * (abs(dy) > 1e-4 ? (1.0 - exp(-k * dy * len)) / (k * dy) : len);
          float Tt = exp(-max(od, 0.0));
          scat += T * uAmbient * (1.0 - Tt) * 1.4;
          T *= Tt;
        }
        gl_FragColor = vec4(scat, T);
      }`;
    this.fogMat = fsMaterial(frag, uniforms);

    this.compositeMat = fsMaterial(/* glsl */`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tScene, tFog, tDepth; uniform vec2 uFogSize; uniform float uNear, uFar;
      float linZ(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      void main(){
        vec3 c = texture2D(tScene, vUv).rgb;
        float zf = linZ(texture2D(tDepth, vUv).r);
        vec2 tc = vUv * uFogSize - 0.5;
        vec2 b = floor(tc); vec2 f = tc - b;
        vec4 acc = vec4(0.0); float wsum = 0.0;
        for(int j = -1; j <= 2; j++) for(int i = -1; i <= 2; i++){
          vec2 o = vec2(float(i), float(j));
          vec2 uvl = (b + o + 0.5) / uFogSize;
          float zl = linZ(texture2D(tDepth, uvl).r);
          vec2 dd = o - f;
          float bw = exp(-dot(dd, dd) * 0.9);
          float dw = 1.0 / (0.02 + abs(zf - zl) / max(zf, 0.1));
          float w = bw * dw + 1e-5;
          acc += texture2D(tFog, uvl) * w; wsum += w;
        }
        vec4 fog = acc / wsum;
        gl_FragColor = vec4(c * fog.a + fog.rgb, 1.0);
      }`, {
      tScene: { value: this.sceneRT.texture }, tFog: { value: this.fogRT.texture }, tDepth: { value: this.depthTex },
      uFogSize: { value: new THREE.Vector2() }, uNear: { value: 0.1 }, uFar: { value: 1000 },
    });

    this.downMat = fsMaterial(/* glsl */`
      precision highp float;
      varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel; uniform int uKaris;
      vec3 s(vec2 o){ return texture2D(tSrc, vUv + o * uTexel).rgb; }
      float lum(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
      vec3 kw(vec3 c){ return c / (1.0 + lum(c)); }
      void main(){
        vec3 a = s(vec2(-2,2)), b = s(vec2(0,2)), c = s(vec2(2,2));
        vec3 d = s(vec2(-2,0)), e = s(vec2(0,0)), f = s(vec2(2,0));
        vec3 g = s(vec2(-2,-2)), h = s(vec2(0,-2)), i = s(vec2(2,-2));
        vec3 j = s(vec2(-1,1)), k = s(vec2(1,1)), l = s(vec2(-1,-1)), m = s(vec2(1,-1));
        vec3 o;
        if(uKaris == 1){
          vec3 g0 = (a+b+d+e) * 0.25, g1 = (b+c+e+f) * 0.25, g2 = (d+e+g+h) * 0.25, g3 = (e+f+h+i) * 0.25, g4 = (j+k+l+m) * 0.25;
          o = kw(g0) * 0.125 + kw(g1) * 0.125 + kw(g2) * 0.125 + kw(g3) * 0.125 + kw(g4) * 0.5;
          o = o / max(1.0 - lum(o), 0.05);
        } else {
          o = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
        }
        gl_FragColor = vec4(min(o, vec3(6e4)), 1.0);
      }`, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uKaris: { value: 0 } });

    this.upMat = fsMaterial(/* glsl */`
      precision highp float;
      varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
      void main(){
        vec2 r = uTexel * uRadius;
        vec3 o = texture2D(tSrc, vUv).rgb * 4.0;
        o += (texture2D(tSrc, vUv + vec2(-r.x, 0)).rgb + texture2D(tSrc, vUv + vec2(r.x, 0)).rgb + texture2D(tSrc, vUv + vec2(0, -r.y)).rgb + texture2D(tSrc, vUv + vec2(0, r.y)).rgb) * 2.0;
        o += texture2D(tSrc, vUv + vec2(-r.x, -r.y)).rgb + texture2D(tSrc, vUv + vec2(r.x, -r.y)).rgb + texture2D(tSrc, vUv + vec2(-r.x, r.y)).rgb + texture2D(tSrc, vUv + vec2(r.x, r.y)).rgb;
        gl_FragColor = vec4(o / 16.0, 1.0);
      }`, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uRadius: { value: 1.0 } },
      { blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendEquation: THREE.AddEquation });

    this.finalMat = fsMaterial(/* glsl */`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tHdr, tBloom, tDirt;
      uniform float uExposure, uBloom, uDirt, uVignette, uGrain, uCA, uTime, uDamage, uFlash, uSat, uLowHealth, uAspect, uAds;
      vec3 aces(vec3 x){
        const mat3 ACESIn = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
        const mat3 ACESOut = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
        vec3 v = ACESIn * x;
        vec3 a = v * (v + 0.0245786) - 0.000090537;
        vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
        return clamp(ACESOut * (a / b), 0.0, 1.0);
      }
      float h(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }
      void main(){
        vec2 uv = vUv;
        vec2 cc = uv - 0.5;
        float r2 = dot(cc * vec2(uAspect, 1.0), cc * vec2(uAspect, 1.0));
        vec2 caOff = cc * r2 * uCA * 6.0;
        vec3 col;
        col.r = texture2D(tHdr, uv - caOff).r;
        col.g = texture2D(tHdr, uv).g;
        col.b = texture2D(tHdr, uv + caOff).b;
        vec3 bloom = texture2D(tBloom, uv).rgb;
        vec3 dirt = texture2D(tDirt, uv * vec2(1.0, 1.0)).rgb;
        col = mix(col, bloom, uBloom) + bloom * dirt * uDirt * 0.06;
        col += uFlash * vec3(1.0, 0.8, 0.6) * 0.3;
        col *= uExposure;
        // white balance / split tone in linear
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        vec3 shadowTint = vec3(0.92, 1.0, 1.1);
        vec3 highTint = vec3(1.06, 1.0, 0.92);
        col *= mix(shadowTint, highTint, smoothstep(0.0, 0.6, l));
        col = aces(col);
        // saturation & contrast
        float g = dot(col, vec3(0.2126, 0.7152, 0.0722));
        float sat = uSat * (1.0 - uLowHealth * 0.7);
        col = mix(vec3(g), col, sat);
        col = clamp((col - 0.5) * 1.04 + 0.5, 0.0, 1.0);
        // vignette
        float vig = 1.0 - uVignette * smoothstep(0.15, 0.9, r2 * 1.6);
        vig *= 1.0 - uAds * 0.25 * smoothstep(0.1, 0.6, r2 * 2.0);
        col *= vig;
        // damage
        float edge = smoothstep(0.2, 0.75, r2 * 2.2);
        col = mix(col, vec3(0.45, 0.02, 0.01), edge * clamp(uDamage, 0.0, 1.0) * 0.75);
        col = mix(col, col * vec3(1.0, 0.6, 0.6), uLowHealth * edge * (0.6 + 0.4 * sin(uTime * 6.0)));
        // grain
        float n = h(gl_FragCoord.xy + fract(uTime * 13.37) * 1000.0) - 0.5;
        col += n * uGrain * smoothstep(0.0, 0.25, g) * (1.0 - g * 0.5);
        vec3 o = toSRGB(clamp(col, 0.0, 1.0));
        o += (h(gl_FragCoord.xy * 1.7 + 3.1) - 0.5) / 255.0;
        gl_FragColor = vec4(o, 1.0);
      }`, {
      tHdr: { value: this.hdrRT.texture }, tBloom: { value: this.bloomRTs[0].texture }, tDirt: { value: this.lensDirt },
      uExposure: { value: 1 }, uBloom: { value: 0.05 }, uDirt: { value: 1 }, uVignette: { value: 0.3 }, uGrain: { value: 0.03 },
      uCA: { value: 0.002 }, uTime: this.time, uDamage: { value: 0 }, uFlash: { value: 0 }, uSat: { value: 1 }, uLowHealth: { value: 0 },
      uAspect: { value: 1.7 }, uAds: { value: 0 },
    });
  }

  setSize(w, h) {
    this.w = w; this.h = h;
    this.sceneRT.setSize(w, h);
    this.hdrRT.setSize(w, h);
    const fs = this.q.fogScale;
    this.fogRT.setSize(Math.max(2, Math.floor(w * fs)), Math.max(2, Math.floor(h * fs)));
    let bw = w, bh = h;
    for (const rt of this.bloomRTs) {
      bw = Math.max(1, Math.floor(bw / 2)); bh = Math.max(1, Math.floor(bh / 2));
      rt.setSize(bw, bh);
    }
  }

  _pass(mat, target) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.quadScene, this.quadCam);
  }

  updateLightUniforms() {
    const u = this.fogMat.uniforms;
    const tmp = new THREE.Vector3();
    this.shadowSpots.forEach((s, i) => {
      u.uSPos.value[i].setFromMatrixPosition(s.matrixWorld);
      tmp.setFromMatrixPosition(s.target.matrixWorld);
      u.uSDir.value[i].copy(tmp).sub(u.uSPos.value[i]).normalize();
      const k = s.intensity * (s.userData.fogScale ?? 1);
      u.uSCol.value[i].set(s.color.r * k, s.color.g * k, s.color.b * k);
      u.uSCos.value[i].set(Math.cos(s.angle), Math.cos(s.angle * (1 - s.penumbra)), s.distance || 1000);
      u.uSMat.value[i].copy(s.shadow.matrix);
      u['uSMap' + i].value = s.shadow.map ? s.shadow.map.texture : null;
    });
    this.freeSpots.forEach((s, i) => {
      u.uFPos.value[i].setFromMatrixPosition(s.matrixWorld);
      tmp.setFromMatrixPosition(s.target.matrixWorld);
      u.uFDir.value[i].copy(tmp).sub(u.uFPos.value[i]).normalize();
      const k = s.visible ? s.intensity * (s.userData.fogScale ?? 1) : 0;
      u.uFCol.value[i].set(s.color.r * k, s.color.g * k, s.color.b * k);
      u.uFCos.value[i].set(Math.cos(s.angle), Math.cos(s.angle * (1 - s.penumbra)));
    });
    this.points.forEach((p, i) => {
      u.uPPos.value[i].setFromMatrixPosition(p.matrixWorld);
      const k = p.visible ? p.intensity * (p.userData.fogScale ?? 1) : 0;
      u.uPCol.value[i].set(p.color.r * k, p.color.g * k, p.color.b * k);
    });
  }

  render(scene, camera, refl, reflHidden, dt) {
    const r = this.renderer;
    const P = this.params;
    this.time.value += dt;
    this.frame = (this.frame || 0) + 1;
    if (this.frame % (this.q.shadowInterval || 1) === 0 || this.frame < 4) r.shadowMap.needsUpdate = true;
    if (refl) refl.update(scene, camera, reflHidden);

    // 1. scene
    r.setRenderTarget(this.sceneRT);
    r.clear();
    r.render(scene, camera);

    // 2. volumetric fog
    const fu = this.fogMat.uniforms;
    fu.uInvProj.value.copy(camera.projectionMatrixInverse);
    fu.uCamWorld.value.copy(camera.matrixWorld);
    fu.uCamPos.value.setFromMatrixPosition(camera.matrixWorld);
    fu.uNear.value = camera.near; fu.uFar.value = camera.far;
    fu.uDensity.value = P.fogDensity; fu.uFalloff.value = P.fogFalloff;
    fu.uFrame.value = (fu.uFrame.value + 1) % 64;
    this.updateLightUniforms();
    this._pass(this.fogMat, this.fogRT);

    // 3. composite
    const cu = this.compositeMat.uniforms;
    cu.uFogSize.value.set(this.fogRT.width, this.fogRT.height);
    cu.uNear.value = camera.near; cu.uFar.value = camera.far;
    this._pass(this.compositeMat, this.hdrRT);

    // 4. bloom
    let src = this.hdrRT;
    const du = this.downMat.uniforms;
    for (let i = 0; i < this.bloomRTs.length; i++) {
      du.tSrc.value = src.texture;
      du.uTexel.value.set(1 / src.width, 1 / src.height);
      du.uKaris.value = i === 0 ? 1 : 0;
      this._pass(this.downMat, this.bloomRTs[i]);
      src = this.bloomRTs[i];
    }
    const uu = this.upMat.uniforms;
    for (let i = this.bloomRTs.length - 1; i > 0; i--) {
      const s = this.bloomRTs[i];
      uu.tSrc.value = s.texture;
      uu.uTexel.value.set(1 / s.width, 1 / s.height);
      r.autoClear = false;
      this._pass(this.upMat, this.bloomRTs[i - 1]);
      r.autoClear = true;
    }

    // 5. final
    const f = this.finalMat.uniforms;
    f.uExposure.value = P.exposure; f.uBloom.value = P.bloom; f.uDirt.value = P.dirt;
    f.uVignette.value = P.vignette; f.uGrain.value = P.grain; f.uCA.value = P.ca;
    f.uDamage.value = P.damage; f.uFlash.value = P.flash; f.uSat.value = P.saturation; f.uLowHealth.value = P.lowHealth;
    f.uAspect.value = this.w / this.h; f.uAds.value = P.ads;
    this._pass(this.finalMat, null);
  }
}
