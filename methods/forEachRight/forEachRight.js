const forEachRight = (arr, callback) => {
    
    for(let i = arr.length - 1; i >= 0; i--) {
        const call = callback(arr[i], i, arr);
        if(call === false) break;
    }
    
    return arr;
};

module.exports = forEachRight;