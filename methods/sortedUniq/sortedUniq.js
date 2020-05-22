const sortedUniq = (arr) => Array.from(new Set(arr));

//const sortedUniq = (arr) => {
//    const uniqArr = [];
//
//    for(let i = 0; i < arr.length; i++) {
//        if(uniqArr.indexOf(arr[i]) === -1) {
//            uniqArr.push(arr[i]);
//        }
//    }
//
//    return uniqArr;
//};

module.exports = sortedUniq;