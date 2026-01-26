//********************************************************
//Island Builder
//********************************************************
var width = window.innerWidth;
var height = window.innerHeight;

var sensitivity = 0.5;
var counter = 0;
var downspeed = 0;

var cameraLookAt = new THREE.Vector3(0,0,-1);
var cameraLookBack = new THREE.Vector3(0,0,1);
var cameraLeft = new THREE.Vector3(1,0,0);
var cameraUp = new THREE.Vector3().crossVectors(cameraLeft, cameraLookAt);
var cameraDown = new THREE.Vector3(0,-1,0);
var bodyFaceAt = new THREE.Vector3(0,0,-1);
var movementLock = 1;

var raycaster;
var backcaster;
var frontcaster;
var downcaster;
var frontLock = false;
var backLock = false;
var jumpLock = true;
var collisionItems;

var cubes = [];
var cubeGeometry = new THREE.BoxGeometry(1,1,1);

var sandMaterial = new THREE.MeshLambertMaterial({ color: 0xe5dcb9});
var grassMaterial = new THREE.MeshLambertMaterial({color: 0x286836});
var stoneMaterial = new THREE.MeshLambertMaterial({color: 0x4e6568});
var dirtMaterial = new THREE.MeshLambertMaterial({color: 0x4f4029});
var whiteMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
var redMaterial = new THREE.MeshLambertMaterial({color: 0xb24223});
var currentMaterial = sandMaterial;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// create scene object
var scene = new THREE.Scene;
scene.background = new THREE.Color( 0x83a5db );

//Create cubes
var currentHeight = 0;
var terrain = genDisplacement(65);
for(var i = 0; i < terrain.length; i++){
  for(var j =0; j < terrain[i].length; j++){
    currentHeight = terrain[i][j]
    if(currentHeight < 6)
      var cube = new THREE.Mesh(cubeGeometry, sandMaterial);
    else
      var cube = new THREE.Mesh(cubeGeometry, grassMaterial);
    cube.position.set(i,currentHeight,j);
    cubes.push(cube);
    scene.add(cube);

    for(var lo = currentHeight-1; lo > 5; lo--){
      var cube = new THREE.Mesh(cubeGeometry, dirtMaterial);
      cube.position.set(i,lo,j);
      cubes.push(cube);
      scene.add(cube);
    }
  }
}

//add ocean waves plane
var geometry = new THREE.PlaneGeometry( 600, 600, 50, 50 );
var material = new THREE.MeshLambertMaterial( {color: 0x43868e} );
var plane = new THREE.Mesh( geometry, material );
plane.rotation.x = -90 * (Math.PI / 180);
plane.position.set(30,2,30);
scene.add( plane );

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
scene.add(camera);
camera.lookAt(0,0,-1);
camera.position.set(30,15,30);

// add lighting and add to scene
var pointLight = new THREE.PointLight(0xaabbcc);
pointLight.position.set(0, 120, 0);
scene.add(pointLight);

var light = new THREE.AmbientLight( 0x404040 , 1.5);
scene.add(light);

//Raycasters
raycaster = new THREE.Raycaster(camera.position, cameraLookAt, 0, 8);
frontcaster = new THREE.Raycaster(camera.position, bodyFaceAt, 0, 2);
backcaster = new THREE.Raycaster(camera.position, cameraLookBack, 0, 2);
downcaster = new THREE.Raycaster(camera.position, cameraDown, 0, 2);

var blockText = document.createElement("p");
blockText.setAttribute("class", "blockText");
blockText.innerHTML = "Sand";

var crosshair = document.createElement("p");
crosshair.innerHTML = "+";
crosshair.setAttribute("class", "crosshair");
crosshair.setAttribute("style", "left: " + (width/2-25) + "px; top: " + (height/2-25) + "px;");
document.body.appendChild(crosshair);

var div = document.createElement("div");
document.body.appendChild(div);
div.appendChild(blockText);


//-------------------------------------------------------------------
// Event Handlers, Methods, Render/animation loop below
//-------------------------------------------------------------------

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

//----------------------------------------------------
//Key press events
//----------------------------------------------------
document.addEventListener('keydown', (event) => {
  const code = event.keyCode;
  switch(code){
    case 87:
      checkCollision();
      if(!frontLock){
        camera.position.x += cameraLookAt.x;
        camera.position.z += cameraLookAt.z;
      }
      break;
    case 83:
      checkCollision();
      if(!backLock){
        camera.position.x -= cameraLookAt.x;
        camera.position.z -= cameraLookAt.z;
      }
      break;
    case 32:
      if(!jumpLock){
        camera.position.y += 2;
        downspeed = 0.3;
        jumpLock = true;
      }
      break;
    case 49:
      blockText.innerHTML = "Grass";
      currentMaterial = grassMaterial;
      break;
    case 50:
      blockText.innerHTML = "Sand";
      currentMaterial = sandMaterial;
      break;
    case 51:
      blockText.innerHTML = "Stone";
      currentMaterial = stoneMaterial;
      break;
    case 52:
      blockText.innerHTML = "Dirt";
      currentMaterial = dirtMaterial;
      break;
    case 53:
      blockText.innerHTML = "White";
      currentMaterial = whiteMaterial;
      break;
    case 54:
      blockText.innerHTML = "Red";
      currentMaterial = redMaterial;
      break;
  }
}, false);

//----------------------------------------------------
//mouse movement event
//----------------------------------------------------
document.addEventListener('mousemove', (event) => {
  if(movementLock == 0){
    var ymovement = -event.movementY * (Math.PI / 180);
    var xmovement = -event.movementX * (Math.PI / 180);

    if(cameraLookAt.y > .999 && ymovement > 0)
      ymovement = 0;

    else if(cameraLookAt.y < -.999 && ymovement < 0)
      ymovement = 0;

    //handling yaw
    cameraLookAt.applyAxisAngle((new THREE.Vector3(0,1,0)),xmovement * sensitivity);
    cameraLeft.applyAxisAngle((new THREE.Vector3(0,1,0)),xmovement * sensitivity);

    //handling pitch
    cameraLookAt.applyAxisAngle(cameraLeft,ymovement * sensitivity);

    //keep orthogonal
    cameraUp = cameraUp.crossVectors(cameraLeft, cameraLookAt);
    cameraLookBack = cameraLookAt.clone().negate();
    bodyFaceAt.x = cameraLookAt.x;
    bodyFaceAt.z = cameraLookAt.z;
  }
});

//----------------------------------------------------
//mouse click event
//----------------------------------------------------
document.addEventListener("click", (event) => {
  var button = event.button;
  collisionItems = raycaster.intersectObjects(cubes);
  if(collisionItems.length > 0){
    var clickedObject = collisionItems[0].object;
    //left click
    if(button == 0){
      var newpos = new THREE.Vector3().addVectors(clickedObject.position,collisionItems[0].face.normal);
      console.log(clickedObject.getWorldPosition());
      console.log(newpos);
      var cube = new THREE.Mesh(cubeGeometry, currentMaterial);
      cube.position.set(newpos.x, newpos.y, newpos.z);
      cubes.push(cube);
      scene.add(cube);
    }
    //right click
    else if(button == 2){
      //remove the object
      var index = cubes.indexOf(clickedObject);
      cubes.splice(index, 1);
      scene.remove(clickedObject);
      clickedObject.geometry.dispose();
      clickedObject.material.dispose();
    }
  }
});
renderer.render(scene, camera);
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
//checkCollisions: - sets front and back raycaster and checks for collision
//----------------------------------------------------
function checkCollision(){
  //check front of camera
  frontcaster.set(camera.position, bodyFaceAt);
  var collided = frontcaster.intersectObjects(cubes);
  if(collided.length > 0){
    //something in front of camera
    frontLock = true;
  }
  else{
    frontLock = false;
  }
  //check back of camera
  backcaster.set(camera.position, cameraLookBack);
  collided = backcaster.intersectObjects(cubes);
  if(collided.length > 0){
    //something behind of camera
    backLock = true;
  }
  else{
    backLock = false;
  }
}
//----------------------------------------------------
//checkFloorCollisions: - check collision with blocks below
//----------------------------------------------------
function checkFloorCollision(){
  downcaster.set(camera.position, cameraDown);
  collisionItems = downcaster.intersectObjects(cubes);
  if(collisionItems.length > 0){
    var collided = collisionItems[0].object;
    //cube under camera
    downspeed = 0;
    if(camera.position.distanceTo(collided.position) != 2.5){
      camera.position.y = collided.position.y + 2.5;
    }
    jumpLock = false;
  }
  else
    downspeed += -0.01;
}
//----------------------------------------------------
//render: game loop
//----------------------------------------------------
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    camera.up = cameraUp;
    camera.lookAt(camera.position.clone().add(cameraLookAt));
    checkFloorCollision();
    camera.position.y += downspeed;

    //move those waves!
    for(var i = 0; i < plane.geometry.vertices.length; i++){
      var v = plane.geometry.vertices[i];
      v.z = (Math.sin(v.x * 1.0 + counter * 1.0) + Math.sin(v.x * 2.3 + counter * 1.5) + Math.sin(v.x * 3.3 + counter * 0.4)) / 2.0;
      v.z += (Math.sin(v.y * 1.0 + counter * 1.0) + Math.sin(v.y * 2.3 + counter * 1.5) + Math.sin(v.y * 3.3 + counter * 0.4)) / 2.0;
    }
    plane.geometry.verticesNeedUpdate = true;

    counter += 0.02;
}
render();
