//********************************************************
//MidPoint Displacement Terrain Generation
//Sean Holcomb
//
//********************************************************

var width = window.innerWidth;
var height = window.innerHeight;

var creationSize = 65;
var creationHeight = 10;
var creationRough = 6;

//Camera rotation vectors
var sensitivity = 0.5;
var cameraLookAt = new THREE.Vector3(0,0,-1);
var cameraLeft = new THREE.Vector3(1,0,0);
var cameraUp = new THREE.Vector3().crossVectors(cameraLeft, cameraLookAt);

//create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// create scene object
var scene = new THREE.Scene;
scene.background = new THREE.Color( 0xffffff );

// create perspective camera
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.lookAt(0,0,-1);
scene.add(camera);

//----- Create displacement and add to new PlaneBuffer -----
//grid needs to be 2^n + 1. Until I set up a good balance for
//displacement to grid size, Changing this will drastically change roughness of terrain
var gridSize = 65;

var tergen = new TerrainGen();
var displacement = tergen.genMidpointDisplacement(gridSize,10,6,[1,1,1,1]);
displacement = tergen.flattenArray(displacement);

var geometry = new THREE.PlaneBufferGeometry(gridSize, gridSize, gridSize - 1, gridSize - 1);
var positions = geometry.attributes.position.array;

var i1 = 0;
for(var i = 2; i < positions.length; i += 3) {
  positions[i] += displacement[i1];
  i1++;
}

var material = new THREE.MeshLambertMaterial({wireframe: true, color: 0x000000});
var mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = -90* Math.PI / 180.0;
scene.add(mesh);

camera.position.set(0,15,gridSize+5);

//----- WASD controls event listener -----
document.addEventListener('keydown', (event) => {
  const code = event.keyCode;
  switch(code){
    case 87:
      camera.position.add(cameraLookAt);
      break;
    case 83:
      camera.position.sub(cameraLookAt);
      break;
    case 65:
      camera.position.sub(cameraLeft);
      break;
    case 68:
      camera.position.add(cameraLeft);
      break;
  }
}, false);

createGUI();
//----- Mouse controls event listener for pitch/yaw -----
document.addEventListener('mousemove', (event) => {
  if(!camLocked){
    var ymovement = -event.movementY * (Math.PI / 180);
    var xmovement = -event.movementX * (Math.PI / 180);

    if(cameraLookAt.y > .7 && ymovement > 0)
      ymovement = 0;

    else if(cameraLookAt.y < -.7 && ymovement < 0)
      ymovement = 0;

    //handling yaw
    cameraLookAt.applyAxisAngle((new THREE.Vector3(0,1,0)),xmovement * sensitivity);
    cameraLeft.applyAxisAngle((new THREE.Vector3(0,1,0)),xmovement * sensitivity);


    //handling pitch
    cameraLookAt.applyAxisAngle(cameraLeft,ymovement * sensitivity);

    cameraUp = cameraUp.crossVectors(cameraLeft, cameraLookAt);
  }
});
//----- Event listener for locking mouse to canvas -----
var camLocked = 1;
var canvas = renderer.domElement;
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
canvas.onclick = function() {canvas.requestPointerLock();};
if ("onpointerlockchange" in document) {
  document.addEventListener('pointerlockchange', lockChangeAlert, false);
} else if ("onmozpointerlockchange" in document) {
  document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
}

renderer.render(scene, camera);
//----------------------------------------------------
//lockChangeAlert: provided by Mozilla example. Allows
//        movement of mouse without camera rotation while pointer unlocked
//----------------------------------------------------
function lockChangeAlert() {
  if(document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
    camLocked = 0;
  } else {
    camLocked = 1;
  }
}

function recreateGeometry(grid, height, roughness, tl, tr, br, bl){
  scene.remove(mesh);

  var displacement = tergen.genMidpointDisplacement(grid, height, roughness,[tl,tr,br,bl]);
  displacement = tergen.flattenArray(displacement);

  var geometry = new THREE.PlaneBufferGeometry(grid, grid, grid - 1, grid - 1);
  var positions = geometry.attributes.position.array;

  var i1 = 0;
  for(var i = 2; i < positions.length; i += 3) {
    positions[i] += displacement[i1];
    i1++;
  }

  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -90* Math.PI / 180.0;
  scene.add(mesh);
}

function createGUI(){
  //create HTML User Interface
  var sizeP = document.createElement("p");
  sizeP.innerHTML = "Size: ";

  var sizeElement = document.createElement("INPUT");
  sizeElement.setAttribute("type", "number");
  sizeElement.setAttribute("min", "3");
  sizeElement.setAttribute("max", "8");
  sizeElement.setAttribute("value", "6");

  var heightP = document.createElement("p");
  heightP.innerHTML = "Height: ";

  var heightElement = document.createElement("INPUT");
  heightElement.setAttribute("type", "range");
  heightElement.setAttribute("min", "1");
  heightElement.setAttribute("max", "100");
  heightElement.setAttribute("value", "10");

  var roughP = document.createElement("p");
  roughP.innerHTML = "Roughness: ";

  var roughElement = document.createElement("INPUT");
  roughElement.setAttribute("type", "range");
  roughElement.setAttribute("min", "1");
  roughElement.setAttribute("max", "20");
  roughElement.setAttribute("value", "6");

  var buttonElement = document.createElement("button");
  buttonElement.innerHTML = "Generate";

  var div = document.createElement("div");
  div.setAttribute("class", "uibox");
  document.body.appendChild(div);
  div.appendChild(sizeP);
  div.appendChild(sizeElement);
  div.appendChild(heightP);
  div.appendChild(heightElement);
  div.appendChild(roughP);
  div.appendChild(roughElement);
  div.appendChild(buttonElement);

  heightElement.oninput = function(){
    creationHeight = parseFloat(this.value);
  }
  roughElement.oninput = function(){
    creationRough = parseFloat(this.value);
  }
  buttonElement.onclick = function(){
    creationSize = Math.pow(2,parseFloat(sizeElement.value)) + 1;
    recreateGeometry(creationSize, creationHeight, creationRough,1,1,1,1);
  }
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    camera.up = cameraUp;
    camera.lookAt(camera.position.clone().add(cameraLookAt));
}
render();
