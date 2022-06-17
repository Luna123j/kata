const camelCase = function (input) {
  let output = input;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      output = output.slice(0, i) + input[i + 1].toUpperCase() + input.slice(i + 2, input.length)
    }
  }
  return output.replace(/ /g, '');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));