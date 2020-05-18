const Lodash = require('./index');
const _ = new Lodash();

const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];


console.log(_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x'));
console.log(array);