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
    
    const objects2 = [{ 'x': 3 },{ 'x': 4 }, { 'x': 5 }];
    expect(sortedIndexBy(objects2, { 'x': 4 }, function(o) { return o.x; })).toBe(1);
    
    const objects3 = [{ 'x': 4 },{ 'x': 4 }, { 'x': 4 }];
    expect(sortedIndexBy(objects3, { 'x': 4 }, function(o) { return o.x; })).toBe(0);
    //
    const objects4 = [{ 'x': 4 },{ 'x': 5 }, { 'x': 6 }];
    expect(sortedIndexBy(objects4, { 'x': 4 }, function(o) { return o.x; })).toBe(0);
    
    const objects5 = [{ 'x': 2 },{ 'x': 3 }, { 'x': 4}];
    expect(sortedIndexBy(objects5, { 'x': 4 }, function(o) { return o.x; })).toBe(2);
});