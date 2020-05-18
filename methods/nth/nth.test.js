const nth = require('./nth');

test('nth must return current element from array', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, 1)).toBe('b');
});