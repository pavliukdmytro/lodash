const pullAll = require('./pullAll');

test('pullAll must return filter array', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    //console.log(pullAll(array, ['a', 'c']));
    expect(pullAll(array, ['a', 'c'])).toEqual(['b', 'b']);
});