function chunk(arr, split) {
    const newArray = [];
    let tmpArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        if((i + 1) % split === 0 && i !== 0) {
            tmpArray.push(arr[i]);
            newArray.push(tmpArray);
            tmpArray = [];
            continue;
        }
        tmpArray.push(arr[i]);
    }
    if(tmpArray.length > 0) {
        newArray.push(tmpArray);
    }
    
    return newArray;
}

module.exports = chunk;