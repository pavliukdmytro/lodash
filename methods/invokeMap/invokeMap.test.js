const invokeMap = require('./invokeMap');

test('invokeMap must return new array of results', () => {
	expect(invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'))
		.toEqual([[1, 5, 7], [1, 2, 3]]);
	
	expect(invokeMap([123, 456], String.prototype.split, ''))
		.toEqual([['1', '2', '3'], ['4', '5', '6']]);
});