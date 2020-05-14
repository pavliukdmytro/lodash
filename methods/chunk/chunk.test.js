const chunk = require('./chunk');

test('chunk must return correct array', () => {
    const exp = [['a', 'b'], ['c', 'd']];
    const exp2 = [['a', 'b', 'c'], ['d']];
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual(exp);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual(exp2);
});