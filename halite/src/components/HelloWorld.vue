<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from 'three';

let mesh
let renderer
let scene
let camera

function init () {
  let container = document.getElementById('container');

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x121212 );

  var radius = 20;
  var segments = 5;
  var rings = 5;

  var geometry = new THREE.SphereGeometry(radius, segments, rings);
  var material = new THREE.MeshBasicMaterial({
    color: 0x1b804f,
    wireframe: true
  });

  var sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere)

  var render = function() {
    requestAnimationFrame(render);

    sphere.rotation.x += 0.008;
    sphere.rotation.y += 0.008;

    renderer.render(scene, camera);
  }

  render()
}

function animate () {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  renderer.render(scene, camera);
}

export default {
  name: 'HelloWorld',
  data: () => ({
  }),
  methods: {
    init: function() {
      console.log('init')
    }
  },
  mounted() {
    init();
  }
}
</script>
