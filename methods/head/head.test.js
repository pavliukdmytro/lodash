const head = require('./head');

test('head must return first element of the array', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head([])).toBeUndefined();
});