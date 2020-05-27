const countBy = (countBy, iteratee) => {
    const obj = {};
    let convert = iteratee;
    
    if(typeof iteratee === 'string') {
        convert = (str) => str.length;
    }
    
    countBy.forEach(el => {
        const key = convert(el);
        
        if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            obj[key]++;
        }
    });
    
    return obj;
};

module.exports = countBy;