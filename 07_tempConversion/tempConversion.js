const convertToCelsius = function(temperature) {
  return parseInt((((temperature - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  return parseInt((((temperature * 9) / 5) + 32).toFixed(1));
};

//convertToCelsius(32) // fahrenheit to celsius, should return 0

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
