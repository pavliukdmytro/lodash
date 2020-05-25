const unzipWith = (arr, iteratee) => {
    const newArr = [];
   
    const regroup = (el) => {
        for(let key in el) {
            if(newArr[key] !== undefined) {
                newArr[key].push(el[key])
            } else {
                newArr[key] = [el[key]];
            }
        }
    };
    
    for(let key in arr) {
        regroup(arr[key]);
    }
    
    return newArr.map(el => iteratee(...el));
};

module.exports = unzipWith;