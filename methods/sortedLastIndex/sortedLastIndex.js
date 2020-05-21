const sortedLastIndex = (arr, value) => {
    const center = Math.floor((arr.length - 1) / 2);
    
    if(arr.length <= 2) {
        if(arr[0] <= value && arr[1] <= value){
            return 2;
        } else if(arr[0] <= value && arr[1] > value) {
            return 1;
        } else if(arr[0] > value && arr[1] > value || arr.length === 0) {
            return 0;
        } else if(arr[0] <= value && arr.length === 1) {
            return 1;
        } else if(arr[0] > value && arr.length === 1) {
            return 0;
        }
    }
    
    if(arr[center] < value && arr.length > 2){
        return center + sortedLastIndex(arr.slice(center), value);
    } else if(arr[center] === value && arr.length > 2) {
        return center + sortedLastIndex(arr.slice(center), value);
    } else if(arr[center] > value && arr.length > 2) {
        return sortedLastIndex(arr.slice(0, center + 1), value);
    }
};

module.exports = sortedLastIndex;