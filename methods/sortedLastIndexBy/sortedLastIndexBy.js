const isType = require('../../helpers/isType/isType');

const sortedLastIndexBy = (arr, value, iteratee) => {
    const center = Math.floor((arr.length - 1) / 2);
    let identity = '';
    
    if(isType(iteratee) === 'Function') {
        identity = iteratee;
    } else if(isType(iteratee) === 'String') {
        identity = (el) => el[iteratee];
    } else {
        return -1;
    }
    
    if(arr.length <= 2) {
        if(identity(arr[0]) <= identity(value) && identity(arr[1]) <= identity(value)){
            return 2;
        } else if(identity(arr[0]) <= identity(value) && identity(arr[1]) > identity(value)) {
            return 1;
        } else if(identity(arr[0]) > identity(value) && identity(arr[1]) > identity(value) || arr.length === 0) {
            return 0;
        } else if(identity(arr[0]) <= identity(value) && arr.length === 1) {
            return 1;
        } else if(identity(arr[0]) > identity(value) && arr.length === 1) {
            return 0;
        }
    }
    
    if(identity(arr[center]) < identity(value) && arr.length > 2){
        return center + sortedLastIndexBy(arr.slice(center), value, iteratee);
    } else if(identity(arr[center]) === identity(value) && arr.length > 2) {
        return center + sortedLastIndexBy(arr.slice(center), value, iteratee);
    } else if(identity(arr[center]) > identity(value) && arr.length > 2) {
        return sortedLastIndexBy(arr.slice(0, center + 1), value, iteratee);
    }
};

module.exports = sortedLastIndexBy;