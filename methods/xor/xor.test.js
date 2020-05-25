const xor = require('./xor');

test('xor must return array with uniq values', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
    expect(xor([2, 1], [2, 3], [5])).toEqual([1, 3, 5]);
    expect(xor([1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5,6])).toEqual([6]);
});