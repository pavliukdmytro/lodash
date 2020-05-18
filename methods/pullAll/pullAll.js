const pullAll = (arr, values) => {
    
    for(let i = 0; i < values.length; i++) {
        for(let x = 0; x < arr.length; x++) {
            if(values[i] === arr[x]) {
                arr.splice(x, 1);
            }
        }
    }
    
    return arr;
    
};

module.exports = pullAll;