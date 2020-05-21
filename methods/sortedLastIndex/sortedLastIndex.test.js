const sortedLastIndex = require('./sortedLastIndex');

test('sortedLastIndex must return correct index for insert value', () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
    
    expect(sortedLastIndex([5, 5, 5, 5, 5], 5)).toBe(5);
    expect(sortedLastIndex([5, 5, 5, 5, 6], 5)).toBe(4);
    expect(sortedLastIndex([5, 5, 5, 6, 7], 5)).toBe(3);
    expect(sortedLastIndex([5, 5, 6, 7, 8], 5)).toBe(2);
    expect(sortedLastIndex([5, 6, 7, 8, 9], 5)).toBe(1);
    expect(sortedLastIndex([6, 7, 8, 9], 5)).toBe(0);
    
    expect(sortedLastIndex([], 5)).toBe(0);
    expect(sortedLastIndex([5], 5)).toBe(1);
    expect(sortedLastIndex([6], 5)).toBe(0);
    expect(sortedLastIndex([4], 5)).toBe(1);
    
    expect(sortedLastIndex([1,2,3,4,5,6,7,8,9,10], 5)).toBe(5);
    expect(sortedLastIndex([1,2,3,4,5], 5)).toBe(5);
    expect(sortedLastIndex([1,2,3,4], 5)).toBe(4);
    expect(sortedLastIndex([5,5,5], 5)).toBe(3);
    expect(sortedLastIndex([5,5,5,5,5], 5)).toBe(5);
});