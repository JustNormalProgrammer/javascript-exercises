const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((result, num) => {
    return result + num;
  }, 0)
};

const multiply = function(nums) {
  return nums.reduce((result, num) => result * num, 1);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	if(num === 0) return 1;
  return factorial(num-1) * num;
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
