const pullAt = (array, elements) => {
    const removeElements = [];
    
    for(let i = 0; i < elements.length; i++) {
        removeElements.push(...array.splice( elements[i] - i, 1));
    }
    
    return removeElements;
};

module.exports = pullAt;