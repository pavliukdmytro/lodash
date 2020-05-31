const findLast = require('./findLast');

test('findLast must return the first element true from the end', () => {
	const users = [
		{ 'user': 'barney',  'age': 36, 'active': true },
		{ 'user': 'fred',    'age': 40, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': true },
		{ 'user': 'pebbles', 'age': 1,  'active': false }
	];
	
	expect(findLast([1, 2, 3, 4], function(n) {
		return n % 2 == 1;
	})).toBe(3);
	expect(findLast([1, 2, 3, 4], function(n) {
		return n % 2 == 1;
	}, 2)).toBe(1);
	
	expect(findLast(users, { 'age': 1, 'active': true }))
	.toEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
});