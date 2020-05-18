const join = require('./join');

test('join must return correct string from array', () => {
    expect(join(['a', 'b', 'c'], '~')).toBe('a~b~c');
});