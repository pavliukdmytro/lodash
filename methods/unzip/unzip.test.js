const unzip = require('./unzip');
const zip = require('../zip/zip');

test('unzip must return new array of regrouped elements', () => {
    const zipped = zip(['a', 'b'], [1, 2], [true, false]);
    expect(unzip(zipped)).toEqual([['a', 'b'], [1, 2], [true, false]]);
});