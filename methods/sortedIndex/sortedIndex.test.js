const sortedIndex = require('./sortedIndex');

test('sortedIndex must return correct index for sorted array to insert the item', () => {
    const arr = [30,50];
    expect(sortedIndex(arr, 40)).toBe(1);
    
    const arr1 = [30,40,50];
    expect(sortedIndex(arr1, 40)).toBe(1);
    
    const arr2 = [30, 40, 40, 41, 42, 43, 50];
    expect(sortedIndex(arr2, 40)).toBe(1);
    
    const arr3 = [0, 10, 20, 30];
    expect(sortedIndex(arr3, 40)).toBe(4);
    
    const arr4 = [50, 60, 70, 80];
    expect(sortedIndex(arr4, 40)).toBe(0);
    
    expect(sortedIndex([], 40)).toBe(0);
    expect(sortedIndex([30], 40)).toBe(1);
    expect(sortedIndex([50], 40)).toBe(0);
    expect(sortedIndex([40], 40)).toBe(0);
    
    
    expect(sortedIndex([40,40,40,40], 40)).toBe(0);
});