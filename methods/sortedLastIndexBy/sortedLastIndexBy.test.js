const sortedLastIndexBy = require('./sortedLastIndexBy');

test('sortedLastIndexBy must return the index at which value should be inserted into array', () => {
    const objects = [{ 'x': 4 }, { 'x': 5 }];
    
    expect(sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })).toBe(1);
    expect(sortedLastIndexBy(objects, { 'x': 4 }, 'x')).toBe(1);
    
    const objects2 = [{ 'x': 4 },{ 'x': 4 }, { 'x': 5 }];
    expect(sortedLastIndexBy(objects2, { 'x': 4 }, function(o) { return o.x; })).toBe(2);
    
    const objects3 = [{ 'x': 4 },{ 'x': 4 }, { 'x': 4 }];
    expect(sortedLastIndexBy(objects3, { 'x': 4 }, function(o) { return o.x; })).toBe(3);
    
    const objects4 = [{ 'x': 4 },{ 'x': 5 }, { 'x': 6 }];
    expect(sortedLastIndexBy(objects4, { 'x': 4 }, function(o) { return o.x; })).toBe(1);
    
});