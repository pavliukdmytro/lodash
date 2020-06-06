const isType = require('../../helpers/isType/isType');

const keyBy = (collection, iteratee) => {
	const obj = {};
	
	for(let key in collection) {
		const current = collection[key];
		const keyName = isType(iteratee) === 'Function' ? iteratee(current) : current[iteratee];
		
		obj[keyName] = current;
	}
	
	return obj;
};

module.exports = keyBy;