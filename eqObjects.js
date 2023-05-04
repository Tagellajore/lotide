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
  };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};


const eqObjects = function(object1, object2) { // Declare function eqObjects, that takes two objects as parameters


let obj1Keys = Object.keys(object1);
let obj2Keys = Object.keys(object2);
if (obj1Keys.length === obj2Keys.length) { //compare lengths, not equal returns false
    for (const key of obj1Keys) {
      if (obj1Keys[key] === obj2Keys[key]) {  ///compare both objects values for that key
        if (Array.isArray(object1[key])) { //if both arrays, pass to eqArrays, ensure true
          if (!eqArrays(object1[key], object2[key])) {  //no match, return false 
            return false;
          }
        } else if (object1[key] !== object2[key]) { //assumes primitives, compares values 
          return false;
        }
    }
  }
} else {
  return false;
}
return true;  
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject);

console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject) , true));
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject) , false));

console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject) , true));
