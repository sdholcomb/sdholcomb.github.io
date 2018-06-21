function TerrainGen(){

}

//=====================================================================
//genMidpointDisplacement: generates terrain using midpoint displacement
//=====================================================================
TerrainGen.prototype.genMidpointDisplacement = function(wholesize, height, roughness, edgeheights = [1,1,1,1]){
  //create displacement map
  var dpm = [];
  for(var i = 0; i < wholesize; i++){
      dpm[i] = [];
    for(var j = 0; j < wholesize; j++){
      dpm[i][j] = 0;
    }
  }

  var tl, tr, bl, br;
  tl = Math.random() * edgeheights[0];
  tr = Math.random() * edgeheights[1];
  br = Math.random() * edgeheights[2];
  bl = Math.random() * edgeheights[3];

  subDivide(dpm, 0, 0, tl, tr, br, bl, wholesize, 1);
  return dpm;

  //-----------------------------------------
  //subDivide: recursively called on smaller squares
  //          to do midpoint displacement
  //-----------------------------------------
  function subDivide(dpm, x, y, c1, c2, c3, c4, size, stage){
    var e1, e2, e3, e4, mid;

    var halfsize = Math.ceil(size/2);

    if(size >= 2){

      e1 = (c1 + c2) / 2 + Math.random()/2; //topedge
      e2 = (c2 + c3) / 2 + Math.random()/2; //right edge
      e3 = (c3 + c4) / 2 + Math.random()/2; //bottom edge
      e4 = (c4 + c1) / 2 + Math.random()/2; //left edge
      mid = (c1 + c2 + c3 + c4) / 4 + noise(stage,size); //mid point

      stage += 1.5;

      subDivide(dpm, x, y, c1, e1, mid, e4, halfsize, stage); //top left square
      subDivide(dpm, x + halfsize - 1, y, e1, c2, e2, mid, halfsize, stage); //top right square
      subDivide(dpm, x + halfsize - 1, y + halfsize - 1, mid, e2, c3, e3, halfsize, stage); //bottom right square
      subDivide(dpm, x, y + halfsize - 1, e4, mid, e3, c4, halfsize, stage); //bottom left square
    }
    else{
      var c = (c1 + c2 + c3 + c4) / 4;
      dpm[y+1][x+1] = c;
    }
  }
  //----------------------------------
  //noise: Simple noise based on stage of the recursion
  //      and params set when generated
  //----------------------------------
  function noise(num,currentsize){
    return (Math.random() * (currentsize/wholesize * height + roughness)/ (Math.random()^num));
  }
}

//=====================================================================
//flattenArray: flattens 2D array to 1D and returns new array
//=====================================================================
TerrainGen.prototype.flattenArray = function(array){
  var flattened = array[0];
  for(var i = 1; i < array.length; i++){
    flattened = flattened.concat(array[i]);
  }
  return flattened;
}
