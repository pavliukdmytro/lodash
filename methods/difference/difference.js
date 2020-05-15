function difference(array, values) {
    const diff = [];
    
    for(let key of array){
        if(!values.includes(key)) {
            diff.push(key);
        }
    }
    
    return diff;
}

module.exports = difference;