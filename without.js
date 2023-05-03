const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed : ${actual} === ${expected}`;
  } else {
    return `Assertion Failed : ${actual} !== ${expected}`;
  }
}

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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let element of source) {
    if(!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};


/*const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove[i].includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};*/


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", "2", "3"], [1, "tagel", "3"]));
console.log(without(["1", "2", "3"], []));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));


