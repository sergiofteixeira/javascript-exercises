const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  return (array.reduce(add, 0))
};

const multiply = function (array) {
  total = array.reduce((arg, item) => (arg * item), 1);
  return total
};
multiply([1, 2, 3])

const power = function (a, b) {
  return a ** b
};

const factorial = function (num) {
  result = num;
  if (num < 0) {
    return -1
  }
  if (num === 0 || num === 1) {
    return 1
  }
  while (num > 1) {
    num--
    result = result * num
  }
  return result

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
