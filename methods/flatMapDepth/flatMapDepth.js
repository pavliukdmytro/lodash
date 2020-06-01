const flatMapDepth = (arr, iteratee, depth = 1) => {
	let newArr = [];
	
	arr.forEach(el => {
		
		const align = (arr, depth) => {
			if (Array.isArray(arr[0])){
				const deepAlign = align(arr[0], depth);
				
				if (deepAlign < depth) {
					return deepAlign + 1
				} else if(deepAlign >= depth) {
					return arr[0];
				}
				return deepAlign;
				
			} else {
				return 1;
			}
		};
		
		const itElem = iteratee(el);
		const slice = align(itElem, depth);
		
		Array.isArray(slice) ? newArr.push(...slice) : newArr.push(...itElem);
		
	});
	return newArr;
};

module.exports = flatMapDepth;