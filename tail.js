const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

const tail = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs", "Code"]);
console.log(assertEqual(result.length, 3));
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[2], "Code"));

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));
console.log(assertEqual(tail(words).length, 3));


console.log(tail([1,2,3]));
console.log(tail([1]));
console.log(tail([]));


//console.log(tail([1,2,3,4,5]));
//console.log(tail(["Hello", "Lighthouse", "Labs"]));

console.log(assertEqual(tail([1,2,3]).length, [2,3].length));
console.log(assertEqual(tail([1,2,3,4,5]).length, [2, 3, 4, 5].length));
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, ["Labs"].length));
