const sortedLastIndexOf = require('./sortedLastIndexOf');

test('sortedLastIndexOf must return the index of the matched value, else -1', () => {
    expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);
    expect(sortedLastIndexOf([4, 5, 5, 5, 6], 7)).toBe(-1);
    expect(sortedLastIndexOf([5, 5, 5], 5)).toBe(2);
    expect(sortedLastIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
    expect(sortedLastIndexOf([5, 6, 7, 8, 9], 5)).toBe(0);
});