const urlEncode = function (text) {
  if (text.indexOf(0) === " ") {
    text = text.substring(1);
  } else if (text.indexOf(text.length - 1) === " ") {
    text.substring(0, text.length - 1);
  }
  text = text.replace(/ /g, "%20");
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));