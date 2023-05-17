const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let result = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", "2", "3"], [1, "tagel", "3"]));
console.log(without(["1", "2", "3"], []));

const words = ["hello", "world", "lighthouse"];
const without1 = without(words, ["lighthouse"]);
console.log(assertArraysEqual(without1, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));



