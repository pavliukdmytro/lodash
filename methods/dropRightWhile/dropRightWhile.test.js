const dropRightWhile = require('./dropRightWhile');

test('dropRightWhile must return filter array', () => {
    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];
    expect(dropRightWhile(users, function(o) { return !o.active; }))
            .toEqual([{ 'user': 'barney',  'active': true }]);
    
    const excludeUsers = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
    ];
    expect(dropRightWhile(users, { 'user': 'pebbles', 'active': false })).toEqual(excludeUsers);
    
    expect(dropRightWhile(users, ['active', false]))
        .toEqual([{ 'user': 'barney',  'active': true }]);
    
    expect(dropRightWhile(users, 'active'))
        .toEqual([{ 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }]);
});