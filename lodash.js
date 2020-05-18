const Lodash = require('./index');
const _ = new Lodash();

let array = ['a', 'b', 'c', 'a', 'b', 'c'];


console.log(_.pullAll(array, ['a', 'c']));
console.log(array);