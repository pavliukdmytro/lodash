const isEqual = require('../isEqual/isEqual');

const intersection = (arr1, arr2) => {
    const sameValues = [];
    
    for(let i = 0; i < arr1.length; i++) {
        for(let x = 0; x < arr2.length; x++) {
            if(isEqual(arr1[i], arr2[x])) {
                sameValues.push(arr1[i]);
            }
        }
    }
    
    return sameValues;
};

module.exports = intersection;