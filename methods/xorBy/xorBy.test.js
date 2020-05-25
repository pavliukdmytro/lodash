const xorBy = require('./xorBy');

test('xorBy must return uniq array', () => {
    expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2, 3.4]);
    expect(xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')).toEqual([{ 'x': 2 }]);
});