const isType = require('../../helpers/isType/isType');

const includes = (collection, value, index = 0) => {
	const collectionType = isType(collection);
	
		if (
			collectionType === 'Array'
			&& collection.slice(index).indexOf(value) !== -1
		) {
			return true;
		} else if (collectionType === 'Object') {
			for(let key in collection) {
				if(collection[key] === value) {
					return true;
				}
			}
		} else if (
			collectionType === 'String'
			&& collection.slice(index).indexOf(value) !== -1
		) {
			return true;
		}
	
	return false;
};

module.exports = includes;

