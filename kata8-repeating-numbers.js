const repeatNumbers = function (arrays) {
  let result = '';
  for (let array of arrays) {
    for (let i = 0; i < array[1]; i++) {
      result += array[0];
    }
    if (arrays.length > 1 && array != arrays[arrays.length - 1]) {
      result += ',';
    }
  }
  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[92, 2], [92, 2]]));