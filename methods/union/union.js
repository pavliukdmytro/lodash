const union = (...arg) => {
    const arr = [];
    arg.forEach(el => arr.push(...el));
    
    return Array.from(new Set(arr));
};

module.exports = union;