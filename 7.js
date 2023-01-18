function countOfOdd(arr) {
 arr = [ '1', '3', '2', '4' ];

const res = arr
  .map( (el) => parseInt(el) )  // эл.ты массива в число
  .filter( (num) => num%2 )     // отфильтруем нечетные
  .reduce( (max, value) => Math.max(max, value), 0 ); // количество

console.log(res); 
}
countOfOdd("rez");