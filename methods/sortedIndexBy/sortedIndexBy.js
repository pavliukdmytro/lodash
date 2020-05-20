const isType = require('../../helpers/isType/isType');

const sortedIndexBy = (arr, value, iteratee) => {
    let center = Math.floor((arr.length - 1) / 2);
    let choose;
    
    if(isType(iteratee) === 'Function') {
        choose = iteratee;
    } else if(isType(iteratee) === 'String') {
        choose = (el) => el[iteratee]
    } else {
        return ;
    }
    
    if(arr.length <= 2) {
        if(choose(arr[center]) > choose(value) && choose(arr[center + 1]) > choose(value)) {
            return 0;
        } else if(choose(arr[center]) < choose(value) && choose(arr[center + 1]) > choose(value)) {
            return 1;
        } else if(choose(arr[center + 1]) < choose(value)) {
            return 2;
        } else if(choose(arr[center]) > choose(value) && choose(arr[center + 1]) === undefined) {
            return 0;
        } else if(choose(arr[center]) < choose(value) && choose(arr[center + 1]) === undefined) {
            return 1;
        }
        return 0;
    } else if(choose(arr[center]) === choose(value)) {
        return center;
    } else if(choose(arr[center]) < choose(value)) {
        return (center + sortedIndex(arr.slice(center), choose(value)));
    } else if(choose(arr[center]) > choose(value)) {
        return sortedIndex(arr.slice(0, center + 1), choose(value));
    }
    
};

module.exports = sortedIndexBy;