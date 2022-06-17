const checkAir = function (samples, threshold) {
  let numberOfDirty = 0;
  let numberOfClean = 0;
  for (let sample of samples) {
    if (sample === 'clean') {
      numberOfClean += 1;
    } else if (sample === 'dirty') {
      numberOfDirty += 1;
    }
  }
  if (numberOfDirty / (numberOfClean + numberOfDirty) >= threshold) {
    return 'Polluted'
  } else {
    return 'Clean'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
