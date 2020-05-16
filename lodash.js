const Lodash = require('./index');
const _ = new Lodash();

const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];

//const excludeUsers = [
//    { 'user': 'barney',  'active': true },
//    { 'user': 'fred',    'active': false },
//];

console.log(_.dropRightWhile(users, ['active', false]));
//[{ 'user': 'barney',  'active': true }]