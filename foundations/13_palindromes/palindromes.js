const palindromes = function (phrase) {
  const sanitizedPhrase = phrase
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

  return sanitizedPhrase === sanitizedPhrase.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
