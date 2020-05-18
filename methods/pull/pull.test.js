const pull = require('./pull');

test('pull must correctly deleted elements from array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    expect(pull(array, 'a', 'c')).toEqual(['b', 'b']);
});