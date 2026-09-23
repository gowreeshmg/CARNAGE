/* ═══════════════════════════════════════════════════
   CARNAGE — Main Application Script v3
   Cinematic Hero | Image Showcase | 3D Tilt Cards
   AI Category Section | No Emojis
   ════════════════════════════════════════�const CARS = [
  {
    id: 'tesla-model-y', name: 'Tesla Model Y', index: '01 / 07',
    tagline: 'Full Self-Driving Neural Network',
    specs: { range: '533 km', accel: '5.0 s', ai: 'L2 FSD Supervised', compute: '243 TOPS' },
    processor: 'Tesla FSD Hardware 4',
    algorithms: [
      { name: 'Occupancy Network',
        desc: 'Voxel-based 3D occupancy grid that predicts which regions of space are occupied — replaces traditional object detection with continuous spatial reasoning.' },
      { name: 'End-to-End Neural Planner',
        desc: 'Takes raw camera data and outputs steering, acceleration, and braking commands directly, bypassing traditional rule-based planning heuristics.' },
      { name: 'Transformer Networks',
        desc: 'Processes sequential video frames over time to construct a highly accurate bird’s-eye-view representation of the surrounding 3D environment.' }
    ],
    features: ['Navigate on Autopilot', 'Auto Lane Change', 'Smart Summon'],
    featureDesc: ['Active guidance from on-ramp to off-ramp', 'Automatically executes lane changes to maintain speed', 'Navigates complex parking lots to find you autonomously'],
  },
  {
    id: 'mg-cyberster', name: 'MG Cyberster', index: '02 / 07',
    tagline: 'Born Electric. Born Aggressive.',
    specs: { range: '580 km', accel: '3.2 s', ai: 'L2+ ADAS', compute: 'Mobileye / 8155' },
    processor: 'Snapdragon 8155 Cockpit',
    algorithms: [
      { name: 'Adaptive Chassis AI',
        desc: 'Reads steering angle, lateral G-force and wheel speed to adjust electronic dampers dynamically, balancing handling versus comfort.' },
      { name: 'Real-time Trajectory Prediction',
        desc: 'Evaluates the incoming speed and direction of surrounding vehicles to predict collision risks and initiate autonomous braking.' },
      { name: 'Multi-modal Sensor Fusion',
        desc: 'Combines millimeter-wave radar and high-definition cameras to create a unified perception map for lane and object tracking.' }
    ],
    features: ['Lane Keep Assist', 'Forward Collision Avoidance', 'Auto Parking'],
    featureDesc: ['Provides steering intervention if drifting is detected', 'Triggers pre-charge of brake calipers and engages AEB', 'Automatically controls steering and speed to park'],
  },
  {
    id: 'byd-seal', name: 'BYD Seal', index: '03 / 07',
    tagline: 'Aero-Dynamic Sports Sedan',
    specs: { range: '570 km', accel: '3.8 s', ai: 'L2 DiPilot', compute: '100 TOPS' },
    processor: "BYD DiPilot (God's Eye C)",
    algorithms: [
      { name: 'Kalman Filter Tracking',
        desc: 'Predicts object trajectories frame-to-frame using state-space estimation; maintains consistent ID across occlusions at 0.3ms latency.' },
      { name: 'Velocity-Aware Planner',
        desc: 'Gradient-descent motion planner computes smooth acceleration/braking curves by solving a convex optimisation problem at 50Hz.' },
      { name: 'EyeQ Shadow Mode',
        desc: 'Runs silently in the background capturing human driving behavior across the fleet, training the network to handle edge cases without active intervention.' }
    ],
    features: ['Autonomous Emergency Braking', 'Intelligent Cruise Control', 'Lane Keep Assist'],
    featureDesc: ['Radar-fusion system halts vehicle to prevent collision', 'Advanced speed and distance management', 'Actively prevents unintended lane departures'],
  },
  {
    id: 'byd-sealion', name: 'BYD Sealion', index: '04 / 07',
    tagline: 'The Intelligent Electric SUV',
    specs: { range: '610 km', accel: '4.5 s', ai: 'L2 DiPilot', compute: '254 TOPS' },
    processor: 'NVIDIA DRIVE Orin-X',
    algorithms: [
      { name: 'YOLO v8 Object Detection',
        desc: 'Detects 80+ object classes in real-time at 60fps with 94% mAP; identifies pedestrians, vehicles, cyclists and traffic signs simultaneously.' },
      { name: "Bird's Eye View Transformer",
        desc: 'Converts surround-camera feeds into a unified top-down 3D spatial map using attention-based neural transformer blocks.' },
      { name: 'Lane Centering Network',
        desc: 'Deep learning model that calculates precise steering angles to maintain lane positioning even on sharp curves or faded road markings.' }
    ],
    features: ['Adaptive Cruise Control', 'Automatic Lane Change', 'Intelligent High-Beam'],
    featureDesc: ['Maintains safe distance and speed dynamically', 'Executes safe lane changes upon driver indicator input', 'Auto-adjusts headlights based on oncoming traffic'],
  },
  {
    id: 'byd-emax', name: 'BYD eMAX 7', index: '05 / 07',
    tagline: 'Intelligent Electric Family MPV',
    specs: { range: '530 km', accel: '8.6 s', ai: 'L2 DiPilot', compute: 'Integrated ADAS' },
    processor: 'BYD DiPilot System',
    algorithms: [
      { name: 'Occupant Safety Classifier',
        desc: 'Detects the presence and posture of passengers using cabin cameras to optimize airbag deployment and trigger specific safety warnings.' },
      { name: 'Child Occupant Monitor',
        desc: 'Interior DMS infrared camera combined with a semi-supervised CNN detects unattended children in the cabin and triggers alerts.' },
      { name: 'Lane Departure Prevention Network',
        desc: 'Evaluates lane lines and vehicle trajectory to provide corrective steering torque precisely when unintended drift is detected.' }
    ],
    features: ['Predictive Collision Warning', 'Blind Spot Detection', 'Door Open Warning'],
    featureDesc: ['Alerts driver to potential forward hazards', 'Monitors areas difficult to see via mirrors', 'Alerts occupants if opening a door into traffic is unsafe'],
  },
  {
    id: 'range-rover-velar', name: 'Range Rover Velar', index: '06 / 07',
    tagline: 'Terrain Intelligence Beyond Limits',
    specs: { range: '640 km', accel: '5.4 s', ai: 'L2 Steering Assist', compute: 'EVA 2.0 Pivi Pro' },
    processor: 'Qualcomm Snapdragon',
    algorithms: [
      { name: 'Terrain Adaptation AI',
        desc: 'Analyzes wheel slip and suspension deflection to auto-select and tune terrain profiles dynamically.' },
      { name: 'ClearSight Ground View',
        desc: 'Stitches front-bumper cameras with a virtual underbody projection to show a live ground-level view through the bonnet on the infotainment screen.' },
      { name: 'Traffic Flow Prediction',
        desc: 'Processes real-time cloud data and local camera vision to predict speed limit changes and upcoming traffic patterns.' }
    ],
    features: ['3D Surround Camera', 'Traffic Sign Recognition', 'Adaptive Cruise'],
    featureDesc: ['360-degree view for maneuvering tight spaces', 'Identifies speed limits and adjusts adaptive limiter', 'Maintains safe distance and centers vehicle in lane'],
  },
  {
    id: 'bmw-x7', name: 'BMW X7', index: '07 / 07',
    tagline: 'Luxury Intelligence Redefined',
    specs: { range: '800 km', accel: '4.7 s', ai: 'L2+ CoPilot', compute: '~60 TOPS' },
    processor: 'Snapdragon Digital Chassis',
    algorithms: [
      { name: 'Semantic Lane Parsing',
        desc: 'Fuses multi-camera vision with high-definition map data to maintain highly accurate lane keeping even at high motorway speeds.' },
      { name: 'Predictive Route AI',
        desc: 'Analyses driving history, traffic patterns and calendar data using LSTM networks to suggest optimal routes and pre-condition the cabin.' },
      { name: 'REM Fleet Mapping',
        desc: 'Road Experience Management: crowdsources centimetre-precision map updates from fleet vehicles via 4G, keeping maps perpetually fresh.' }
    ],
    features: ['Motorway Assistant', 'Parking Assistant Pro', 'Reversing Assistant'],
    featureDesc: ['Hands-free driving on approved highways up to 130 km/h', 'Automated maneuver assistance and path recording', 'Memorizes the last 50 meters and reverses exactly along that path'],
  }
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
      
      if (currentCarIdx >= 0) {
        const id = CARS[currentCarIdx].id;
        if (!accordionStates[id]) accordionStates[id] = {};
        accordionStates[id].leftOpen = !panel.classList.contains('collapsed');
      }
    });
  }
  if (rightHeader) {
    rightHeader.addEventListener('click', () => {
      const panel = document.getElementById('sensorPanel');
      const otherPanel = document.getElementById('aiAlgoPanel');
      panel.classList.toggle('collapsed');
      
      if (currentCarIdx >= 0) {
        const id = CARS[currentCarIdx].id;
        if (!accordionStates[id]) accordionStates[id] = {};
        accordionStates[id].rightOpen = !panel.classList.contains('collapsed');
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
