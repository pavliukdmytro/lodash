const flattenDepth = (arr, depth) => {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) && depth > 0){
            newArr = [...newArr, ...flattenDepth(arr[i], depth - 1)];
        } else {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
    
};


module.exports = flattenDepth;