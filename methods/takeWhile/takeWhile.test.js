const takeWhile = require('./takeWhile');

test('takeWhile must return correct slice of array started from start', () => {
    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];
    expect(takeWhile(users, function(o) { return !o.active; })).toEqual([
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
    ]);
    expect(takeWhile(users, { 'user': 'barney', 'active': false })).toEqual([
        { 'user': 'barney',  'active': false }
    ]);
    expect(takeWhile(users, ['active', false])).toEqual([
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false }
    ]);
    expect(takeWhile(users, ['active'])).toEqual([]);
});