const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};
const countLetters = function(sentence) {
  const results = {};
  for (let char of sentence) {
    console.log(char);
    if(char !== ' ') {
      if (results[char]) {
      results[char] += 1
    } else {
      results[char] = 1;
    }
  }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));