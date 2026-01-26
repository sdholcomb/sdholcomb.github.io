function TerrainGen(){}

//=====================================================================
//genMidpointDisplacement: generates terrain using midpoint displacement
//=====================================================================
TerrainGen.prototype.genMidpointDisplacement = function(wholeSize, height, roughness, edgeHeights = [1,1,1,1]){
  //create displacement map
  var displacementMap = [];
  for(var i = 0; i < wholeSize; i++){
      displacementMap[i] = [];
    for(var j = 0; j < wholeSize; j++){
      displacementMap[i][j] = 0;
    }
  }

  var tl, tr, bl, br;
  tl = Math.random() * edgeHeights[0];
  tr = Math.random() * edgeHeights[1];
  br = Math.random() * edgeHeights[2];
  bl = Math.random() * edgeHeights[3];

  subDivide(displacementMap, 0, 0, tl, tr, br, bl, wholeSize, 1);
  return displacementMap;

  //-----------------------------------------
  //subDivide: recursively called on smaller squares
  //          to do midpoint displacement
  //-----------------------------------------
  function subDivide(displacementMap, x, y, c1, c2, c3, c4, size, stage){
    var e1, e2, e3, e4, mid;

    var halfSize = Math.ceil(size/2);

    if(size >= 2){

      e1 = (c1 + c2) / 2 + Math.random()/2; //top edge
      e2 = (c2 + c3) / 2 + Math.random()/2; //right edge
      e3 = (c3 + c4) / 2 + Math.random()/2; //bottom edge
      e4 = (c4 + c1) / 2 + Math.random()/2; //left edge
      mid = (c1 + c2 + c3 + c4) / 4 + noise(stage,size); //mid point

      stage += 2;

      subDivide(displacementMap, x, y, c1, e1, mid, e4, halfSize, stage); //top left square
      subDivide(displacementMap, x + halfSize - 1, y, e1, c2, e2, mid, halfSize, stage); //top right square
      subDivide(displacementMap, x + halfSize - 1, y + halfSize - 1, mid, e2, c3, e3, halfSize, stage); //bottom right square
      subDivide(displacementMap, x, y + halfSize - 1, e4, mid, e3, c4, halfSize, stage); //bottom left square
    }
    else{
      var c = (c1 + c2 + c3 + c4) / 4;
      displacementMap[x+1][y+1] = c;

      if(x == 0 || y == 0)
        displacementMap[x][y] = c;
    }
  }

  //----------------------------------
  //noise: Simple noise based on stage of the recursion
  //      and params set when generated
  //----------------------------------
  function noise(stage, currentSize){
    var value = (Math.random() * (currentSize/wholeSize * height + roughness) / (Math.random()^stage));
    return (Math.random() > 0.5 || currentSize == wholeSize) ? value : -value;
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
