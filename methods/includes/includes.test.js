const includes = require('./includes');

test('includes must check for presence  value in collection', () => {
	expect(includes([1, 2, 3], 1)).toBeTruthy();
	expect(includes([1, 2, 3], 1, 2)).toBeFalsy();
	expect(includes({ 'a': 1, 'b': 2 }, 1)).toBeTruthy();
	expect(includes('abcd', 'bc')).toBeTruthy();
});