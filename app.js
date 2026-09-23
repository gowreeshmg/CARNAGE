/* ═══════════════════════════════════════════════════
   CARNAGE — Main Application Script v3
   Cinematic Hero | Image Showcase | 3D Tilt Cards
   AI Category Section | No Emojis
   ═══════════════════════════════════════════════════ */

'use strict';

// ─────────────────────────────────────────────────────
// CAR DATA (7 cars — BYD eMAX 7 added)
// ─────────────────────────────────────────────────────
const CARS = [  {
    id: 'byd-sealion', name: 'BYD Sealion', index: '01 / 07',
    tagline: 'The Intelligent Electric SUV',
    specs: { range: '500 km', accel: '4.5 s', ai: 'L2+ ADAS', compute: '60 TOPS' },
    processor: 'BYD DiPilot 300',
    algorithms: [
      { name: 'YOLO v8 Object Detection',
        desc: 'Detects 80+ object classes in real-time at 60fps with 94% mAP; identifies pedestrians, vehicles, cyclists and traffic signs simultaneously.' },
      { name: "Bird's Eye View Transformer",
        desc: 'Converts 8 surround-camera feeds into a unified top-down 3D spatial map using attention-based neural transformer blocks.' },
      { name: 'Kalman Filter Tracking',
        desc: 'Predicts object trajectories frame-to-frame using state-space estimation; maintains consistent ID across occlusions at 0.3ms latency.' },
      { name: 'Velocity-Aware Planner',
        desc: 'Gradient-descent motion planner computes smooth acceleration/braking curves by solving a convex optimisation problem at 50Hz.' },
    ],
    sensors: [
      { type: 'LiDAR',      spec: '12-beam solid-state\n200m range @ 25Hz' },
      { type: 'Cameras',    spec: '8 x 5MP surround\n360 deg FOV coverage' },
      { type: 'Radar',      spec: '5 mm-wave units\n250m forward range' },
      { type: 'Ultrasonic', spec: '12 sensors\n5m close-range zone' },
    ],
    features: ["Bird's Eye View Map", 'Sensor Fusion', 'Velocity Planning'],
    featureDesc: ['Multi-camera unified spatial model', 'LiDAR + Camera + Radar fusion', '50Hz smooth motion computation'],
  },
  {
    id: 'byd-seal', name: 'BYD Seal', index: '02 / 07',
    tagline: 'Hydrodynamic AI Performance Sedan',
    specs: { range: '700 km', accel: '3.8 s', ai: 'L2+ Advanced', compute: '80 TOPS' },
    processor: 'Mobileye EyeQ5H',
    algorithms: [
      { name: 'EyeQ SuperVision',
        desc: "Mobileye's 12-camera semantic parsing pipeline producing drivable area, lanes and full 360 deg free-space maps at camera frame rate." },
      { name: 'REM Mapping (HD Maps)',
        desc: 'Road Experience Management: crowdsources centimetre-precision map updates from fleet vehicles via 4G, keeping HD maps perpetually fresh.' },
      { name: 'Responsibility-Sensitive Safety (RSS)',
        desc: 'Formal mathematical safety model that defines safe following distances and lateral clearances, acting as a last-resort override layer.' },
      { name: 'True Redundancy',
        desc: 'Dual independent compute paths — if primary EyeQ5H fails, secondary path maintains L2 safety functions within 10ms failover time.' },
    ],
    sensors: [
      { type: 'Cameras',  spec: '11 surround cams\nUp to 120 deg wide FOV' },
      { type: 'Radar',    spec: '6 corner radars\nShort + long range fusion' },
      { type: 'LiDAR',   spec: '4-point solid-state\n150m @ 20Hz scan rate' },
      { type: 'GPS/IMU', spec: 'RTK + 6-axis IMU\n±10cm lane-level accuracy' },
    ],
    features: ['EyeQ SuperVision', 'RSS Safety Model', 'REM HD Mapping'],
    featureDesc: ['12-camera semantic scene parsing', 'Formal mathematical safety proof', 'Crowd-sourced centimetre HD maps'],
  },
  {
    id: 'byd-emax', name: 'BYD eMAX 7', index: '03 / 07',
    tagline: 'Intelligent Electric Family MPV',
    specs: { range: '530 km', accel: '4.8 s', ai: 'L2+ DiPilot', compute: '50 TOPS' },
    processor: 'BYD DiPilot 300',
    algorithms: [
      { name: 'Smart Door Collision AI',
        desc: 'Side cameras and ultrasonic sensors detect approaching cyclists or pedestrians while sliding doors are in motion; AI halts door travel within 80ms.' },
      { name: 'Child Occupant Safety Monitor',
        desc: 'Interior DMS infrared camera combined with a semi-supervised CNN detects unattended children in the cabin and triggers ventilation + alerts.' },
      { name: 'Auto Park with Obstacle Intelligence',
        desc: 'Fusion of 12 ultrasonic sensors and surround cameras builds a real-time parking-slot map; path planner solves the reverse-in manoeuvre in under 2 seconds.' },
      { name: 'Driver Fatigue Prediction',
        desc: 'LSTM network trained on steering micro-corrections, lane deviation history and eye-closure rate to predict fatigue 8 minutes before critical threshold.' },
    ],
    sensors: [
      { type: 'Cameras',    spec: '7 cameras\n360 deg AVM system' },
      { type: 'Radar',      spec: '5 radar units\nFront + 4 corner SRR' },
      { type: 'Ultrasonic', spec: '12 sensors\nAuto parking array' },
      { type: 'Interior',   spec: 'DMS camera\nOccupant monitor' },
    ],
    features: ['Door Safety AI', 'Child Occupant Monitor', 'Smart Auto Park'],
    featureDesc: ['80ms door collision halt system', 'Semi-supervised cabin detection', 'Real-time parking map solver'],
  },
  {
    id: 'bmw-x7', name: 'BMW X7', index: '04 / 07',
    tagline: 'Luxury Intelligence Redefined',
    specs: { range: '560 km', accel: '4.7 s', ai: 'L2+ iDrive 9', compute: '100 TOPS' },
    processor: 'NVIDIA Orin SoC',
    algorithms: [
      { name: 'Semantic Scene Graph',
        desc: 'Builds a relational graph of scene elements (cars, signs, roads) and their interactions, enabling context-aware behaviour prediction 3s ahead.' },
      { name: 'Transformer-based NLP (On-device LLM)',
        desc: "BMW's Hey BMW uses a compressed on-device large language model for natural commands, context memory and proactive route suggestions." },
      { name: 'Predictive Route AI',
        desc: 'Analyses driving history, traffic patterns and calendar data using LSTM networks to suggest optimal routes and pre-condition the cabin.' },
      { name: 'Gesture Recognition CNN',
        desc: '3D hand-gesture detection using a dedicated infrared ToF camera with a lightweight MobileNet CNN — 20ms response, 97% accuracy.' },
    ],
    sensors: [
      { type: 'Cameras',    spec: '6 optical + 1 infrared\nStereo + gesture ToF' },
      { type: 'Radar',      spec: '5 long-range radars\n250m adaptive cruise' },
      { type: 'Ultrasonic', spec: '12 parking sensors\nAutomatic parallel park' },
      { type: 'GPS/IMU',   spec: 'High-precision GNSS\n+ 9-axis inertial unit' },
    ],
    features: ['Scene Graph AI', 'On-Device LLM', 'Predictive Navigation'],
    featureDesc: ['Relational vehicle-scene reasoning', 'Natural language AI on-board', 'LSTM-powered route prediction'],
  },
  {
    id: 'range-rover-velar', name: 'Range Rover Velar', index: '05 / 07',
    tagline: 'Terrain Intelligence Beyond Limits',
    specs: { range: '480 km', accel: '5.1 s', ai: 'L2 Terrain AI', compute: '48 TOPS' },
    processor: 'JLR AI Core v3',
    algorithms: [
      { name: 'Terrain Response 3 CNN',
        desc: 'Convolutional classifier analyses ground texture, slope angle, wheel slip and suspension deflection to auto-select from 7 terrain profiles in 200ms.' },
      { name: 'ClearSight Ground View',
        desc: 'Stitches front-bumper cameras with a virtual underbody projection to show a live ground-level view through the bonnet on the infotainment screen.' },
      { name: 'Wade Sensing Algorithm',
        desc: 'Ultrasonic radar on door mirrors measures water depth continuously. AI triggers wade mode and raises suspension if depth exceeds 50cm threshold.' },
      { name: 'Driver Attention Monitor',
        desc: 'Infrared camera tracks eye openness, head pose and blink rate using a facial landmark CNN — alerts when drowsiness score exceeds threshold.' },
    ],
    sensors: [
      { type: 'Cameras',    spec: '8 cameras\nClearSight + 360 deg view' },
      { type: 'Radar',      spec: '4 short-range\n+ 1 forward long-range' },
      { type: 'Ultrasonic', spec: '12 + 2 wade sensors\nDoor-mirror mounted' },
      { type: 'Suspension', spec: '4-corner air springs\nAI-controlled ride height' },
    ],
    features: ['Terrain Classifier', 'Wade Sensing', 'ClearSight Vision'],
    featureDesc: ['7-terrain CNN auto-classification', 'Ultrasonic water depth AI', 'Virtual bonnet camera view'],
  },
  {
    id: 'tesla-model-y', name: 'Tesla Model Y', index: '06 / 07',
    tagline: 'Full Self-Driving Neural Network',
    specs: { range: '533 km', accel: '3.5 s', ai: 'FSD v13 (L3 Beta)', compute: '288 TOPS' },
    processor: 'Tesla FSD Chip HW4 (x2)',
    algorithms: [
      { name: 'Tesla Vision (Pure Camera)',
        desc: '8 cameras feed a unified space-time video transformer that processes 1.3 million frames per day of fleet data to improve in OTA updates. No LiDAR.' },
      { name: 'Occupancy Network',
        desc: 'Voxel-based 3D occupancy grid that predicts which regions of space are occupied — replaces traditional object detection with continuous spatial reasoning.' },
      { name: 'Neural Planner v2',
        desc: 'End-to-end neural network that takes raw camera data and outputs steering + throttle directly, bypassing all traditional rule-based planning.' },
      { name: 'Shadow Mode Fleet Learning',
        desc: 'Every Tesla silently runs FSD decisions in parallel with human driving; disagreements are flagged and uploaded to retrain the network — 5M+ training vehicles.' },
    ],
    sensors: [
      { type: 'Cameras',  spec: '8 x 5MP cameras\nForward trinocular + 5 wide' },
      { type: 'Compute',  spec: '2 x FSD HW4 chips\n288 TOPS combined peak' },
      { type: 'Ultrason', spec: 'None (removed HW4)\nPure vision-only system' },
      { type: 'OTA',      spec: '5G connectivity\nWeekly OTA model updates' },
    ],
    features: ['Pure Vision AI', 'Occupancy Grid', 'End-to-End Neural'],
    featureDesc: ['No LiDAR — cameras only system', '3D voxel space occupancy map', 'Raw pixels to steering output'],
  },
  {
    id: 'mg-cyberster', name: 'MG Cyberster', index: '07 / 07',
    tagline: 'Born Electric. Born Aggressive.',
    specs: { range: '501 km', accel: '3.2 s', ai: 'L2 Smart Pilot 3.0', compute: '40 TOPS' },
    processor: 'Horizon Robotics Journey 5',
    algorithms: [
      { name: 'MG Pilot 3.0 ADAS Suite',
        desc: 'Integrated stack of 15+ ADAS functions including IHC, LKA, LCA, FCTA, RCTA and Emergency Steering Assist, coordinated by a central safety arbiter.' },
      { name: 'AR HUD Projection Engine',
        desc: 'Real-time augmented reality heads-up display overlays navigation arrows, speed limits and hazard indicators onto the road plane at correct world-scale depth.' },
      { name: 'Adaptive Chassis AI',
        desc: 'Reads steering angle, lateral G-force and wheel speed at 1kHz; adjusts electronic dampers in 2ms to balance sport handling vs. comfort in real-time.' },
      { name: 'Smart Brake Prediction',
        desc: 'Forward radar + camera fusion estimates collision risk using Time-To-Collision (TTC) and triggers pre-charge of brake calipers 300ms before impact.' },
    ],
    sensors: [
      { type: 'Cameras',  spec: '5 cameras\nForward + 4 surround' },
      { type: 'Radar',    spec: '1 forward LRR\n+ 2 rear SRR units' },
      { type: 'AR HUD',   spec: 'Full-colour waveguide\n15 x 5 deg FOV overlay' },
      { type: 'Chassis',  spec: 'CDC dampers\n1kHz sensor sampling' },
    ],
    features: ['AR HUD Navigation', 'Chassis Adaptive AI', 'Smart Brake Predict'],
    featureDesc: ['World-scale AR road overlay', '1kHz real-time damper control', 'TTC collision pre-charge system'],
  },
];

// ─────────────────────────────────────────────────────
// GLOBALS
// ─────────────────────────────────────────────────────
let heroScene, heroCamera, heroRenderer;
let partScene, partCamera, partRenderer;
let radarCtx, radarAngle = 0;
let currentCarIdx = -1;
let clock;
let currentRenderId = 0;
const accordionStates = {}; // Track expanded state for each car

// ─────────────────────────────────────────────────────
// LOADER
// ─────────────────────────────────────────────────────
const LOADER_MSGS = [
  'Initializing Neural Engine',
  'Loading Sensor Arrays',
  'Calibrating AI Algorithms',
  'Compiling Fleet Data',
  'Warming Up Compute',
  'Ready'
];

function runLoader() {
  const bar   = document.getElementById('loaderBar');
  const label = document.getElementById('loaderLabel');
  const loader= document.getElementById('loader');
  let pct = 0;
  const iv = setInterval(() => {
    pct += Math.random() * 17 + 6;
    if (pct >= 100) { pct = 100; clearInterval(iv); }
    bar.style.width = pct + '%';
    label.textContent = LOADER_MSGS[Math.min(Math.floor(pct / 17), LOADER_MSGS.length - 1)];
    if (pct === 100) setTimeout(() => { loader.classList.add('hidden'); init(); }, 550);
  }, 130);
}

// ─────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────
function init() {
  clock = new THREE.Clock();
  initHeroScene();
  initParticleScene();
  initScrollLogic();
  initCarProgress();
  initCounters();
  initTechCards();
  initTiltCards();
  animateHero();
  animateParticles();
  showCar(0);

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
  document.getElementById('exploreBtn').addEventListener('click', () => {
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('navCTA').addEventListener('click', () => {
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
  });
}

// ─────────────────────────────────────────────────────
// HERO SCENE — Subtle Particle Overlay
// ─────────────────────────────────────────────────────
function initHeroScene() {
  const canvas = document.getElementById('heroCanvas');
  heroScene  = new THREE.Scene();
  heroCamera = new THREE.PerspectiveCamera(65, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  heroCamera.position.set(0, 0, 22);

  heroRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  heroRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  heroRenderer.setClearColor(0x000000, 0);

  // Stars/particles
  const starPos = new Float32Array(4500);
  for (let i = 0; i < 4500; i++) starPos[i] = (Math.random() - 0.5) * 90;
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xc8c8e0, size: 0.06, transparent: true, opacity: 0.35 }));
  heroScene.add(stars);
  heroScene.userData.stars = stars;

  // Floating nodes (subtle)
  const nodeGeo = new THREE.SphereGeometry(0.08, 6, 6);
  const nodeGroup = new THREE.Group();
  for (let i = 0; i < 40; i++) {
    const isCyan = i % 3 === 0;
    const mat = new THREE.MeshBasicMaterial({ color: isCyan ? 0x06b6d4 : 0x7c3aed, transparent: true, opacity: 0.6 });
    const mesh = new THREE.Mesh(nodeGeo, mat);
    const x = (Math.random() - 0.5) * 35;
    const y = (Math.random() - 0.5) * 22;
    const z = (Math.random() - 0.5) * 15 - 5;
    mesh.position.set(x, y, z);
    mesh.userData = { oy: y, speed: Math.random() * 0.4 + 0.15, phase: Math.random() * Math.PI * 2 };
    nodeGroup.add(mesh);
  }
  heroScene.add(nodeGroup);
  heroScene.userData.nodeGroup = nodeGroup;

  // Thin orbit rings
  const ringA = new THREE.Mesh(
    new THREE.TorusGeometry(4, 0.025, 8, 120),
    new THREE.MeshBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.5 })
  );
  ringA.position.set(7, 1, -6);
  ringA.rotation.x = Math.PI * 0.3;
  heroScene.add(ringA);
  heroScene.userData.ringA = ringA;

  const ringB = new THREE.Mesh(
    new THREE.TorusGeometry(4.5, 0.015, 6, 100),
    new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.35 })
  );
  ringB.position.copy(ringA.position);
  ringB.rotation.x = Math.PI * 0.55;
  ringB.rotation.y = Math.PI * 0.35;
  heroScene.add(ringB);
  heroScene.userData.ringB = ringB;

  window.addEventListener('resize', () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    heroCamera.aspect = w / h;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(w, h);
  });

  window.addEventListener('mousemove', e => {
    const mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    const my = (e.clientY / window.innerHeight - 0.5) * 2;
    heroScene.userData.mx = mx;
    heroScene.userData.my = my;
    
    const overlay = document.querySelector('.hero-overlay');
    if (overlay) {
      const rx = -my * 8;
      const ry = mx * 12;
      overlay.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
    }
  });
}

function animateHero() {
  requestAnimationFrame(animateHero);
  const t  = clock.getElapsedTime();
  const mx = heroScene.userData.mx || 0;
  const my = heroScene.userData.my || 0;
  const ng = heroScene.userData.nodeGroup;
  const ra = heroScene.userData.ringA;
  const rb = heroScene.userData.ringB;
  const st = heroScene.userData.stars;

  if (ng) {
    ng.rotation.y = t * 0.025 + mx * 0.06;
    ng.rotation.x = my * 0.03;
    ng.children.forEach(n => {
      n.position.y = n.userData.oy + Math.sin(t * n.userData.speed + n.userData.phase) * 0.55;
    });
  }
  if (ra) { ra.rotation.z = t * 0.15; ra.rotation.y = t * 0.08; }
  if (rb) { rb.rotation.x = t * 0.12; rb.rotation.z = -t * 0.06; }
  if (st) { st.rotation.y = t * 0.008; }

  heroCamera.position.x = Math.sin(t * 0.04) * 1.2 + mx * 0.4;
  heroCamera.position.y = Math.cos(t * 0.025) * 0.7 - my * 0.25;
  heroCamera.lookAt(0, 0, 0);
  heroRenderer.render(heroScene, heroCamera);
}

// ─────────────────────────────────────────────────────
// SCROLL LOGIC
// ─────────────────────────────────────────────────────
function initScrollLogic() {
  window.addEventListener('scroll', () => {
    const section     = document.getElementById('cars');
    const sTop        = section.getBoundingClientRect().top + window.scrollY;
    const totalScroll = section.scrollHeight - window.innerHeight;
    const scrolled    = window.scrollY - sTop;
    const progress    = Math.max(0, Math.min(1, scrolled / totalScroll));
    const carIdx      = Math.min(Math.floor(progress * CARS.length), CARS.length - 1);

    if (carIdx !== currentCarIdx) showCar(carIdx);
    document.querySelectorAll('.prog-dot').forEach((dot, i) => dot.classList.toggle('active', i === carIdx));
  }, { passive: true });
}

// ─────────────────────────────────────────────────────
// SHOW CAR
// ─────────────────────────────────────────────────────
function showCar(idx) {
  if (idx === currentCarIdx) return;
  currentCarIdx = idx;
  const data = CARS[idx];

  document.querySelectorAll('.car-slide').forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });

  updateHUD(data);
}

// ─────────────────────────────────────────────────────
// UPDATE HUD
// ─────────────────────────────────────────────────────
function updateHUD(data) {
  const animEl = (el, delay = 0) => {
    if (!el) return;
    el.classList.remove('visible');
    void el.offsetWidth;
    setTimeout(() => el.classList.add('visible'), delay);
  };

  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  animEl(document.getElementById('carIndex'), 20);   setTxt('carIndex', data.index);
  animEl(document.getElementById('carName'), 75);    setTxt('carName', data.name);
  animEl(document.getElementById('carTagline'), 125); setTxt('carTagline', data.tagline);
  animEl(document.getElementById('carSpecs'), 170);

  setTxt('specRange',   data.specs.range);
  setTxt('specAccel',   data.specs.accel);
  setTxt('specAI',      data.specs.ai);
  setTxt('specCompute', data.specs.compute);
  setTxt('processorBadge', data.processor);

  // Left Panel: AI Features
  const algoPanel = document.getElementById('aiAlgoPanel');
  if (accordionStates[data.id] && accordionStates[data.id].leftOpen) {
    algoPanel.classList.remove('collapsed');
  } else {
    algoPanel.classList.add('collapsed');
  }
  animEl(algoPanel, 200);
  const algoList = document.getElementById('algoList');
  algoList.innerHTML = '';
  
  currentRenderId++;
  const activeRenderId = currentRenderId;

  if (data.features) {
    data.features.forEach((feat, i) => {
      setTimeout(() => {
        if (currentRenderId !== activeRenderId) return;
        const item = document.createElement('div');
        item.className = 'algo-item';
        item.innerHTML = `<div class="algo-name">${feat}</div><div class="algo-desc">${data.featureDesc[i]}</div>`;
        algoList.appendChild(item);
        requestAnimationFrame(() => setTimeout(() => item.classList.add('visible'), 20));
      }, 250 + i * 85);
    });
  }

  // Right Panel: AI Algorithms (Replaces sensors)
  const sensorPanel = document.getElementById('sensorPanel');
  if (accordionStates[data.id] && accordionStates[data.id].rightOpen) {
    sensorPanel.classList.remove('collapsed');
  } else {
    sensorPanel.classList.add('collapsed');
  }
  animEl(sensorPanel, 215);
  const grid = document.getElementById('sensorGrid');
  grid.innerHTML = '';
  
  if (data.algorithms) {
    data.algorithms.forEach((algo, i) => {
      setTimeout(() => {
        if (currentRenderId !== activeRenderId) return;
        const item = document.createElement('div');
        item.className = 'algo-item';
        item.style.marginBottom = '8px';
        item.innerHTML = `<div class="algo-name" style="color:var(--cyan-bright);">${algo.name}</div><div class="algo-desc">${algo.desc}</div>`;
        grid.appendChild(item);
        requestAnimationFrame(() => setTimeout(() => item.classList.add('visible'), 20));
      }, 260 + i * 65);
    });
  }
}

// ─────────────────────────────────────────────────────
// PROGRESS DOTS
// ─────────────────────────────────────────────────────
function initCarProgress() {
  const wrap = document.getElementById('carProgress');
  CARS.forEach((car, i) => {
    const dot = document.createElement('div');
    dot.className = 'prog-dot' + (i === 0 ? ' active' : '');
    dot.title = car.name;
    dot.addEventListener('click', () => {
      const section = document.getElementById('cars');
      const sTop = section.getBoundingClientRect().top + window.scrollY;
      const totalScroll = section.scrollHeight - window.innerHeight;
      window.scrollTo({ top: sTop + (i / CARS.length) * totalScroll, behavior: 'smooth' });
    });
    wrap.appendChild(dot);
  });
}



// ─────────────────────────────────────────────────────
// PARTICLE SCENE (About)
// ─────────────────────────────────────────────────────
function initParticleScene() {
  const canvas = document.getElementById('particleCanvas');
  partScene  = new THREE.Scene();
  partCamera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
  partCamera.position.z = 18;
  partRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  partRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  partRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  partRenderer.setClearColor(0x000000, 0);

  const makeCloud = (color, count, size, opacity) => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 52;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({ color, size, transparent: true, opacity }));
  };

  const p1 = makeCloud(0x7c3aed, 1000, 0.12, 0.5);
  const p2 = makeCloud(0x06b6d4, 600, 0.08, 0.35);
  partScene.add(p1); partScene.add(p2);
  partScene.userData.p1 = p1; partScene.userData.p2 = p2;

  window.addEventListener('resize', () => {
    partCamera.aspect = canvas.clientWidth / canvas.clientHeight;
    partCamera.updateProjectionMatrix();
    partRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

function animateParticles() {
  requestAnimationFrame(animateParticles);
  const t = clock.getElapsedTime();
  if (partScene.userData.p1) { partScene.userData.p1.rotation.y = t * 0.035; partScene.userData.p1.rotation.x = t * 0.018; }
  if (partScene.userData.p2) { partScene.userData.p2.rotation.y = -t * 0.025; partScene.userData.p2.rotation.x = t * 0.012; }
  partRenderer.render(partScene, partCamera);
}

// ─────────────────────────────────────────────────────
// 3D TILT CARDS
// ─────────────────────────────────────────────────────
function initTiltCards() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 to 0.5
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      const rotX  = -y * 16;
      const rotY  =  x * 16;

      card.style.transition = 'none';
      card.style.transform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(24px)`;

      // Update CSS vars for shimmer position
      const inner = card.querySelector('.tilt-card-inner');
      if (inner) {
        inner.style.setProperty('--mx', ((x + 0.5) * 100) + '%');
        inner.style.setProperty('--my', ((y + 0.5) * 100) + '%');
      }

      // Parallax depth on inner content
      const rows = card.querySelectorAll('.tc-car-row');
      rows.forEach((row, i) => {
        const depth = (i + 1) * 0.5;
        row.style.transform = `translate(${x * depth * 8}px, ${y * depth * 5}px)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
      card.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      card.querySelectorAll('.tc-car-row').forEach(row => { row.style.transform = ''; row.style.transition = 'transform 0.6s ease'; });
    });
  });

  // Tech cards (smaller tilt)
  document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x    = (e.clientX - rect.left) / rect.width  - 0.5;
      const y    = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transition = 'none';
      card.style.transform  = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, border-color 0.3s, box-shadow 0.3s';
      card.style.transform  = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // AI category cards intersection
  const catCards = document.querySelectorAll('.tilt-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = Array.from(catCards).indexOf(e.target);
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = 'perspective(900px) translateY(0)';
        }, i * 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  catCards.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'perspective(900px) translateY(40px)';
    c.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(c);
  });
}

// ─────────────────────────────────────────────────────
// STAT COUNTERS
// ─────────────────────────────────────────────────────
function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  let done = false;
  const observer = new IntersectionObserver(entries => {
    if (done) return;
    entries.forEach(e => {
      if (e.isIntersecting) {
        done = true;
        nums.forEach(el => {
          const target = parseInt(el.dataset.target);
          let current = 0; const step = target / 60;
          const iv = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.round(current);
            if (current >= target) clearInterval(iv);
          }, 16);
        });
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(el => observer.observe(el));
}

// ─────────────────────────────────────────────────────
// TECH CARDS
// ─────────────────────────────────────────────────────
function initTechCards() {
  const cards = document.querySelectorAll('.tech-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = Array.from(cards).indexOf(e.target);
        setTimeout(() => {
          e.target.classList.add('visible');
          const bar = e.target.querySelector('.tech-bar-fill');
          if (bar) setTimeout(() => { bar.style.width = (bar.dataset.pct || 80) + '%'; }, 200);
        }, i * 75);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(c => observer.observe(c));
}

// ─────────────────────────────────────────────────────
// ACCORDIONS
// ─────────────────────────────────────────────────────
function initAccordions() {
  const leftHeader = document.getElementById('aiAlgoHeader');
  const rightHeader = document.getElementById('sensorPanelTitle');
  if (leftHeader) {
    leftHeader.addEventListener('click', () => {
      const panel = document.getElementById('aiAlgoPanel');
      const otherPanel = document.getElementById('sensorPanel');
      panel.classList.toggle('collapsed');
      
      // Mutually exclusive: if left is opened, close right
      if (!panel.classList.contains('collapsed')) {
        otherPanel.classList.add('collapsed');
      }

      if (currentCarIdx >= 0) {
        const id = CARS[currentCarIdx].id;
        if (!accordionStates[id]) accordionStates[id] = {};
        accordionStates[id].leftOpen = !panel.classList.contains('collapsed');
        accordionStates[id].rightOpen = !otherPanel.classList.contains('collapsed');
      }
    });
  }
  if (rightHeader) {
    rightHeader.addEventListener('click', () => {
      const panel = document.getElementById('sensorPanel');
      const otherPanel = document.getElementById('aiAlgoPanel');
      panel.classList.toggle('collapsed');
      
      // Mutually exclusive: if right is opened, close left
      if (!panel.classList.contains('collapsed')) {
        otherPanel.classList.add('collapsed');
      }

      if (currentCarIdx >= 0) {
        const id = CARS[currentCarIdx].id;
        if (!accordionStates[id]) accordionStates[id] = {};
        accordionStates[id].rightOpen = !panel.classList.contains('collapsed');
        accordionStates[id].leftOpen = !otherPanel.classList.contains('collapsed');
      }
    });
  }
}

// ─────────────────────────────────────────────────────
// START
// ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  runLoader();
});
