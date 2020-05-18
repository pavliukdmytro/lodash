const intersectionWith = (arr1, arr2, comparator) => {
    let sameValue = [];
    
    for(let i = 0; i < arr1.length; i++) {
        for(let x = 0; x < arr2.length; x++) {
            if(comparator(arr1[i], arr2[x])) {
                sameValue.push(arr1[i]);
            }
        }
    }
    
    return sameValue;
};

module.exports = intersectionWith;