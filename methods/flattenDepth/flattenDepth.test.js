const flattenDepth = require('./flattenDepth');

test('flattenDepth must return correct an array with selected depth', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
});