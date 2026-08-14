const sumAll = function(numOne, numTwo) {
  function isPositiveInteger(num) {
    return typeof num === 'number'
        && num === Math.floor(num)
        && num > 0;
  }

  if (!isPositiveInteger(numOne) || !isPositiveInteger(numTwo)) {
    return 'ERROR';
  }

  const [lowerInt, higherInt] = [numOne, numTwo].sort();

  let sum = 0;

  for (i = lowerInt; i <= higherInt; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
