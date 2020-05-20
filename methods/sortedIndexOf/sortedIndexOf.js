const sortedIndexOf = (arr, value) => {
    const center = Math.floor((arr.length - 1) / 2);
    
    if(arr[center] === value && arr.length === 1) {
        return center;
    } else if(arr[center] < value) {
        const index = sortedIndexOf(arr.slice(center + 1), value);
        
        return index === -1 ? -1 : center + 1 + index;
    } else if(arr[center] >= value && arr.length > 1) {
        return sortedIndexOf(arr.slice(0, center + 1), value);
    }
    
    return -1;
};

module.exports = sortedIndexOf;