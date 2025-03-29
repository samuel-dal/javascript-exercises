const fibonacci = function(inputNum) {
  let fibArr = [1, 1];
  let lastFib;
  for (let i = 0; i < inputNum - 2; i++) {
    fibArr.push(parseInt(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]));
    lastFib = fibArr[fibArr.length - 1];
  }
  return lastFib;
};

// Do not edit below this line
module.exports = fibonacci;
