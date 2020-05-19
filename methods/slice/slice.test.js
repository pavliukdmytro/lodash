const slice = require('./slice');

test('slice must return slice of array', () => {
    const arr = [1,2,3,4,5,6,7];
    expect(slice(arr, 0, 4)).toEqual([1,2,3,4]);
    
    const arr2 = [1,2,3,4,5,6,7];
    expect(slice(arr2, 0)).toEqual(arr2);
});