const findLastIndex = require('./findLastIndex');

test('findLastIndex must return correct index', () => {
    const users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];
    expect(findLastIndex(users, function(o) { return o.user == 'pebbles'; })).toBe(2);
    expect(findLastIndex(users, { 'user': 'barney', 'active': true })).toBe(0);
    expect(findLastIndex(users, ['active', false])).toBe(2);
    expect(findLastIndex(users, 'active')).toBe(0);
});