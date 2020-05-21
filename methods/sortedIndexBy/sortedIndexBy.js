const isType = require('../../helpers/isType/isType');

const sortedIndexBy = (arr, value, iteratee) => {
    let center = Math.floor((arr.length - 1) / 2);
    let choose;
    //debugger;
    if(isType(iteratee) === 'Function') {
        choose = iteratee;
    } else if(isType(iteratee) === 'String') {
        choose = (el) => el[iteratee]
    } else {
        return;
    }
    
    if(arr.length <= 2) {
        if(choose(arr[center]) > choose(value) && choose(arr[center + 1]) > choose(value)) {
            return 0;
        } else if(choose(arr[center]) < choose(value) && choose(arr[center + 1]) > choose(value)) {
            return 1;
        } else if(choose(arr[center]) < choose(value) && choose(arr[center + 1]) === choose(value)) {
            return 1;
        } else if(choose(arr[center + 1]) < choose(value)) {
            return 2;
        } else if(choose(arr[center]) > choose(value) && choose(arr[center + 1]) === undefined) {
            return 0;
        } else if(choose(arr[center]) < choose(value) && choose(arr[center + 1]) === undefined) {
            return 1;
        }
        return 0;
    } else if(choose(arr[center]) < choose(value)) {
        return (center + sortedIndexBy(arr.slice(center), value, iteratee));
    } else if(choose(arr[center]) > choose(value)) {
        return sortedIndexBy(arr.slice(0, center + 1), value, iteratee);
    } else if(choose(arr[center]) === choose(value)) {
        return sortedIndexBy(arr.slice(0, center + 1), value, iteratee);
    }
    
};

module.exports = sortedIndexBy;