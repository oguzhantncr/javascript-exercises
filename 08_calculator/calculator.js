const add = function(firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function(nums) {
	return nums.reduce((acc, curr) => {return acc + curr}, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, curr) => {return acc * curr});
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  total = 1;
	while (num > 0) {
    total *= num;
    num--;
  }
  return total;
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
