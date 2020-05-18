const nth = (arr, index) => {
    if(index < 0) {
        return arr[arr.length - 1 - index * -1];
    }
    return arr[index];
};

module.exports = nth;