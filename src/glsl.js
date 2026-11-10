// Shared GLSL snippets: hashing, tileable (periodic) noise, fbm, voronoi.
export const NOISE_GLSL = /* glsl */`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float hash13(vec3 p3){ p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }

vec2 pmod(vec2 c, vec2 per){ return mod(c, per); }
vec2 grad2(vec2 c){ float a = hash12(c) * 6.2831853; return vec2(cos(a), sin(a)); }

// periodic gradient noise, approx range [-0.7, 0.7]
float gnoise(vec2 p, vec2 per){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
  float a = dot(grad2(pmod(i, per)), f);
  float b = dot(grad2(pmod(i+vec2(1.,0.), per)), f-vec2(1.,0.));
  float c = dot(grad2(pmod(i+vec2(0.,1.), per)), f-vec2(0.,1.));
  float d = dot(grad2(pmod(i+vec2(1.,1.), per)), f-vec2(1.,1.));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
// periodic value noise [0,1]
float vnoise(vec2 p, vec2 per){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  float a = hash12(pmod(i, per));
  float b = hash12(pmod(i+vec2(1.,0.), per));
  float c = hash12(pmod(i+vec2(0.,1.), per));
  float d = hash12(pmod(i+vec2(1.,1.), per));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
// fbm over uv in [0,1] with base frequency (tileable). returns ~[-1,1]
float fbm(vec2 uv, vec2 freq, int oct){
  float s = 0.0, a = 0.5, norm = 0.0;
  vec2 per = freq; vec2 p = uv * freq;
  for(int i = 0; i < 9; i++){
    if(i >= oct) break;
    s += a * gnoise(p + float(i)*17.31, per);
    norm += a;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return s / norm * 1.6;
}
float fbmv(vec2 uv, vec2 freq, int oct){
  float s = 0.0, a = 0.5, norm = 0.0;
  vec2 per = freq; vec2 p = uv * freq;
  for(int i = 0; i < 9; i++){
    if(i >= oct) break;
    s += a * vnoise(p + float(i)*31.7, per);
    norm += a;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return s / norm;
}
float ridged(vec2 uv, vec2 freq, int oct){
  float s = 0.0, a = 0.5, norm = 0.0;
  vec2 per = freq; vec2 p = uv * freq;
  for(int i = 0; i < 8; i++){
    if(i >= oct) break;
    float n = 1.0 - abs(gnoise(p + float(i)*9.1, per) * 1.4);
    s += a * n * n;
    norm += a;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return s / norm;
}
// periodic voronoi: x=F1, y=F2, z=cell random, w = edge distance approx
vec4 voronoi(vec2 uv, vec2 freq, float jitter){
  vec2 p = uv * freq;
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0; vec2 id = vec2(0.0); vec2 mr = vec2(0.0);
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){
    vec2 g = vec2(float(x), float(y));
    vec2 c = pmod(i+g, freq);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jitter;
    vec2 r = g + o - f;
    float d = dot(r,r);
    if(d < d1){ d2 = d1; d1 = d; id = c; mr = r; } else if(d < d2){ d2 = d; }
  }
  // accurate border distance (second pass)
  float md = 8.0;
  for(int y=-2;y<=2;y++) for(int x=-2;x<=2;x++){
    vec2 g = vec2(float(x), float(y));
    vec2 c = pmod(i+g, freq);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jitter;
    vec2 r = g + o - f;
    if(dot(mr-r,mr-r) > 0.00001) md = min(md, dot(0.5*(mr+r), normalize(r-mr)));
  }
  return vec4(sqrt(d1), sqrt(d2), hash12(id + 0.37), md);
}
// cheap periodic voronoi: x=F1, y=F2, z=cell random
vec3 voro(vec2 uv, vec2 freq, float jitter){
  vec2 p = uv * freq;
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0; vec2 id = vec2(0.0);
  for(int y=-1;y<=1;y++) for(int x=-1;x<=1;x++){
    vec2 g = vec2(float(x), float(y));
    vec2 c = pmod(i+g, freq);
    vec2 o = 0.5 + (hash22(c) - 0.5) * jitter;
    vec2 r = g + o - f;
    float d = dot(r,r);
    if(d < d1){ d2 = d1; d1 = d; id = c; } else if(d < d2){ d2 = d; }
  }
  return vec3(sqrt(d1), sqrt(d2), hash12(id + 0.37));
}
float sat(float x){ return clamp(x, 0.0, 1.0); }
float remap(float x, float a, float b){ return sat((x - a) / (b - a)); }
`;
