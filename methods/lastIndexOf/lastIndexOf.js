const lastIndexOf = (arr, value, index = 0) => {
    
    for(let i = arr.length - index - 1; i >= 0; i--) {
        if(arr[i] === value) {
            return i;
        }
    }
    
    return -1;
    
};

module.exports = lastIndexOf;