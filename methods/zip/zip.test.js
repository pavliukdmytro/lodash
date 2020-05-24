const zip = require('./zip');

test('zip must return correct grouped elements', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});