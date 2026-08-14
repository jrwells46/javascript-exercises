const removeFromArray = function(arr, ...elementsToRemove) {
  return arr.filter(el => !elementsToRemove.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
