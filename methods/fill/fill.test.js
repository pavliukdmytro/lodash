const fill = require('./fill');

test('fill must correct fill array', () => {
    const array = [1, 2, 3];
    expect(fill(array, 'a')).toEqual(['a', 'a', 'a']);
    
    expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
    
    
    expect(fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);
});