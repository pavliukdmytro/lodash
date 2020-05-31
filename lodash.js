//const Lodash = require('./index');
//const _ = new Lodash();
//const isEqual = require('./methods/isEqual/isEqual');
//
//const users = [
//    { 'user': 'barney', 'age': 36, 'active': false },
//    { 'user': 'fred',   'age': 40, 'active': false }
//];
//
//console.log(_.every(users, 'active'));

// TODO: last methods is forEachRight

const _ = require('lodash');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

console.log(_.filter(users, function(o) { return !o.active; }));
