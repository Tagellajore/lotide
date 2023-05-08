const assertEqual = require('../assertEqual');

const head = require('../head');





//Test code
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([6]), 7));
console.log(assertEqual(head([]), 7));