const every = require('./every');

test('every must return true if all elements be true', () => {
  expect(every([true, 1, null, 'yes'], Boolean)).toEqual(false);
  
  const users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  
  expect(every(users, { 'user': 'barney', 'active': false })).toEqual(false);
  expect(every(users, ['active', false])).toEqual(true);
  expect(every(users, 'active')).toEqual(false);
});