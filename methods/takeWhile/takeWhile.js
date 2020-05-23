const isType = require('../../helpers/isType/isType');
const isEqual = require('../isEqual/isEqual');

const takeWhile = (arr, iterate) => {
    const sliceArr = [];
    let comparator = iterate;
    
    if(isType(iterate) === 'Object') {
        comparator = (el) => isEqual(el, iterate);
    } else if(isType(iterate) === 'Array') {
        comparator = (el) => el[iterate[0]] === iterate[1];
    }
    
    for(let i = 0; i < arr.length; i++) {
        
        if(!comparator(arr[i])){
            return sliceArr;
        }
        
        sliceArr.push(arr[i]);
    }
    
};

module.exports = takeWhile;