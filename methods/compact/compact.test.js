const compact = require('./compact');

test('compact must return correct array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});