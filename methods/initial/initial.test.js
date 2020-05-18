const initial = require('./initial');

test('initial must return an array without the last element', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
});