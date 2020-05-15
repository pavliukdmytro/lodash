const Lodash = require('./index');
const _ = new Lodash();


const deepObg3 = /a/;
const deepObg4 = /ab/;


console.log(_.isEqual(deepObg3, deepObg4));
//console.log(_.isEqual([1], [2]));