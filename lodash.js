const Lodash = require('./index');
const _ = new Lodash();
const isEqual = require('./methods/isEqual/isEqual');


function duplicate(n) {
    return [[[n, n]]];
}

console.log(_.flatMapDepth([1, 2], duplicate, 2));

// TODO: last methods is groupBy

//const _ = require('lodash');
//
//var users = [
//    { 'user': 'barney', 'age': 36, 'active': true },
//    { 'user': 'fred',   'age': 40, 'active': false }
//];
//
//console.log(_.filter(users, function(o) { return !o.active; }));
