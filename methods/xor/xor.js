const xor = (...arrays) => {
    const newArr = [];
    const allArr = [];
    
    arrays.forEach(el => allArr.push(...el));
    
    allArr.forEach((el, i) => {
        let uniq = true;
        
        allArr.forEach((val, key) => {
            if(key === i) return;
            if(el === val) uniq = false;
        });
        
        if(uniq) {
            newArr.push(el);
        }
    });
    
    return newArr;
};

module.exports = xor;