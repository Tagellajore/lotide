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
  }


const words = ["ground", "control", "to", "major", "tom"];

/*const mappedWord = words.map(function(word){
return word;
});
console.log(mappedWord);*/

const map = function(array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(map(words, word => word[1]), [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'M', 't' ]));