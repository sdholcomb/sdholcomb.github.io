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

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );

  const line = new THREE.Line( geometry, material );

  scene.add( line );
  renderer.render( scene, camera );
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
