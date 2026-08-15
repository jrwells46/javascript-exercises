const fibonacci = function(num) {
  const index = parseInt(num);
  
  if (index < 0) {
    return 'OOPS';
  }

  let sequence = [0, 1];

  for (let i = 1; i < index; i++) {
    sequence.push(sequence[i] + sequence[i - 1]);
  }

  return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
