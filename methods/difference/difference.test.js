const difference = require('./difference');

test('difference must return correct array', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
});