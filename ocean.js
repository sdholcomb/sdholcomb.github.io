var counter = 0;
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x92c3d3 );
scene.fog = new THREE.Fog( scene.background, 1, 90 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialis: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add ocean waves plane
var geometry = new THREE.PlaneGeometry( 100, 100, 50, 50 );
var material = new THREE.MeshLambertMaterial( {color: 0x43868e} );
var plane = new THREE.Mesh( geometry, material );
plane.rotation.x = -90 * (Math.PI / 180);
plane.position.set(0,0,0);
scene.add( plane );

//create rocks
var sphereGeometry = new THREE.SphereGeometry( 17, 7, 7);
var sphereMaterial = new THREE.MeshToonMaterial( {color: 0x422f10} );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(-2,-13,-30);
scene.add(sphere);

var sphereGeometry = new THREE.SphereGeometry( 10, 8, 8);
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(-30,-7,-25);
scene.add(sphere);

var sphereGeometry = new THREE.SphereGeometry( 17, 7, 7);
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(30,-10,-40);
scene.add(sphere);

var sphereGeometry = new THREE.SphereGeometry( 25, 7, 7);
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(65,-10,-50);
scene.add(sphere);

//add lights
var pointlight = new THREE.PointLight( 0xffffff);
pointlight.position.set( -10, 15, 5 );
scene.add( pointlight );

var light = new THREE.HemisphereLight( 0xffffff, 0x225466, 0.5 );
scene.add( light );

//Load object
var objLoader = new THREE.OBJLoader2();

var callbackOnLoad = function ( event ) {
  event.detail.loaderRootNode.position.set(20,2,-20);
  scene.add( event.detail.loaderRootNode );
};
var onLoadMtl = function ( materials ) {
  objLoader.setMaterials( materials );
  objLoader.setLogging( true, true );
  objLoader.load( 'assets/models/testhouse/testhouse.obj', callbackOnLoad, null, null, null, false );
};
objLoader.loadMtl( 'assets/models/testhouse/testhouse.mtl', null, onLoadMtl );

camera.position.set(0,3,20);
camera.lookAt(0,0,0);

//Mouse controls for pitch/yaw
document.addEventListener('mousemove', (event) => {
  var xmovement = event.movementX;

  camera.position.x  += xmovement*0.001;
  camera.lookAt(0,0,0);

});

var isPaused = false;

var animate = function () {
  if(!isPaused){
    for(var i = 0; i < plane.geometry.vertices.length; i++){
      var v = plane.geometry.vertices[i];
      v.z = Math.sin((v.x + counter)/3) + Math.sin((v.y)/3);
    }
    plane.geometry.verticesNeedUpdate = true;

    counter += 0.05;
  }
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
};

animate();
