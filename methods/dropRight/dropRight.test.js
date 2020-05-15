const dropRight = require('./dropRight');

test('dropRight must return correct cut array', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
});