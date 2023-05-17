const tail = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};

console.log(tail([1,2,3]));

module.exports = tail;