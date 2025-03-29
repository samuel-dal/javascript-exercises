const palindromes = function (inputVal) {
  let reverseVal = '';
  for (let i = inputVal.length - 1; i >= 0; i--) {
    reverseVal += inputVal[i];
  }
  return reverseVal.toLowerCase() === inputVal.toLowerCase();
};//for of

// Do not edit below this line
module.exports = palindromes;
