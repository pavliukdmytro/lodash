const Lodash = require('./index');
const _ = new Lodash();
const isEqual = require('./methods/isEqual/isEqual');

const zipped = _.zip(['a', 'b'], [1, 2], [true, false]);

console.log(_.unzip(zipped));

