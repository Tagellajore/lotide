const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
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


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));
