const pull = (arr, ...values) => {
    
    return arr = arr.filter(el => {
        for(let i = 0; i < values.length; i++) {
            if(values[i] === el) {
                return false;
            }
        }
        return true;
    });
    
};

module.exports = pull;