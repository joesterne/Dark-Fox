// Procedural audio: everything is synthesized with WebAudio (no sample files).
export class Audio {
  constructor() {
    this.ctx = null;
    this.ready = false;
  }

  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain();
    this.master.gain.value = 0.8;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 10; comp.ratio.value = 4; comp.attack.value = 0.003; comp.release.value = 0.25;
    this.master.connect(comp); comp.connect(ctx.destination);
    // outdoor reverb (synthetic impulse: early slap off warehouse + diffuse tail)
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.6, 2.2);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.55;
    this.reverbSend.connect(this.reverb); this.reverb.connect(this.master);
    this.noiseBuf = this._noise(2.0);
    this.brownBuf = this._brown(4.0);
    this.listener = ctx.listener;
    this._ambience();
    this.ready = true;
  }

  _noise(sec) {
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * sec, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  _brown(sec) {
    const b = this.ctx.createBuffer(2, this.ctx.sampleRate * sec, this.ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c); let last = 0;
      for (let i = 0; i < d.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
    }
    return b;
  }
  _impulse(sec, decay) {
    const rate = this.ctx.sampleRate, len = Math.floor(rate * sec);
    const b = this.ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / rate;
        let v = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay) * 0.5;
        // discrete echoes (warehouse wall, containers)
        for (const [et, ea] of [[0.09, 0.7], [0.17, 0.45], [0.31, 0.35], [0.52, 0.2]]) {
          const dt = t - et - c * 0.007;
          if (dt > 0 && dt < 0.02) v += (Math.random() * 2 - 1) * ea * (1 - dt / 0.02);
        }
        d[i] = v * (t < 0.01 ? t / 0.01 : 1);
      }
    }
    return b;
  }

  _src(buf, loop = false) { const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = loop; return s; }
  _env(g, t, a, peak, d, sustain = 0) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain), t + a + d);
  }
  _panner(pos) {
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 2; p.rolloffFactor = 1.2; p.maxDistance = 200;
    p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z;
    return p;
  }
  _out(node, pos, wet = 0.4) {
    let n = node;
    if (pos) { const p = this._panner(pos); n.connect(p); n = p; }
    n.connect(this.master);
    if (wet > 0) { const s = this.ctx.createGain(); s.gain.value = wet; n.connect(s); s.connect(this.reverbSend); }
  }

  setListener(cam) {
    if (!this.ready) return;
    const L = this.listener, t = this.ctx.currentTime;
    const e = cam.matrixWorld.elements;
    if (L.positionX) {
      L.positionX.setTargetAtTime(e[12], t, 0.02); L.positionY.setTargetAtTime(e[13], t, 0.02); L.positionZ.setTargetAtTime(e[14], t, 0.02);
      L.forwardX.setTargetAtTime(-e[8], t, 0.02); L.forwardY.setTargetAtTime(-e[9], t, 0.02); L.forwardZ.setTargetAtTime(-e[10], t, 0.02);
      L.upX.setTargetAtTime(e[4], t, 0.02); L.upY.setTargetAtTime(e[5], t, 0.02); L.upZ.setTargetAtTime(e[6], t, 0.02);
    } else {
      L.setPosition(e[12], e[13], e[14]); L.setOrientation(-e[8], -e[9], -e[10], e[4], e[5], e[6]);
    }
  }

  _ambience() {
    const ctx = this.ctx;
    // rain: broadband hiss + mid patter + low rumble
    const hiss = this._src(this.noiseBuf, true);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 900;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 7000;
    const hg = ctx.createGain(); hg.gain.value = 0.085;
    hiss.connect(hp); hp.connect(lp); lp.connect(hg); hg.connect(this.master);
    hiss.start();
    const rumble = this._src(this.brownBuf, true);
    const rl = ctx.createBiquadFilter(); rl.type = 'lowpass'; rl.frequency.value = 280;
    const rg = ctx.createGain(); rg.gain.value = 0.35;
    rumble.connect(rl); rl.connect(rg); rg.connect(this.master);
    rumble.start();
    // patter: random droplet ticks
    this._patter();
    // neon buzz (spatial, at the sign)
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 120;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 240;
    const bf = ctx.createBiquadFilter(); bf.type = 'bandpass'; bf.frequency.value = 900; bf.Q.value = 2;
    const g = ctx.createGain(); g.gain.value = 0.012;
    o.connect(bf); o2.connect(bf); bf.connect(g);
    this._out(g, { x: 5, y: 6.5, z: -21 }, 0.0);
    o.start(); o2.start();
    this.neonGain = g;
    // distant ship horn now and then
    const horn = () => {
      if (!this.ctx) return;
      const t = ctx.currentTime;
      const og = ctx.createGain();
      const lpf = ctx.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 400;
      for (const f of [73, 110, 146]) {
        const os = ctx.createOscillator(); os.type = 'sawtooth'; os.frequency.value = f;
        os.connect(lpf); os.start(t); os.stop(t + 4.5);
      }
      lpf.connect(og);
      this._env(og, t, 0.6, 0.025, 3.8);
      this._out(og, { x: 200, y: 10, z: 80 }, 0.8);
      setTimeout(horn, 40000 + Math.random() * 40000);
    };
    setTimeout(horn, 15000);
  }

  _patter() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const s = this._src(this.noiseBuf);
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2000 + Math.random() * 5000; bp.Q.value = 8;
      const g = ctx.createGain();
      const tt = t + Math.random() * 0.2;
      this._env(g, tt, 0.001, 0.02 + Math.random() * 0.05, 0.03);
      s.connect(bp); bp.connect(g); g.connect(this.master);
      s.start(tt, Math.random() * 1.5, 0.06);
    }
    setTimeout(() => this._patter(), 200);
  }

  gunshot() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const pitch = 0.92 + Math.random() * 0.16;
    // crack
    const n = this._src(this.noiseBuf);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1200;
    const g = ctx.createGain(); this._env(g, t, 0.0008, 0.9, 0.06);
    n.playbackRate.value = pitch;
    n.connect(hp); hp.connect(g);
    this._out(g, null, 0.9);
    n.start(t, Math.random(), 0.2);
    // body
    const n2 = this._src(this.noiseBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(3500, t); lp.frequency.exponentialRampToValueAtTime(300, t + 0.25);
    const g2 = ctx.createGain(); this._env(g2, t, 0.001, 1.0, 0.3);
    n2.connect(lp); lp.connect(g2);
    this._out(g2, null, 1.0);
    n2.start(t, Math.random(), 0.5);
    // thump
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(140 * pitch, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.15);
    const g3 = ctx.createGain(); this._env(g3, t, 0.002, 0.9, 0.18);
    o.connect(g3); this._out(g3, null, 0.2);
    o.start(t); o.stop(t + 0.3);
    // mechanical clack
    const c = this._src(this.noiseBuf);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 5;
    const g4 = ctx.createGain(); this._env(g4, t + 0.025, 0.001, 0.25, 0.03);
    c.connect(bp); bp.connect(g4); this._out(g4, null, 0.05);
    c.start(t + 0.025, Math.random(), 0.06);
  }

  dryFire() { this._click(0.3, 2500); }
  click() { this._click(0.2, 4000); }
  _click(v, f) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const c = this._src(this.noiseBuf);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = 6;
    const g = ctx.createGain(); this._env(g, t, 0.001, v, 0.03);
    c.connect(bp); bp.connect(g); this._out(g, null, 0.1);
    c.start(t, Math.random(), 0.05);
  }

  reloadEvent(kind) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const seq = { magOut: [[0, 1800, 0.35], [0.05, 900, 0.25]], magIn: [[0, 1200, 0.5], [0.04, 3000, 0.4], [0.06, 600, 0.3]], bolt: [[0, 2600, 0.4], [0.12, 1500, 0.55], [0.16, 3500, 0.35]] }[kind] || [];
    for (const [dt, f, v] of seq) {
      const c = this._src(this.noiseBuf);
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = 4;
      const g = ctx.createGain(); this._env(g, t + dt, 0.001, v, 0.05);
      c.connect(bp); bp.connect(g); this._out(g, null, 0.15);
      c.start(t + dt, Math.random(), 0.08);
    }
  }

  shellClink(pos, n) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    for (const f of [3900, 6100, 8800]) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * (0.95 + Math.random() * 0.1);
      const g = ctx.createGain(); this._env(g, t, 0.001, 0.03 / (n + 1), 0.12);
      o.connect(g); this._out(g, pos, 0.1);
      o.start(t); o.stop(t + 0.2);
    }
  }

  footstep(intensity, pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._src(this.noiseBuf);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 700 + Math.random() * 500; bp.Q.value = 1.2;
    const g = ctx.createGain(); this._env(g, t, 0.004, 0.12 + intensity * 0.12, 0.09);
    s.connect(bp); bp.connect(g); this._out(g, null, 0.1);
    s.start(t, Math.random(), 0.15);
    // splash
    const s2 = this._src(this.noiseBuf);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 3000;
    const g2 = ctx.createGain(); this._env(g2, t + 0.02, 0.01, 0.05 + intensity * 0.05, 0.15);
    s2.connect(hp); hp.connect(g2); this._out(g2, null, 0.05);
    s2.start(t + 0.02, Math.random(), 0.2);
  }
  jump() { this.footstep(0.6); }
  land(v) { this.footstep(0.6 + v); }

  hitMarker(kill) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = kill ? 1400 : 2200;
    const g = ctx.createGain(); this._env(g, t, 0.001, 0.08, kill ? 0.25 : 0.05);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + 0.3);
  }

  hitMetal(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    for (const f of [1800, 2700, 4100]) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * (0.9 + Math.random() * 0.2);
      const g = ctx.createGain(); this._env(g, t, 0.001, 0.08, 0.15);
      o.connect(g); this._out(g, pos, 0.3); o.start(t); o.stop(t + 0.2);
    }
  }

  impact(pos, surface) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._src(this.noiseBuf);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = surface === 'metal' ? 3000 : surface === 'wood' ? 900 : 1600; bp.Q.value = 2;
    const g = ctx.createGain(); this._env(g, t, 0.001, 0.25, 0.08);
    s.connect(bp); bp.connect(g); this._out(g, pos, 0.4);
    s.start(t, Math.random(), 0.1);
    if (surface === 'metal' && Math.random() < 0.5) this.hitMetal(pos);
  }

  droneHum() {
    if (!this.ready) return null;
    const ctx = this.ctx;
    const out = ctx.createGain(); out.gain.value = 0;
    const filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = 600; filt.Q.value = 0.8;
    const oscs = [];
    for (const [f, type, a] of [[148, 'sawtooth', 0.5], [151, 'sawtooth', 0.5], [296, 'triangle', 0.3], [445, 'sawtooth', 0.15]]) {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = a;
      o.connect(g); g.connect(filt); o.start(); oscs.push(o);
    }
    const n = this._src(this.noiseBuf, true);
    const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 2400; nf.Q.value = 0.6;
    const ng = ctx.createGain(); ng.gain.value = 0.25;
    n.connect(nf); nf.connect(ng); ng.connect(filt); n.start();
    filt.connect(out);
    const pan = this._panner({ x: 0, y: 0, z: 0 });
    pan.refDistance = 3; pan.rolloffFactor = 1.6;
    out.connect(pan); pan.connect(this.master);
    out.gain.setTargetAtTime(0.11, ctx.currentTime, 0.5);
    return {
      update: (pos, vel, hostile) => {
        const t = ctx.currentTime;
        pan.positionX.setTargetAtTime(pos.x, t, 0.05); pan.positionY.setTargetAtTime(pos.y, t, 0.05); pan.positionZ.setTargetAtTime(pos.z, t, 0.05);
        const sp = Math.hypot(vel.x, vel.y, vel.z);
        const k = 1 + sp * 0.04 + (hostile ? 0.08 : 0);
        oscs.forEach((o, i) => o.frequency.setTargetAtTime([148, 151, 296, 445][i] * k, t, 0.1));
      },
      stop: () => { out.gain.setTargetAtTime(0, ctx.currentTime, 0.05); setTimeout(() => { oscs.forEach(o => o.stop()); n.stop(); }, 500); },
    };
  }

  droneAlert(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const o = ctx.createOscillator(); o.type = 'square';
      o.frequency.setValueAtTime(880, t + i * 0.16); o.frequency.setValueAtTime(1320, t + i * 0.16 + 0.07);
      const g = ctx.createGain(); this._env(g, t + i * 0.16, 0.002, 0.06, 0.14);
      o.connect(g); this._out(g, pos, 0.3); o.start(t + i * 0.16); o.stop(t + i * 0.16 + 0.16);
    }
  }

  droneShot(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(1600, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.18);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 3500;
    const g = ctx.createGain(); this._env(g, t, 0.002, 0.35, 0.2);
    o.connect(f); f.connect(g); this._out(g, pos, 0.6); o.start(t); o.stop(t + 0.25);
    const s = this._src(this.noiseBuf);
    const g2 = ctx.createGain(); this._env(g2, t, 0.001, 0.2, 0.08);
    s.connect(g2); this._out(g2, pos, 0.5); s.start(t, Math.random(), 0.1);
  }

  whizz(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._src(this.noiseBuf);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 3;
    bp.frequency.setValueAtTime(4000, t); bp.frequency.exponentialRampToValueAtTime(900, t + 0.2);
    const g = ctx.createGain(); this._env(g, t, 0.03, 0.25, 0.18);
    s.connect(bp); bp.connect(g); this._out(g, pos, 0.1); s.start(t, Math.random(), 0.3);
  }

  playerHurt() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.2);
    const g = ctx.createGain(); this._env(g, t, 0.005, 0.6, 0.25);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.3);
    const s = this._src(this.noiseBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g2 = ctx.createGain(); this._env(g2, t, 0.002, 0.3, 0.12);
    s.connect(lp); lp.connect(g2); g2.connect(this.master); s.start(t, Math.random(), 0.2);
  }

  explosion(pos) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._src(this.noiseBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(6000, t); lp.frequency.exponentialRampToValueAtTime(120, t + 1.5);
    const g = ctx.createGain(); this._env(g, t, 0.003, 1.4, 1.8);
    s.connect(lp); lp.connect(g); this._out(g, pos, 1.2);
    s.start(t, 0, 2.0);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(25, t + 0.8);
    const g2 = ctx.createGain(); this._env(g2, t, 0.005, 1.4, 0.9);
    o.connect(g2); this._out(g2, pos, 0.3); o.start(t); o.stop(t + 1.0);
    // debris rattle
    for (let i = 0; i < 8; i++) {
      const tt = t + 0.5 + Math.random() * 1.2;
      const c = this._src(this.noiseBuf);
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1500 + Math.random() * 3000; bp.Q.value = 5;
      const g3 = ctx.createGain(); this._env(g3, tt, 0.001, 0.12, 0.06);
      c.connect(bp); bp.connect(g3); this._out(g3, pos, 0.3); c.start(tt, Math.random(), 0.08);
    }
  }

  setAlarm(level) {
    if (!this.ready) return;
    if (!this._alarm) {
      const ctx = this.ctx;
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 660;
      const lfo = ctx.createOscillator(); lfo.frequency.value = 1.6;
      const lg = ctx.createGain(); lg.gain.value = 220;
      lfo.connect(lg); lg.connect(o.frequency);
      const g = ctx.createGain(); g.gain.value = 0;
      o.connect(g);
      this._out(g, { x: -5, y: 9, z: -21 }, 0.8);
      o.start(); lfo.start();
      this._alarm = g;
    }
    this._alarm.gain.setTargetAtTime(level * 0.05, this.ctx.currentTime, 0.4);
  }

  missionComplete() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    [523, 659, 784, 1046].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain(); this._env(g, t + i * 0.12, 0.01, 0.12, 0.8);
      o.connect(g); this._out(g, null, 0.6); o.start(t + i * 0.12); o.stop(t + i * 0.12 + 1);
    });
  }
}
