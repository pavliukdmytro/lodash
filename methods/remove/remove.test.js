const remove = require('./remove');

test('remove must return removed elements from array', () => {
    const array = [1, 2, 3, 4];
    
    expect(remove(array, function(n) {
        return n % 2 == 0;
    })).toEqual([2, 4]);
    
    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    expect(remove(array2, function(n) {
        return n % 2 == 0;
    })).toEqual([2, 4,6,8,10]);
});