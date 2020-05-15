const differenceWith = require('./differenceWith');
const isEqual = require('../isEqual/isEqual');

test('differenceWith must return', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    expect(differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)).toEqual([{ 'x': 2, 'y': 1 }])
});