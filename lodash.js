const Lodash = require('./index');
const _ = new Lodash();

const arr3 = [0, 10, 20, 30];
//expect(sortedIndex(arr3, 40)).toBe(4);

console.log(_.sortedIndex(arr3, 40));
//console.log(array);