const isType = require('./isType');

test('isType must return correct type', () => {
   expect(isType({})).toBe('Object');
   expect(isType(() => '')).toBe('Function');
});