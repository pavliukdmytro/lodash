const Lodash = require('./index');
const _ = new Lodash();

const array = [1, 2, 3];

//const excludeUsers = [
//    { 'user': 'barney',  'active': true },
//    { 'user': 'fred',    'active': false },
//];

console.log(_.fill(Array(3), 2));
//[{ 'user': 'barney',  'active': true }]