const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

const multiply = arr => arr.reduce((acc, curr) => acc * curr);

const power = (num1, num2) => num1 ** num2;

const factorial = function(num) {
  const arr = [];
  if (num === 0 || num === 1) {
    return 1;
  };
  for(let i = num; i >= 2; i--) {
    arr.push(i);
  };
  return arr.reduce((acc, curr) => acc * curr);
};
	


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
