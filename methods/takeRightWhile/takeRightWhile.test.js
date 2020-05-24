const takeRightWhile = require('./takeRightWhile');

test('', () => {
    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];
   expect(takeRightWhile(users, function(o) { return !o.active; })).toEqual([
       { 'user': 'fred',    'active': false },
       { 'user': 'pebbles', 'active': false }
   ]);
   expect(takeRightWhile(users, { 'user': 'pebbles', 'active': false })).toEqual([
       { 'user': 'pebbles', 'active': false }
   ]);
    expect(takeRightWhile(users, ['active', false])).toEqual([
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ]);
    expect(takeRightWhile(users, ['active'])).toEqual([]);
});