const isType = require('../../helpers/isType/isType');
const isEqual = require('../isEqual/isEqual');

const every = (arr, predicate) => {
  const predicateType = isType(predicate);
  
  for(let key in arr) {
    if (predicateType === 'Function' && !predicate(arr[key])) {
      return false;
    } else if (predicateType === 'Object' && !isEqual(predicate, arr[key])) {
      return false;
    } else if (predicateType === 'Array' && predicate[1] !== arr[key][predicate[0]]) {
      return false;
    } else if (predicateType === 'String' && !arr[key][predicate]) {
      return false;
    }
  }
  return true;
};

module.exports = every;