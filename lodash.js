const Lodash = require('./index');
const _ = new Lodash();

const objects = [{'x': 4}, {'x': 5}];
//expect(sortedIndex(arr3, 40)).toBe(4);

console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));

//console.log(objects);

//const objects = [{'x': 4}, {'x': 5}];

