const isType = require('../../helpers/isType/isType');

const groupBy = (arr, iteratee) => {
	const obj = {};
	
	for(let key in arr) {
		
		const name = iteratee === 'length' ? arr[key].length : iteratee(arr[key]);
		
		
		
		if (obj[name] === undefined) {
			obj[name] = [arr[key]];
		} else {
			obj[name].push(arr[key]);
		}
	}
	
	return obj;
};

module.exports = groupBy;