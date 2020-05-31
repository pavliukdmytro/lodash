const flatMap = require('./flatMap');

test('flatMap return the new flattened array', () => {
	function duplicate(n) {
		return [n, n];
	}
	expect(flatMap([1, 2], duplicate))
		.toEqual([1, 1, 2, 2]);
});