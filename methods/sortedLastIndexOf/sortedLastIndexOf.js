const sortedLastIndexOf = (arr, value) => {
    const center = Math.floor((arr.length - 1) / 2);
    
    if(arr.length === 2) {
        if(arr[0] === value && arr[1] === value || arr[1] === value){
            return 1;
        } else if(arr[0] === value) {
            return 0;
        } else {
            return -1;
        }
    }
    
    if(arr[center + 1] <= value) {
        const index = sortedLastIndexOf(arr.slice(center), value);
        return index !== -1 ? center + index : -1;
    } else if(arr[center] >= value) {
        return sortedLastIndexOf(arr.slice(0, center + 1), value);
    }
};

module.exports = sortedLastIndexOf;