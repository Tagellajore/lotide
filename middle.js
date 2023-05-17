const middle = function(array) {
  let midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[midIndex - 1], array[midIndex]];
  } else {
    return [array[midIndex]];
  }
};

console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));

module.exports = middle;
