const pullAllWith = (array, values, comparator) => {
    
    for(let i = 0; i < values.length; i++) {
        for(let x = 0; x < array.length; x++) {
            if(comparator(values[i], array[x])) {
                array.splice(x, 1);
            }
        }
    }
    
    return array;
};

module.exports = pullAllWith;