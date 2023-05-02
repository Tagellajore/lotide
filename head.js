const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

//Test code
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([7]), 7));
console.log(assertEqual(head([]), 7));