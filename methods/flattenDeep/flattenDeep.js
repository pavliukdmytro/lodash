const flattenDeep = (arr) => {
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            newArray = [...newArray, ...flattenDeep(arr[i])];
        } else {
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
};

module.exports = flattenDeep;

