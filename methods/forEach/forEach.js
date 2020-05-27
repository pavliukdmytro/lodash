const forEach = (arr, callBack) => {
    
    for(let key in arr) {
        const call = callBack(arr[key], key, arr);
        if ( call === false) break;
    }
    
    return arr;
};

module.exports = forEach;