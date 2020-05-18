const indexOf = require('./indexOf');

test('indexOf must return correct index', () => {
    expect(indexOf([1, 2, 1, 2], 2)).toBe(1);
    expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
});