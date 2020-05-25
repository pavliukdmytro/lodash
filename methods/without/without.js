const without = (arr, ...values) => {
    return arr.filter(el => {
        for(let key in values) {
            if(values[key] === el) {
                return false
            }
        }
        return true;
    });
};

module.exports = without;