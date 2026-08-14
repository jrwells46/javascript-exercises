const repeatString = function(string, num) {
  let repeatedString = num < 0 ? 'ERROR' : '';

  for (i = 0; i < num; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
