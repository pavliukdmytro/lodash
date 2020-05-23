const isType = require('../../helpers/isType/isType');
const isEqual = require('../isEqual/isEqual');

const takeRightWhile = (arr, predicate) => {
    const sliceArray = [];
    let iterate = predicate;
    
    if(isType(predicate) === 'Object') {
        iterate = (el) => isEqual(el, predicate);
    } else if(isType(predicate) === 'Array') {
        iterate = (el) => el[predicate[0]] === predicate[1];
    }
    
    for(let i = arr.length - 1; i >= 0; i-- ) {
        if(!iterate(arr[i])) {
            return sliceArray.reverse();
        }
        sliceArray.push(arr[i]);
    }
};

module.exports = takeRightWhile;