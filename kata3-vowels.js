const numberOfVowels = function (data) {
  let vowel = 0;
  for(let i=0; i<data.length;i++){
    let char = data.charAt(i);
    if(char==='a'||char==='e'|| char==='i'||char==='o'||char==='u'){
      vowel+=1;
    }
  }
  
  return vowel;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));