const isType = require('../../helpers/isType/isType');
const isEqual = require('../isEqual/isEqual');

const findLastIndex = (arr, predicate) => {
    
    if(isType(predicate) === 'Function') {
        for(let i = arr.length - 1; i >= 0; i--){
            if(predicate(arr[i])) {
                return i;
            }
        }
    } else if(isType(predicate) === 'Array') {
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i][predicate[0]] === predicate[1]) {
                return i;
            }
        }
    } else if(isType(predicate) === 'String') {
        for(let i = arr.length - 1; i >= 0; i--){
            if(!!arr[i][predicate]) {
                return i;
            }
        }
    }
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(isEqual(arr[i], predicate)) {
            return i;
        }
    }
    return -1;
};

module.exports = findLastIndex;