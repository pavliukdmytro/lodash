const pullAllBy = (arr, values, iteratee) => {
    
    for(let x = 0; x < values.length; x++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i][iteratee] === values[x][iteratee]){
                arr.splice(i, 1);
            }
        }
    }
    
    return arr;
};

module.exports = pullAllBy;