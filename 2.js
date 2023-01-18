function getMaxOfArray(arr){

    var arr = [5, -1, 40, 355, 17, 3];

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[0]){
            arr[0] = arr[i];
        }
    
    }
    console.log(arr[0]);
}
getMaxOfArray("rez");