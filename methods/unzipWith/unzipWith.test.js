const unzipWith = require('./unzipWith');
const zip = require('../zip/zip');
const add = require('../add/add');

test('unzipWith must return regrouped array', () => {
    const zipped = zip([1, 2], [10, 20], [100, 200]);
    expect(unzipWith(zipped, add)).toEqual([3, 30, 300]);
});