const pullAt = require('./pullAt');

test('pullAt must return array with deleted elements', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(pullAt(array, [1, 3])).toEqual(['b', 'd']);
    
    const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j'];
    expect(pullAt(array2, [1, 3, 4, 6])).toEqual([ 'b', 'd', 'e', 'g' ]);
});