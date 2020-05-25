const add = require('./add');

test('add must return the total', () => {
   expect(add(2,3)).toBe(5);
   expect(add(17,26)).toBe(43);
});