import './style.css'

import * as THREE from 'three';
import Scene from './Scene';

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.getElementById('app') as HTMLCanvasElement,
});

renderer.setSize(width, height);

const scene = new Scene();
scene.initialize();

function tick() {
  scene.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();