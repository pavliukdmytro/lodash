const isType = require('../../helpers/isType/isType');

const invokeMap = (collection, method, arg) => {
	if (method === 'sort') {
		return collection.map(el => {
			return el.sort();
		});
	} else if (isType(method) === 'Function') {
		return collection.map(el => method.call(el.toString(), arg));
	}
};

module.exports = invokeMap;