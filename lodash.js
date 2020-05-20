const Lodash = require('./index');
const _ = new Lodash();

const objects = [{'x': 4}, {'x': 5}];
//expect(sortedIndex(arr3, 40)).toBe(4);

console.log(_.sortedIndexBy(objects, {'x': 6}, function( o ) {
    return o.x;
}));

//console.log(objects);

//const objects = [{'x': 4}, {'x': 5}];

