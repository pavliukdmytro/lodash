const last = require('./last');

test('last must return ast element of array', () => {
    expect(last([1, 2, 3])).toBe(3);
});