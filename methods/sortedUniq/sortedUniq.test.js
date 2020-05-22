const sortedUniq = require('./sortedUniq');

test('sortedUniq must return only uniq array elements', () => {
    expect(sortedUniq([1,1,2])).toEqual([1,2]);
});