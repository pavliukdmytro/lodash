const uniqWith = require('./uniqWith');
const isEqual = require('../isEqual/isEqual');

test('uniqWith must return correct array with uniq values', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    expect(uniqWith(objects, isEqual)).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]);
});