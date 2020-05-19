const remove = (arr, func) => {
    const deletedElements = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            deletedElements.push(...arr.splice(i, 1));
        }
    }
    
    return deletedElements;
};

module.exports = remove;