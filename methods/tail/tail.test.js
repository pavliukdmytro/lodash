const tail = require('./tail');

test('must return new array without first element', () => {
    expect(tail([1,2,3,4])).toEqual([2,3,4]);
});