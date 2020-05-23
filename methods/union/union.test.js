const union = require('./union');

test('union must return array of uniq elements', () => {
    expect(union([2], [1, 2])).toEqual([2, 1]);
    expect(union([2], [1, 2], [1,2,3])).toEqual([2, 1, 3]);
    expect(union([])).toEqual([]);
});