const fill = (array, substitute, start = 0, end = array.length) => {
    const newArray = array.slice();
    
    for(let i = start; i < end; i++) {
        newArray[i] = substitute;
    }
    
    return newArray;
};


module.exports = fill;