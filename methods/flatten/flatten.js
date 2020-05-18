const flatten = (arr) => {
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])) {
            for(let x = 0; x < arr[i].length; x++) {
                newArray.push(arr[i][x]);
            }
        } else {
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
};

module.exports = flatten;