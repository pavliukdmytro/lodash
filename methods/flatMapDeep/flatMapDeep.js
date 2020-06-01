const flatMapDeep = (arr, iteratee) => {
	let newArr = [];
	
	arr.forEach(el => {
		let number = iteratee(el);
		const align = (newArr) => {
			if(Array.isArray(newArr[0])) {
				return align(...newArr);
			}
			return newArr;
		};
		newArr.push(...align(number));
	});
	
	return newArr;
};

module.exports = flatMapDeep;