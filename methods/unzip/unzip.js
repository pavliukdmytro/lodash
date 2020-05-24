const unzip = (arr) => {
    let newArray = [];
    
    const regroup = (arr) => {
        for(let i in arr) {
            if(newArray[i] !== undefined) {
                newArray[i].push(arr[i]);
            } else {
                newArray[i] = [arr[i]];
            }
        }
    };
    
    for(let i in arr) {
        regroup(arr[i]);
    }
    
    return newArray;
};

module.exports = unzip;