const isType = require('../../helpers/isType/isType');

function isEqual(one, two) {
    let answer = true;
    
    if(isNaN(one) && isNaN(two) &&  isType(one) === 'Number' && isType(two) === 'Number') {
        //it's one === NaN and two === NaN
        return true;
    } else if(isType(one) === 'RegExp' && isType(one) === 'RegExp' &&
        //it's RegExp
        one.toString() === two.toString()
    ) {
        return true
    } else if(isType(one) === 'Date' && isType(one) === 'Date' &&
        //it's Date
        one.toString() === two.toString()
    ) {
        return true
    }
    
    if(isType(one) === 'Array' && isType(one) === 'Array' &&
        one.length !== two.length) {
        answer = false;
    } else if(isType(one) === 'Object' && isType(one) === 'Object' &&
        Object.keys(one).length !== Object.keys(two).length
    ){
        answer = false;
    } else if(isType(one) !== 'Object' && isType(one) !== 'Array' && one !== two) {
        answer = false;
    }
    
    if( isType(one) === 'Array' && isType(one) === 'Array' ||
        isType(one) === 'Object' && isType(one) === 'Object'
    ) {
        for(let key in one) {
            if(isType(one[key]) === 'Object' && isType(two[key]) === 'Object' ||
                isType(one[key]) === 'Array' && isType(two[key]) === 'Array'
            ) {
                answer = isEqual(one[key], two[key]);
            } else if(one[key] !== two[key]) {
                answer = false;
            }
        }
    }
    
    return answer;
    
}

module.exports = isEqual;