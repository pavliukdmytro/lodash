const Lodash = require('./index');
const _ = new Lodash();

console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));