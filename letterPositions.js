
const assertArraysEqual = function(actual, expected) {
  if(actual.length !== expected.length) {
    return `Assertion Failed : ${actual} !== ${expected}`;
  }
  for (let i = 0; i < actual.length; i++) {
    if(actual[i] !== expected[i]) {
      return `Assertion Failed : ${actual} !== ${expected}`;  
    }
  }
  return `Assertion Passed : ${actual} === ${expected}`;
  /*if (actual === expected) {
    return `Assertion Passed : ${actual} === ${expected}`;
  } else {
    return `Assertion Failed : ${actual} !== ${expected}`;
  }*/
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i <arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const letterPositions = function (sentence) {
  const results = {};
  for (letter in sentence) {
    let char = sentence[letter];
    if (sentence[letter] !== ' ') {
      if (!results[char]) {
        results[char] = [letter] 
      } else {
        results[char].push(letter)
      }
    }
    

  } 
  return results;
};


console.log(letterPositions("hello"));
