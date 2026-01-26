//********************************************************
//Flying Game
//********************************************************
var width = window.innerWidth;
var height = window.innerHeight;


var sensitivity = 0.5;
var speed = 0;
var accel = 0;
var speedTarget = 0;

var cameraLookAt = new THREE.Vector3(0,0,-1);
var cameraLeft = new THREE.Vector3(1,0,0);
var cameraUp = new THREE.Vector3().crossVectors(cameraLeft, cameraLookAt);
var movementLock = 1;

var raycaster;
var collisionItems;
var previousObject = null;

var cubes = [];
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x84a4d6});

var spheres = [];
var sphereGeometry = new THREE.SphereGeometry( 1, 5, 5 );
var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0x24b76b} );

var score = 0;
var scoreElement;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//lock mouse pointer onClick with canvas
var canvas = renderer.domElement;
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
canvas.onclick = function() {
  canvas.requestPointerLock();
};
if ("onpointerlockchange" in document) {
  document.addEventListener('pointerlockchange', lockChangeAlert, false);
} else if ("onmozpointerlockchange" in document) {
  document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
}

// create scene object
var scene = new THREE.Scene;
scene.background = new THREE.Color( 0x83a5db );

//Create cubes and spheres
for(var i = -100; i < 100; i += 20){
	for(var j = -100; j < 100; j += 20){
		var h = Math.random() * 40 + 10;
		var noise = Math.floor((Math.random() * 10))-5;
		var cubeGeometry = new THREE.CubeGeometry(5,h, 5);
		var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
		cube.position.set(i+noise, h/2 , j+noise);
    cubes.push(cube);
    scene.add(cube);

    if(i % 5 == 0){
      var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
      sphere.position.set(cube.position.x + 5, Math.random() * 50 + 1, cube.position.z + 5);
      spheres.push(sphere);
      scene.add(sphere);
    }
	}
}

//create the FREEBIE sphere
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(0, 20, 180);
spheres.push(sphere);
scene.add(sphere);

//create "floor"
var cubeGeometry = new THREE.CubeGeometry(300,1, 300);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x234282});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0,0,0);
cubes.push(cube);
scene.add(cube);

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

// add to scene and renderer
scene.add(camera);
renderer.render(scene, camera);

camera.lookAt(0,0,-1);

// add lighting and add to scene
var pointLight = new THREE.PointLight(0xaabbcc);
pointLight.position.set(10, 30, 16);
cube.position.set(10,0,10);
scene.add(pointLight);

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add(light);

// instantiate a listener
var audioListener = new THREE.AudioListener();
var audioListener2 = new THREE.AudioListener();

// add the listener to the camera
camera.add( audioListener );

// instantiate audio object
var collectSound = new THREE.Audio( audioListener );

// add the audio object to the scene
scene.add( collectSound );

// instantiate a loader
var loader = new THREE.AudioLoader();

// load a resource
loader.load(
  //"UI Confirmation Alert, B1.wav" by InspectorJ of Freesound.org
	'../../assets/audios/ui.wav',
	// onLoad callback
	function ( audioBuffer ) {
		// set the audio object buffer to the loaded object
		collectSound.setBuffer( audioBuffer );
	},
	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);

//camera WASD controls
document.addEventListener('keydown', (event) => {
  const code = event.keyCode;
  switch(code){
    case 87:
      setTargetSpeed(speedTarget + 100);
      speedElement.innerHTML = "Target Speed: "+ speedTarget/10 +" mph";
      break;
    case 83:
      setTargetSpeed(speedTarget - 100);
      speedElement.innerHTML = "Target Speed: "+ speedTarget/10 +" mph";
      break;
    case 65:
      cameraLookAt.applyAxisAngle(cameraUp, 0.01)
      cameraLeft.applyAxisAngle(cameraUp, 0.01)
      break;
    case 68:
      //camera.position.add(cameraLeft);
      cameraLookAt.applyAxisAngle(cameraUp, -0.01)
      cameraLeft.applyAxisAngle(cameraUp, -0.01)
      break;
  }
}, false);

//Mouse controls for pitch/yaw
document.addEventListener('mousemove', (event) => {
  if(!movementLock){
    var ymovement = -event.movementY * (Math.PI / 180);
    var xmovement = event.movementX * (Math.PI / 180);

    //handling roll
    cameraLeft.applyAxisAngle(cameraLookAt,xmovement * sensitivity);
    cameraUp.applyAxisAngle(cameraLookAt,xmovement * sensitivity);

    //handling pitch
    cameraLookAt.applyAxisAngle(cameraLeft,ymovement * sensitivity);
    cameraUp = cameraUp.crossVectors(cameraLeft, cameraLookAt);
  }
});

//create HTML User Interface
var sensText = document.createElement("p");
sensText.innerHTML = "Sensitivity:";

var slider = document.createElement("INPUT");
slider.setAttribute("type", "range");
slider.setAttribute("min", "1");
slider.setAttribute("max", "100");
slider.setAttribute("value", "25");
slider.setAttribute("class", "slider");

var scoreElement = document.createElement("p");
scoreElement.innerHTML = "Score: 0";

var speedElement = document.createElement("p");
speedElement.innerHTML = "Target Speed: -- mph";

var div = document.createElement("div");
div.setAttribute("class", "uibox");
document.body.appendChild(div);
div.appendChild(sensText);
div.appendChild(slider);
div.appendChild(scoreElement);
div.appendChild(speedElement);
slider.oninput = function(){
  sensitivity = (this.value/100);
}

camera.position.set(0,20,200);
raycaster = new THREE.Raycaster(camera.position, cameraLookAt, 0, 2);
scene.fog = new THREE.Fog(0x144468,10,200)
renderer.render(scene, camera);

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

//----------------------------------------------------
//adjustSpeed:  allows camera to slowly reach speed
//              rather than jump to it
//----------------------------------------------------
function adjustSpeed(){
  if(speed < speedTarget)
    accel = 5;

  else if(speed > speedTarget)
    accel = -5;

  else {
    accel = 0;
  }
  speed += accel;
}

//----------------------------------------------------
//setTargetSpeed: sets the target speed, doesn't allow stop or negative
//----------------------------------------------------
function setTargetSpeed(targetspeed){
  speedTarget = Math.max(targetspeed, 100);
}

//----------------------------------------------------
//lockChangeAlert: provided by Mozilla example. Allows
//        movement of mouse without camera rotation while pointer unlocked
//----------------------------------------------------
function lockChangeAlert() {
  if(document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
    movementLock = 0;
  } else {
    movementLock = 1;
  }
}

//----------------------------------------------------
//checkCollisions: - sets raycaster positions and orientation to camera
//                 - checks for collisions with cubes then spheres
//----------------------------------------------------
function checkCollisions(){
  //handle cube collisions
  raycaster.set(camera.position, cameraLookAt);
  collisionItems = raycaster.intersectObjects(cubes);
  if(collisionItems.length > 0){
    //reset camera
    camera.position.set(0,20, 200);
    cameraLookAt = new THREE.Vector3(0,0,-1);
    cameraLeft = new THREE.Vector3(1,0,0);
    cameraUp = new THREE.Vector3().crossVectors(cameraLeft, cameraLookAt);
    //reset score;
    score = 0;
    scoreElement.innerHTML = "Score: " + score;
  }

  //handle sphere collisions
  collisionItems = raycaster.intersectObjects(spheres);
  if(collisionItems.length > 0){
    var currentObject = collisionItems[0].object;
    //update score
    score += Math.round(speed / 100);
    collectSound.play();
    scoreElement.innerHTML = "Score: " + score;

    //remove the object
    var index = spheres.indexOf(currentObject);
    spheres.splice(index, 1);
    scene.remove(currentObject);
    currentObject.geometry.dispose();
    currentObject.material.dispose();
  }
}

//----------------------------------------------------
//render: game loop
//----------------------------------------------------
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    camera.up = cameraUp;
    camera.lookAt(camera.position.clone().add(cameraLookAt));

    adjustSpeed();
    camera.position.add(cameraLookAt.clone().multiplyScalar(Math.round(speed)/1000));

    checkCollisions();
}
render();
