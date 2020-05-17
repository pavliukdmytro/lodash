const findIndex = require('./findIndex');

test('findIndex must return correct index', () => {
    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(findIndex(users, function(o) { return o.user == 'barney'; })).toBe(0);
    
    expect(findIndex(users, { 'user': 'fred', 'active': false })).toBe(1);
    expect(findIndex(users, { 'user': 'barney',  'active': false })).toBe(0);
    
    expect(findIndex(users, ['active', false])).toBe(0);
    
    expect(findIndex(users, 'active')).toBe(2);
    
});