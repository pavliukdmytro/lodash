const isType = require('../../helpers/isType/isType');

const findLast = (arr, predicate, indexFrom = 0) => {
	let check = predicate;
	
	if (isType(predicate) === 'Object') {
		check = (obj) => {
			for(let key in predicate) {
				if(predicate[key] !== obj[key]) return false;
			}
			return true;
		}
	} else if (isType(predicate) === 'Array') {
		check = (obj) => {
			if(obj[predicate[0]] !== predicate[1]) return false;
			return true;
		}
	} else if (isType(predicate) === 'String') {
		check = (obj) => {
			if(!obj[predicate]) return false;
			return true;
		}
	}
	for(let i = arr.length - 1 - indexFrom; i >= 0; i--) {
		if(check(arr[i])) return arr[i];
	}
};

module.exports = findLast;