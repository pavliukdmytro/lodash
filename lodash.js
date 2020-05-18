const Lodash = require('./index');
const _ = new Lodash();

console.log(_.flattenDepth([1, [2, [3, [4]], 5]], 2));