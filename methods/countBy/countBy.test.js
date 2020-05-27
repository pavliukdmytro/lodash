const countBy = require('./countBy');

test('countBy must return correct object with counting elements', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 });
    expect(countBy(['one', 'two', 'three'], 'length')).toEqual({ '3': 2, '5': 1 });
});