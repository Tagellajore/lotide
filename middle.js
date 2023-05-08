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
}


const middle = function(array) {
  let midIndex = Math.floor(array.length/2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[midIndex - 1], array[midIndex]];
  } else {
    return [array[midIndex]];
  }
}

/*console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));*/




module.exports = middle;
