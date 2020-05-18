const isType = require('../../helpers/isType/isType');
const isEqual = require('../isEqual/isEqual');

const intersectionBy = (arr1, arr2, iteratee) => {
    const newArray = [];
    
    for(let i = 0; i < arr1.length; i++) {
        for(let x = 0; x < arr2.length; x++) {
            if(isType(iteratee) === 'Function') {
                if(isEqual(iteratee(arr1[i]), iteratee(arr2[x]))) {
                    newArray.push(arr1[i]);
                }
            } else if(isType(iteratee) === 'String') {
                if(arr1[i][iteratee] === arr2[x][iteratee]) {
                    newArray.push(arr1[i]);
                }
            }
        }
    }
    
    return newArray;
};

module.exports = intersectionBy;