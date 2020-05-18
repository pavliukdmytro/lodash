const pullAllWith = require('./pullAllWith');
const isEqual = require('../isEqual/isEqual');

test('pullAllWith must return correct array with deleted elements thanks to method', () => {
    const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
    
    expect(pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual))
        .toEqual([{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]);
});