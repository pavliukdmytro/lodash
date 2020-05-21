const sortedIndex = (arr, value) => {
    let center = Math.floor((arr.length - 1) / 2);
    
    if(arr.length <= 2) {
        if(arr[center] > value && arr[center +1] > value) {
            return 0;
        } else if(arr[center] < value && arr[center + 1] > value) {
            return 1;
        } else if(arr[center] < value && arr[center + 1] === value) {
            return 1;
        } else if(arr[center + 1] < value) {
            return 2;
        } else if(arr[center] > value && arr[center +1] === undefined) {
            return 0;
        } else if(arr[center] < value && arr[center + 1] === undefined) {
            return 1;
        }
        return 0;
    } else if(arr[center] < value) {
        return (center + sortedIndex(arr.slice(center), value));
    } else if(arr[center] > value) {
        return sortedIndex(arr.slice(0, center + 1), value);
    } else if(arr[center] === value) {
        return sortedIndex(arr.slice(0, center + 1), value);
    }
    
};

module.exports = sortedIndex;