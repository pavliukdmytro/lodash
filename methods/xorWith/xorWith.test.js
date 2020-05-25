const xorWith = require('./xorWith');
const isEqual = require('../isEqual/isEqual');

test('xorWith must return uniq array', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    expect(xorWith(objects, others, isEqual)).toEqual([{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]);
});