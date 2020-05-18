const indexOf = (arr, value, index = 0) => {
    
    for(let i = index; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    
    return -1;
};

module.exports = indexOf;