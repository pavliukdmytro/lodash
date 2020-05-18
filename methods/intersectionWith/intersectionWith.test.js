const intersectionWith = require('./intersectionWith');
const Lodash = require('../../index');
const _ = new Lodash();

test('intersectionWith must return corrected the same value of arrays', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    expect(intersectionWith(objects, others, _.isEqual)).toEqual([{ 'x': 1, 'y': 2 }])
});