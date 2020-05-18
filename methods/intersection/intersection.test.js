const intersection = require('./intersection');

test('intersection must return the same value of the arrays', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
});