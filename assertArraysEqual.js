
const eqArrays = require('./eqArrays')


  const assertArraysEqual = function(actual, expected) {
    if (actual === expected) {
      return `Assertion Passed: ${actual} === ${expected}`;
    } else {
      return `Assertion Failed: ${actual} !== ${expected}`;
    }
  };

  console.log(assertArraysEqual(eqArrays([1,2,3], [1,2,2]), true));
  console.log(assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true));


  module.exports = assertArraysEqual;

  