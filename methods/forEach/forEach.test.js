const forEach = require('./forEach');

test('forEach must corrected iterate array', () => {
    const mockCallback = jest.fn(() => ' ');
    forEach([1, 2], mockCallback);
    
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.calls[0][1]).toBe('0');
    expect(mockCallback.mock.calls[1][1]).toBe('1');
    expect(mockCallback.mock.calls[0][2]).toEqual([1, 2]);
    expect(mockCallback.mock.calls[1][2]).toEqual([1, 2]);
    
    const mockCallback2 = jest.fn(() => false);
    forEach([1, 2], mockCallback2);
    
    expect(mockCallback2.mock.calls.length).toBe(1);
    
    const mockCallback3 = jest.fn(() => ' ');
    forEach({ 'a': 1, 'b': 2 }, mockCallback3);
    
    expect(mockCallback3.mock.calls.length).toEqual(2);
    expect(mockCallback3.mock.calls[0][0]).toBe(1);
    expect(mockCallback3.mock.calls[1][0]).toBe(2);
    expect(mockCallback3.mock.calls[0][1]).toBe('a');
    expect(mockCallback3.mock.calls[1][1]).toBe('b');
    
    expect(mockCallback3.mock.calls[1][2]).toEqual({ 'a': 1, 'b': 2 });
    expect(mockCallback3.mock.calls[1][2]).toEqual({ 'a': 1, 'b': 2 });
    
});