//********************************************************
//MidPoint Displacement Terrain Generation
//Sean Holcomb
//
//********************************************************

var width = window.innerWidth;
var height = window.innerHeight;

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
var displacement = genDisplacement(gridSize);
displacement = flattenArray(displacement);

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

//Adjustments
//scene.fog = new THREE.Fog(0xffffff,5,50)
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
//-----------------------------------------
//flattenArray: flattens 2D array to 1D and returns new array
//-----------------------------------------
function flattenArray(array){
  var flattened = array[0];
  for(var i = 1; i < array.length; i++){
    flattened = flattened.concat(array[i]);
  }
  return flattened;
}
//-----------------------------------------
//genDisplacement: generates displacement map
//                 recommend 2^n + 1 sizes
//-----------------------------------------
function genDisplacement(size){
  //create displacement map
  var dpm = [];
  for(var i = 0; i < size; i++){
      dpm[i] = [];
    for(var j = 0; j < size; j++){
      dpm[i][j] = 0;
    }
  }

  //sets overall height
  var wholeHeight = 1;

  var tl, tr, bl, br;
  tl = Math.random() * wholeHeight;
  tr = Math.random() * wholeHeight;
  br = Math.random() * wholeHeight;
  bl = Math.random() * wholeHeight;

  subDivide(dpm, 0, 0, tl, tr, br, bl, size, 1);

  console.log(dpm);
  return dpm;
}
//-----------------------------------------
//subDivide: recursively called on smaller squares
//          to do midpoint displacement
//-----------------------------------------
function subDivide(dpm, x, y, c1, c2, c3, c4, size, stage){
  var e1, e2, e3, e4, mid;

  var halfsize = Math.ceil(size/2);

  if(size > 2){

    e1 = (c1 + c2) / 2 + Math.random()/2; //topedge
    e2 = (c2 + c3) / 2 + Math.random()/2; //right edge
    e3 = (c3 + c4) / 2 + Math.random()/2; //bottom edge
    e4 = (c4 + c1) / 2 + Math.random()/2; //left edge
    mid = (c1 + c2 + c3 + c4) / 4 + noise(stage); //mid point

    if(mid < 0)
      mid = 0;

    //============== Leaving this pain here for future reference ==========
    //dpm[y][x + halfsize-1] = e1;
    //dpm[y + halfsize-1][x + size-1] = e2;
    //dpm[y + size-1][x + halfsize-1] = e3;
    //dpm[y + halfsize-1][x] = e4;
    //dpm[y + halfsize-1][x + halfsize-1] = mid;

    //THIS WAS THE ISSUE. IF ASSIGN VALUES DURING THE RECURSION RATHER THAN
    //AT THE END, you cause a mismatch in order where all topleft squares done,
    //then all top right, etc. this is not good.

    stage += 1.5;

    subDivide(dpm, x, y, c1, e1, mid, e4, halfsize, stage); //top left square
    subDivide(dpm, x + halfsize-1, y, e1, c2, e2, mid, halfsize, stage); //top right square
    subDivide(dpm, x + halfsize - 1, y + halfsize - 1, mid, e2, c3, e3, halfsize, stage); //bottom right square
    subDivide(dpm, x, y + halfsize - 1, e4, mid, e3, c4, halfsize, stage); //bottom left square
  }
  else{
    var c = (c1 + c2 + c3 + c4) / 4;
    dpm[y][x] = c;
  }
}
//----------------------------------
//noise: Simple noise based on stage of the recursion.
//        needs to be adjusted to account for size of grid
//----------------------------------
function noise(num){
  return (Math.random() * 10/ (Math.random()^num));
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    camera.up = cameraUp;
    camera.lookAt(camera.position.clone().add(cameraLookAt));
}
render();
