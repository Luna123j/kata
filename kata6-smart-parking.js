const whereCanIPark = function (spots, vehicle) {
  let spot = [-1, -1];

  for (let i = 0; i < spots.length; i++) {
    for (let k = 0; k < spots[i].length; k++) {
      if (vehicle === 'regular' && spots[i][k] === 'R') {
        spot = [k, i];
        break;
      } else if (vehicle === 'small' && (spots[i][k] === 'R' || spots[i][k] === 'S')) {
        spot = [k, i];
        break;
      } else if (vehicle === 'motorcycle') {
        if (spots[i][k] === 'R' || spots[i][k] === 'S' || spots[i][k] === 'M') {
          spot = [k, i];
          break;
        }
      }
    }
  }

  if (spot[0] === -1 && spot[1] === -1) {
    return false;
  } else {
    return spot;
  }
}
  ;

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))