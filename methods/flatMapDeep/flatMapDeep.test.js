const flatMapDeep = require('./flatMapDeep');

test('flatMapDeep must return new flattened array', () => {
	function duplicate(n) {
		return [[[n, n]]];
	}
	expect(flatMapDeep([1, 2], duplicate)).toEqual([1, 1, 2, 2]);
	
	function duplicate2(n) {
		return [[[[n, n]]]];
	}
	expect(flatMapDeep([1, 2, 3], duplicate2)).toEqual([1, 1, 2, 2, 3, 3]);
});