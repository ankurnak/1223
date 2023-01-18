function getSumOfOdd() {
     let arr = 0;
    for (let i = 0; i < this.capacity; i++) {
      if ((i+1) % 2 == 0)
        arr = arr + this.array[i];
    }
 
    console.log(arr);
  }
getSumOfOdd("rez");