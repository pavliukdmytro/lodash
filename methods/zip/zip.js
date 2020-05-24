const zip = (...arr) => {
    const zipArr = [];
    
    const createArrays = (arr) => {
        const newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(zipArr[i] !== undefined) {
                zipArr[i].push(arr[i]);
            } else {
                zipArr[i] = [arr[i]];
            }
        }
        return newArr;
    };
    
    for(let i in arr) {
        createArrays(arr[i]);
    }
    return zipArr;
};

module.exports = zip;