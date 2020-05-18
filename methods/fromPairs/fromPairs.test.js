const fromPairs = require('./fromPairs');

test('fromPairs must return an object from the array', () => {
    expect(fromPairs([['a', 1], ['b', 2]])).toEqual({'a': 1, 'b': 2})
});