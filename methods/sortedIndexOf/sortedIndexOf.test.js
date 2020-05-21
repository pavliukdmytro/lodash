const sortedIndexOf = require('./sortedIndexOf');

test('sortedIndexOf must return index of find element another -1', () => {
    expect(sortedIndexOf([4, 5, 5, 5, 6], 5)).toBe(1);
    expect(sortedIndexOf([4, 5, 5, 5, 6], 6)).toBe(4);
    expect(sortedIndexOf([4, 5, 5, 5, 6], 7)).toBe(-1);
    expect(sortedIndexOf([7, 7, 7, 7, 7], 7)).toBe(0);
    expect(sortedIndexOf([6, 7, 7, 7, 7], 6)).toBe(0);
});