const squareCode = function (message) {
  let code = '';
  let decoded = [];
  let number = [];
  let x = 0;
  message = message.replace(/ /g, '');
  let sqrt = Math.ceil(Math.sqrt(message.length));
  for (let i = 0; i < sqrt; i++) {
    for (let k = i; k < message.length; k += sqrt) {
      code += message[k];
    }
    code += ' ';
  }



  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));