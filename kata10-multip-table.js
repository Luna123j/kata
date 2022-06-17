const multiplicationTable = function (maxValue) {
  let tableY = [];
  let table = [];
  for (let i = 0; i < maxValue; i++) {
    for (let k = 0; k < maxValue; k++) {
      tableY[k] = (i + 1) * (k + 1);
    }
    table += tableY + "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));