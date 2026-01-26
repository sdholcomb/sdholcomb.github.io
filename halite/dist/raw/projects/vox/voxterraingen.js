
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
  tl = Math.ceil(Math.random() * wholeHeight);
  tr = Math.ceil(Math.random() * wholeHeight);
  br = Math.ceil(Math.random() * wholeHeight);
  bl = Math.ceil(Math.random() * wholeHeight);

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

    e1 = Math.ceil((c1 + c2) / 2 + Math.random()); //topedge
    e2 = Math.ceil((c2 + c3) / 2 + Math.random()); //right edge
    e3 = Math.ceil((c3 + c4) / 2 + Math.random()); //bottom edge
    e4 = Math.ceil((c4 + c1) / 2 + Math.random()); //left edge
    mid = Math.ceil((c1 + c2 + c3 + c4) / 4 + noise(stage)); //mid point

    if(mid < 0)
      mid = 0;

    stage += 1.5;

    subDivide(dpm, x, y, c1, e1, mid, e4, halfsize, stage); //top left square
    subDivide(dpm, x + halfsize-1, y, e1, c2, e2, mid, halfsize, stage); //top right square
    subDivide(dpm, x + halfsize - 1, y + halfsize - 1, mid, e2, c3, e3, halfsize, stage); //bottom right square
    subDivide(dpm, x, y + halfsize - 1, e4, mid, e3, c4, halfsize, stage); //bottom left square
  }
  else{
    var c = Math.ceil((c1 + c2 + c3 + c4) / 4);
    dpm[y][x] = c;
  }
}
//----------------------------------
//noise: Simple noise based on stage of the recursion.
//        needs to be adjusted to account for size of grid
//----------------------------------
function noise(num){
  return (Math.random() * 5/ (Math.random()^num));
}
