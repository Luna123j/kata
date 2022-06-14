const conditionalSum = function (values, condition) {
  let evenSum = 0;
  let oddSum = 0;

  for (let value of values) {
    value % 2 === 0 ? evenSum += value : oddSum += value;
  }

  return condition === 'even' ? evenSum : condition === 'odd' ? oddSum : 0;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));