const eqObjects = require('./');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return `Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };

console.log(assertObjectsEqual(object1, object2));