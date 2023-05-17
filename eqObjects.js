const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
