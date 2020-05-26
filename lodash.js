const Lodash = require('./index');
const _ = new Lodash();
const isEqual = require('./methods/isEqual/isEqual');


//const zipped = _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);

console.log(_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
    return a + b + c;
}));


//const _ = require('lodash');

//console.log(_.xor([2, 1], [2, 3], [5]));

// TODO: last methods is xor

