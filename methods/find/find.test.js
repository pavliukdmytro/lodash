const find = require('./find');

test('find must return first element that will be true', () => {
	const users = [
		{ 'user': 'barney',  'age': 36, 'active': true },
		{ 'user': 'fred',    'age': 40, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': true }
	];

	expect(find(users, function(o) { return o.age < 40; }))
		.toEqual({ 'user': 'barney',  'age': 36, 'active': true });

	expect(find(users, { 'age': 1, 'active': true }))
		.toEqual({ 'user': 'pebbles', 'age': 1,  'active': true });

	expect(find(users, ['active', false]))
		.toEqual({ 'user': 'fred',    'age': 40, 'active': false });

	expect(find(users, 'active'))
		.toEqual({ 'user': 'barney',  'age': 36, 'active': true });
	
	const users2 = [
		{ 'user': 'barney',  'age': 36, 'active': true },
		{ 'user': 'ted',  'age': 37, 'active': true },
		{ 'user': 'fred',    'age': 40, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': true }
	];
	
	expect(find(users2, function(o) { return o.age < 40; }, 1))
		.toEqual({ 'user': 'ted',  'age': 37, 'active': true });
	
});