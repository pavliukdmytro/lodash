const sortedUniqBy = require('./sortedUniqBy');

test('sortedUniqBy must return uniq array', () => {
    expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1.1, 2.3]);
})