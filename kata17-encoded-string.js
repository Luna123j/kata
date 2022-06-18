const urlDecode = function (text) {
  let decoded = {};
  text = text.replace(/%20/g, ' ');
  let textArray = text.split('&');

  for (let i = 0; i < textArray.length; i++) {
    let info = textArray[i].split('=');
    decoded[info[0]] = info[1];
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);