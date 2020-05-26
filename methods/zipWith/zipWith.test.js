const zipWith = require('./zipWith');

test('zipWith must return new array of grouped elements', () => {
    expect(zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
        return a + b + c;
    })).toEqual([111, 222]);
    
    
    expect(zipWith([1, 2], [10, 20], function(a, b) {
        return a + b;
    })).toEqual([11, 22]);
});