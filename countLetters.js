const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  for (let char of sentence) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};


console.log(countLetters("lighthouse in the house"));

