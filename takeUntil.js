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
  }

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
 
 const takeUntil = function(array, callback) {
    // ...
    let results = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        results = array.slice(0, i);
        return results;
      }
    }
    return results;
  };



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]));

console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'Hollywood' ]));
