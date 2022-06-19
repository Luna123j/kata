const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let k = 0; k < 8; k++) {
      if (whiteQueen[1] === k && whiteQueen[0] === i) {
        board[i][k] = 1;
      } else if (blackQueen[1] === k && blackQueen[0] === i) {
        board[i][k] = 1;
      } else {
        board[i][k] = 0;
      }
    }
  }
  return board;
}
const queenThreat = function (generateBoard) {
  if (
    (blackQueen[0] + blackQueen[1]) === (whiteQueen[0] + whiteQueen[1]) ||
    (blackQueen[0] === whiteQueen[0]) ||
    (blackQueen[1] === whiteQueen[1])
  ) {
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
