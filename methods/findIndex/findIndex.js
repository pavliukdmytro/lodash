const isEqual = require('../isEqual/isEqual');
const isType = require('../../helpers/isType/isType');

const findIndex = (arr, predicate) => {
    if(isType(predicate) === 'Function') {
        return arr.findIndex(predicate);
    } else if(isType(predicate) === 'Array') {
        return arr.findIndex( el => el[predicate[0]] === predicate[1]);
    } else if(isType(predicate) === 'String') {
        return arr.findIndex( el => !!el[predicate]);
    }
    return arr.findIndex( el => isEqual(el, predicate));
};

module.exports = findIndex;