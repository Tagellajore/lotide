const assertArraysEqual = require('../assertArraysEqual');



const middle = require('../middle');


console.log(assertArraysEqual(middle([1,2,3]) , [2]));
console.log(assertArraysEqual(middle([1,2,3]) , [10]));
