const isType = require('../../helpers/isType/isType');

function differenceBy(mainArr, secondArr, iteratee) {
    const diff = [];
    
    elementPresent: for(let i = 0; i < mainArr.length; i++) {
        
        for(let x = 0; x < secondArr.length; x++) {
            if(isType(iteratee) === 'Function') {
                if(iteratee(mainArr[i]) === iteratee(secondArr[x])){
                    continue elementPresent;
                }
            } else if(isType(iteratee) === 'String') {
                if(mainArr[i][iteratee] === secondArr[x][iteratee]){
                    continue elementPresent;
                }
            }
        }
        diff.push(mainArr[i]);
    }
    
    return diff;
}


module.exports = differenceBy;