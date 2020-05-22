const sortedUniqBy = (arr, iteratee) => {
    const uniqArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!uniqArr.find(el => iteratee(el) === iteratee(arr[i]))) {
            uniqArr.push(arr[i]);
        }
    }
    
    return uniqArr;
};

module.exports = sortedUniqBy;