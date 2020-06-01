const flatMapDepth = require('./flatMapDepth');

test('flatMapDepth must return new flattened array', () => {
	function duplicate(n) {
		return [[[n, n]]];
	}
	expect(flatMapDepth([1, 2], duplicate, 3)).toEqual([[[1, 1]], [[2, 2]]]);
	expect(flatMapDepth([1, 2], duplicate, 8)).toEqual([[[1, 1]], [[2, 2]]]);
	expect(flatMapDepth([1, 2], duplicate, 2)).toEqual([[1, 1], [2, 2]]);
	expect(flatMapDepth([1, 2], duplicate, 1)).toEqual([1, 1, 2, 2]);
	
	
	function duplicate2(n) {
		return [[[[[[[n, n]]]]]]];
	}
	expect(flatMapDepth([1, 2], duplicate2, 2)).toEqual([[1, 1], [2, 2]]);
	expect(flatMapDepth([1, 2], duplicate2, 3)).toEqual([[[1, 1]], [[2, 2]]]);
});