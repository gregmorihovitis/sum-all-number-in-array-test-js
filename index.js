function sumItems(array) {
  // Sum all the numbers in the array
  return array.reduce(function fnctn(a, b) {
    if (Array.isArray(b)) {
        return b.reduce(fnctn, a);
    } 
    else if (b === Math.floor(b)) {
        return a + b;
    } 

    return a;
}, 0);
}

module.exports = sumItems;