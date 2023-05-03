// have a list of all the attendees
// count the number of times certain names appear on the list

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

// allItems : an array of strings that we need to look through
// itemsToCount : an object specifiying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));