const forEachRight = require('./forEachRight');

test('forEachRight must corrected iterate array from right to left', () => {
    const mockCallback = jest.fn(() => '');
    forEachRight([1, 2], mockCallback);
    
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(2);
    expect(mockCallback.mock.calls[0][1]).toBe(1);
    
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.calls[1][1]).toBe(0);
    
    const mockCallback2 = jest.fn((el) => el === 2 ? false : '' );
    forEachRight([1, 2], mockCallback2);
    expect(mockCallback2.mock.calls.length).toBe(1);
});