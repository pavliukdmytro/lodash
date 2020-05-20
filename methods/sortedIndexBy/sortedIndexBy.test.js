const sortedIndexBy = require('./sortedIndexBy');

test('sortedIndexBy must return correct index that should be inserted into array', () => {
    const objects = [{'x': 4}, {'x': 5}];
    
    expect(sortedIndexBy(objects, {'x': 4}, function( o ) {
        return o.x;
    })).toBe(0);
    
    expect(sortedIndexBy(objects, {'x': 6}, function( o ) {
        return o.x;
    })).toBe(2);
    
    expect(sortedIndexBy(objects, { 'x': 4 }, 'x')).toBe(0);
    expect(sortedIndexBy(objects, { 'x': 6 }, 'x')).toBe(2);
});