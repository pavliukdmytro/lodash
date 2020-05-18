const flatten = require('./flatten');

test('flatten must return array flattens array a single level deep ', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
});