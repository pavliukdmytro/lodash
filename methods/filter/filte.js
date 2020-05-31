const isType = require('../../helpers/isType/isType');

const filter = (arr, iteratee) => {
  let filterArr = [];
  let iterateType = isType(iteratee);
  
  mark: for(let i = 0; i < arr.length; i++) {
    
    if (iterateType === 'Function' && !iteratee(arr[i], i)) {
      continue;
    } else if (iterateType === 'Object') {
      
      for(let key in iteratee) {
        if(iteratee[key] !== arr[i][key]) {
          continue mark;
        }
      }
      
    } else if (iterateType === 'Array' && arr[i][iteratee[0]] !== iteratee[1]) {
      continue;
    } else if(iterateType === 'String' && !arr[i][iteratee]) {
      continue;
    }
    
    filterArr.push(arr[i]);
  }
  
  return filterArr;
};

module.exports = filter;