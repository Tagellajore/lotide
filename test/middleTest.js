const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');



const middle = require('../middle');


describe("#tail", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });



});


// console.log(assertArraysEqual(middle([1,2,3]) , [2]));
// console.log(assertArraysEqual(middle([1,2,3]) , [10]));
