const concat = require('./concat');

test('concat must return correct array', () => {
    const array = [1];
    expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
    expect(concat(array, 2, [3,14], [[4]])).toEqual([1, 2, 3, 14, [4]]);
    expect(concat(array)).toEqual([1]);
});