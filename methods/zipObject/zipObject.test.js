const zipObject = require('./zipObject');

test('zipObject must return new object', () => {
    expect(zipObject(['a', 'b'], [1, 2])).toEqual({ 'a': 1, 'b': 2 })
});