const pullAt = (array, elements) => {
    const removeElements = [];
    
    for(let i = 0; i < elements.length; i++) {
        //console.log(array.splice( elements[i] - i, 1));
        removeElements.push(...array.splice( elements[i] - i, 1));
    }
    
    return removeElements;
};

module.exports = pullAt;