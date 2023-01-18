var arr = [ 1, 3, 2, 3, 6, 2 ];

function getMinIndexOfArray(arr) {
  var i, minV, minP;
  for( i = 0; i < arr.length; i++) {
    if( typeof minV === "undefined" || arr[i] < minV ) {
      minV = arr[i];
      minP = i;
    }
  }
  
  console.log(minP);
}

getMinIndexOfArray(arr);