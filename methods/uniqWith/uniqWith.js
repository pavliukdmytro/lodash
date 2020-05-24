const uniqWith = (arr, comparator) => {
    const newArr = [];
    
    const checkUniq = (val) => {
        for(let key in newArr) {
            if(comparator(val, newArr[key])) {
                return false;
            }
        }
        return true;
    };
    
    arr.forEach(val => {
        if(checkUniq(val)) {
            newArr.push(val);
        }
    });
    
    return newArr;
};

module.exports = uniqWith;