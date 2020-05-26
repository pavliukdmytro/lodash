const zipObjectDeep = require('./zipObjectDeep');

test('zipObjectDeep must return corrected object', () => {
    const arr = ['a.b[0].c', 'a.b[1].d'];
    const obj = { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } };
    expect(zipObjectDeep(arr, [1, 2])).toEqual(obj);
    
    const arr2 = ['a[0].c', 'a[1].d'];
    const obj2 = { 'a': [{ 'c': 1 }, { 'd': 2 }] };
    expect(zipObjectDeep(arr2, [1, 2])).toEqual(obj2);
    
    const arr3 = ['as1.asd.c5[0].c1', 'as1.asd.c5[1].d1'];
    const obj3 = {
        as1: {
            asd: {
                c5: [{ 'c1': 1 }, { 'd1': 2 }]
            }
        }
    };
    expect(zipObjectDeep(arr3, [1, 2])).toEqual(obj3);
    
    const arr4 = ['a.b[1].c', 'a.b[2].d'];
    const obj4 = { 'a': { 'b': [undefined, { 'c': 1 }, { 'd': 2 }] } };
    expect(zipObjectDeep(arr, [1, 2])).toEqual(obj);
});