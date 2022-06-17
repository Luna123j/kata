const calculateChange = function (total, cash) {
  let change = cash - total;
  let changeObj = {
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  }
  let numChange = 0;
  while (change > 0) {
    if (change >= 2000) {
      numChange = Math.floor(change / 2000);
      changeObj.twentyDollars = numChange;
      change = change % 2000;
    } else if (change >= 1000) {
      numChange = Math.floor(change / 1000);
      changeObj.tenDollars = numChange;
      change = change % 1000;
    } else if (change >= 500) {
      numChange = Math.floor(change / 500);
      changeObj.fiveDollars = (numChange);
      change = change % 500;
    } else if (change >= 200) {
      numChange = Math.floor(change / 200);
      changeObj.twoDollars = numChange;
      change = change % 200;
    } else if (change >= 100) {
      numChange = Math.floor(change / 100);
      changeObj.oneDollar = numChange;
      change = change % 100;
    } else if (change >= 25) {
      numChange = Math.floor(change / 25);
      changeObj.quarter = numChange;
      change = change % 25;
    } else if (change >= 10) {
      numChange = Math.floor(change / 10);
      changeObj.dime = numChange;
      change = change % 10;
    } else if (change >= 5) {
      numChange = Math.floor(change / 5);
      changeObj.nickel = numChange;
      change = change % 5;
    } else if (change >= 1) {
      numChange = Math.floor(change);
      changeObj.penny = numChange;
      change = 0;
    }
  }

  return changeObj;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));