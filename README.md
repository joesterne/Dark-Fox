# DARK FOX

A small, single-level first-person shooter that runs in the browser. The focus is on lighting and image quality rather than scope. The game has no image, model or audio files: every texture, mesh and sound is generated procedurally when it loads.

> 02:14, heavy rain over the Harrowgate container yard. Take down six autonomous security drones, then get out through the service door under the neon sign.

## Play

The repository ships with a pre-built bundle (`dist/darkfox.js`), so you can just open **`index.html`** in a desktop browser. It runs straight from `file://` with no web server needed.

To rebuild from source:

```bash
npm install
npm run build      # bundles src/ -> dist/darkfox.js
npm run serve      # optional: http://localhost:8080
```

Use a desktop browser with WebGL2 support (Chrome, Edge, Firefox or Safari 17+) and a dedicated or recent integrated GPU. You can pick **Low / Medium / High / Ultra** in the main menu. Press **F3** in-game for an FPS counter.

| Action | Key |
| --- | --- |
| Move | `W A S D` |
| Aim / look | Mouse |
| Fire (full auto) | Left mouse |
| Aim down sights | Right mouse |
| Sprint / Crouch / Jump | `Shift` / `C` / `Space` |
| Reload | `R` |
| Weapon light | `F` |
| Pause | `Esc` |

## What's under the hood

The game is built on three.js r170 and bundled with esbuild into one IIFE file.

**Rendering pipeline** (`src/pipeline.js`)
- HDR (half-float) scene render with 4× MSAA and a resolved depth texture
- **Ray-marched volumetric fog** at half resolution. It samples the real shadow maps of every shadow-casting light, so lamp light shafts are blocked by containers, fences and poles. It also includes the drone searchlights, the weapon light, the muzzle flash and the neon. The fog density is exponential with height and is broken up by a drifting 3D noise texture. A depth-aware bilateral upsample keeps object edges sharp.
- Physically based bloom using a 6-level mip chain, a 13-tap downsample with a Karis average and a tent upsample, plus procedural lens dirt
- ACES filmic tonemapping, split-tone grading, subtle chromatic aberration, vignette, film grain and dithering
- Damage, low-health and explosion-flash screen effects

**Wet world** (`src/wet.js`, `src/materials.js`)
- A **planar reflection** of the whole scene: an oblique-clipped mirror camera renders into a mip-mapped HDR target. Wet asphalt samples it with roughness-based blur and vertical streaking, and puddles get a sharp, rippled mirror.
- Animated procedural rain ripples on the ground and in puddles, plus a separate wave model for the harbour water
- A global "rain-wet" shader patch: surfaces that face upward get darker and glossier, and sheets of running water slide down walls

**Procedural PBR textures** (`src/texgen.js`)
- Each surface is a GLSL function that the GPU bakes into tileable, mip-mapped albedo, normal and ORM maps when the game loads. The surfaces are asphalt (aggregate, cracks and tar seals), board-formed concrete, brick, corrugated shipping-container steel with chipped paint and rust streaks, galvanised cladding, diamond plate, timber, painted steel, polymer stipple, fabric, carbon fibre, chain link and bullet-hole decals.

**Lighting**
- 7 shadow-casting spot lights: sodium street lamps, warehouse floodlights and the door lamp
- Neon sign point lights, unshadowed quay floods, per-drone searchlights, and dynamic muzzle, plasma and explosion lights
- An image-based ambient term from a PMREM capture of the level itself

**Gameplay** (`src/player.js`, `src/weapon.js`, `src/drones.js`, `src/fx.js`)
- Player capsule collision against AABBs, with step-up, crouch, sprint, jump, head bob, landing dip and camera shake
- A procedural carbine viewmodel with gloved hands, built from extruded and bevelled parts. It has a holographic sight with a reticle, its own FOV and depth range (so it never clips into walls), sway, bob, recoil springs, ADS, a sprint pose, and a reload animation with the magazine leaving the gun (the empty reload adds a charging-handle pull).
- Hitscan with spread and bloom, tracers, ejected brass with physics, a muzzle flash and smoke, impact sparks and dust, and decals
- Drone AI with patrol, alert, attack (orbit and strafe), search and reinforcement states. Drones have line-of-sight checks, searchlights, plasma bolts you can dodge, near-miss "whizz" sounds, a critical weak spot (the camera eye), damage smoke, and explosions with fireballs, debris and light flashes.

**Audio** (`src/audio.js`): all sound is synthesised with WebAudio. That covers layered gunshots run through a synthetic outdoor reverb with slap-back echoes, rain ambience, neon buzz, HRTF-spatialised drone rotors, alarms, footsteps on wet ground, brass clinks, reload foley and explosions.

## Project layout

```
index.html, style.css     menus + HUD
src/main.js               boot, loading, input, game loop, mission flow
src/world.js              world assembly, environment capture
src/pipeline.js           HDR post pipeline + volumetric fog
src/texgen.js, glsl.js    GPU procedural texture synthesis
src/materials.js          material library + wet-surface patch
src/level.js, geo.js      level construction, static batching, colliders
src/wet.js                planar reflections, wet ground, water
src/sky.js                sky dome, skyline, harbour cranes
src/weapon.js             viewmodel + firing
src/player.js             movement + collision
src/drones.js             enemies
src/fx.js                 particles, rain, decals, brass, debris
src/audio.js              procedural audio
tools/                    headless screenshot / test harnesses (dev only)
```

## License

MIT
