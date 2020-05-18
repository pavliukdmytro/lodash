const flattenDeep = require('./flattenDeep');

test('flattenDeep must return array one deep', () => {
   expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
});