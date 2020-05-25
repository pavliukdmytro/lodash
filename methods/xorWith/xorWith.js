const xorWith = (...arg) => {
    const newArr = [];
    const oldArray = [];
    const comparator = arg[arg.length - 1];
    
    arg.forEach( (arr, i) => {
        if(i === arg.length - 1) return;
        oldArray.push(...arr);
    });
    
    oldArray.forEach((el, i) => {
        let uniq = true;
        
        oldArray.forEach( (val, key) => {
            if(i === key) return;
            if(comparator(val, el)) uniq = false;
        });
        
        if(uniq) {
            newArr.push(el);
        }
    });
    
    return newArr;
};

module.exports = xorWith;