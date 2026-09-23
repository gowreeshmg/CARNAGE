import json
import re

with open('app.js', 'r') as f:
    js_content = f.read()

hud_code_old = """  // Algo panel
  animEl(document.getElementById('aiAlgoPanel'), 200);
  const algoList = document.getElementById('algoList');
  algoList.innerHTML = '';
  data.algorithms.forEach((algo, i) => {
    setTimeout(() => {
      const item = document.createElement('div');
      item.className = 'algo-item';
      item.innerHTML = `<div class="algo-name">${algo.name}</div><div class="algo-desc">${algo.desc}</div>`;
      algoList.appendChild(item);
      requestAnimationFrame(() => setTimeout(() => item.classList.add('visible'), 20));
    }, 250 + i * 85);
  });

  // Sensor panel
  animEl(document.getElementById('sensorPanel'), 215);
  const grid = document.getElementById('sensorGrid');
  grid.innerHTML = '';
  data.sensors.forEach((s, i) => {
    setTimeout(() => {
      const item = document.createElement('div');
      item.className = 'sensor-item';
      item.innerHTML = `<div class="sensor-type">${s.type}</div><div class="sensor-spec">${s.spec.replace(/\\n/g,'<br>')}</div>`;
      grid.appendChild(item);
    }, 260 + i * 65);
  });

  // Feature strips
  ['fs1','fs2','fs3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('visible');
    if (data.features[i]) {
      setTimeout(() => {
        el.querySelector('.fs-name').textContent = data.features[i];
        el.querySelector('.fs-desc').textContent = data.featureDesc[i];
        el.classList.add('visible');
      }, 350 + i * 100);
    }
  });"""

hud_code_new = """  // Left Panel: AI Features
  animEl(document.getElementById('aiAlgoPanel'), 200);
  const algoList = document.getElementById('algoList');
  algoList.innerHTML = '';
  if(data.features) {
    data.features.forEach((feat, i) => {
      setTimeout(() => {
        const item = document.createElement('div');
        item.className = 'algo-item';
        item.innerHTML = `<div class="algo-name">${feat}</div><div class="algo-desc">${data.featureDesc[i]}</div>`;
        algoList.appendChild(item);
        requestAnimationFrame(() => setTimeout(() => item.classList.add('visible'), 20));
      }, 250 + i * 85);
    });
  }

  // Right Panel: AI Algorithms
  animEl(document.getElementById('sensorPanel'), 215);
  const grid = document.getElementById('sensorGrid');
  grid.innerHTML = '';
  grid.style.display = 'flex';
  grid.style.flexDirection = 'column';
  if(data.algorithms) {
    data.algorithms.forEach((algo, i) => {
      setTimeout(() => {
        const item = document.createElement('div');
        item.className = 'algo-item right-algo-item';
        item.style.marginBottom = '6px';
        item.innerHTML = `<div class="algo-name" style="color:var(--cyan-bright); font-size: 0.65rem;">${algo.name}</div><div class="algo-desc" style="font-size: 0.55rem;">${algo.desc}</div>`;
        grid.appendChild(item);
        requestAnimationFrame(() => setTimeout(() => item.classList.add('visible'), 20));
      }, 260 + i * 65);
    });
  }
"""

if hud_code_old in js_content:
    js_content = js_content.replace(hud_code_old, hud_code_new)
else:
    print("WARNING: HUD code old not found")

with open('app.js', 'w') as f:
    f.write(js_content)
