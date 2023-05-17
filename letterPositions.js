const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  for (letter in sentence) {
    let char = sentence[letter];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [letter];
      } else {
        results[char].push(letter);
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));
