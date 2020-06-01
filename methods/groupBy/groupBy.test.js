const groupBy = require('./groupBy');

test('groupBy must return object with grouped keys from value', () => {
	expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
	expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ '3': ['one', 'two'], '5': ['three'] });
});