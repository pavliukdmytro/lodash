const takeRight = require('./takeRight');

test('takeRight must return slice array taken from the end', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
});