const pullAll = require('./pullAll');

test('pullAll must return filter array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    expect(pullAll(array, ['a', 'c'])).toEqual(['b', 'b']);
});