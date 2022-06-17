const makeCase = function(input, cases) {
  let output = input;
  let caseStyle1=['camel','pascal','snake','kebab','title'];
  let caseStyle2=['vowel','consonant'];
  let caseStyle3=['upper','lower'];
  
  
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));