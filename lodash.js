const Lodash = require('./index');
const _ = new Lodash();

const array = [1];
console.log(_.concat(array, 2, [3], [[4]]));