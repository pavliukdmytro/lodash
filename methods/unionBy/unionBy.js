const isType = require('../../helpers/isType/isType');
const unionBy = (...arg) => {
    const uniqArr = [];
    let iterable = arg[arg.length - 1 ];
    
    if(isType(iterable) === 'String') {
        iterable = (val) => {
            return val[arg[arg.length - 1 ]];
        }
    }
    
    const checkUniq = (value) => {
        for(let key in uniqArr) {
            if(iterable(uniqArr[key]) === iterable(value)) {
                return false;
            }
        }
        return true;
    };
    
    const checkValue = (value) => {
        if(checkUniq(value)) {
            uniqArr.push(value);
        };
    };
    
    arg.forEach((el, i) => {
        if(i < arg.length - 1) {
            el.forEach(checkValue);
        }
    });
    
    return uniqArr;
};

module.exports = unionBy;