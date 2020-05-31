const flatMap = (arr, callBack) => {
	let newArray = [];
	
	for(let i = 0; i < arr.length; i++) {
		newArray.push(...callBack(arr[i]));
	}
	
	return newArray;
};

module.exports = flatMap;