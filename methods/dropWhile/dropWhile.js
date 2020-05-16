const isType = require('../../helpers/isType/isType');
const isEqual = require('../isEqual/isEqual');

const dropWhile = (arr, exclude) => {
    if(isType(exclude) === 'Function') {
        return arr.filter(el => !exclude(el));
    };
    
    if(isType(exclude) === 'Array') {
        return arr.filter((el) => {
            if(el[exclude[0]] === exclude[1]) {
                return false
            }
            return true;
        });
    }
    
    return arr.filter((el) => !isEqual(el, exclude));
};

module.exports = dropWhile;