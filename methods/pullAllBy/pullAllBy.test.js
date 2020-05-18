const pullAllBy = require('./pullAllBy');

test('pullAllBy must return correct array with deleted elements', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    expect(pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')).toEqual([{ 'x': 2 }]);
});