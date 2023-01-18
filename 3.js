var arr = [ 1, 3, 2, 3, 6, 2 ];

function getMaxIndexOfArray(arr) {
  var i, maxV, maxP;
  for( i = 0; i < arr.length; i++) {
    if( typeof maxV === "undefined" || arr[i] > maxV ) {
      maxV = arr[i];
      maxP = i;
    }
  }
  
  console.log(maxP);
}

getMaxIndexOfArray(arr);