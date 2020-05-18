const lastIndexOf = require('./lastIndexOf');

test('lastIndexOf must return correct element index', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
    expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toBe(1);
    expect(lastIndexOf([1, 2, 1, 2], 3, 2)).toBe(-1);
});