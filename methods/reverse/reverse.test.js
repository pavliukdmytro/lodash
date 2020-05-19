const reverse = require('./reverse');

test('reverse must reversed array', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});