const isType = require('../../helpers/isType/isType');

const xorBy = (...arg) => {
    const newArr = [];
    const oldArray = [];
    const iterate = arg[arg.length - 1];
    let comparator = iterate;
    
    if(isType(iterate) === 'String') {
        comparator = (obj) => {
            return obj[iterate];
        }
    }
    
    arg.forEach( (arr, i) => {
        if(i === arg.length - 1) return;
        oldArray.push(...arr);
    });
    
    oldArray.forEach((el, i) => {
        let uniq = true;
        
        oldArray.forEach( (val, key) => {
            if(i === key) return;
            if(comparator(val) === comparator(el)) uniq = false;
        });
        
        if(uniq) {
            newArr.push(el);
        }
    });
    
    return newArr;
};

module.exports = xorBy;