const sumLargestNumbers = function(array){
  array = array.sort(function(a, b){return a - b});
  return array[array.length-1]+array[array.length-2];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([-1,10, 4, 34, 6, 92, 2]));