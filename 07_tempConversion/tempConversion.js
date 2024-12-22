//°F = (x - 32) * ⁠5/9⁠ °C
const convertToCelsius = function(tempF) {
  newTempC = (tempF - 32) * 5 / 9;
  return Math.round(newTempC * 10) / 10;
};
//°C ≘ (x ×⁠ 9/5 - 32) °F
const convertToFahrenheit = function(tempC) {
  newTempF = (tempC * 9 / 5) + 32;
  return Math.round(newTempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
