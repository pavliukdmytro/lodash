const without = require('./without');

test('without must return filtered array', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(without([2, 1, 2, 3], 1, 2, 3)).toEqual([]);
    expect(without([2, 1, 2, 3], 1, 2, 3)).toEqual([]);
});