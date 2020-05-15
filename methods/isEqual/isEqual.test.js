const isEqual = require('./isEqual');

describe('isEqual', () => {
    test('must correct compaire Objects', () => {
        
        expect(isEqual({ 'a': 1 }, { 'a': 1 })).toBe(true);
        expect(isEqual({ 'a': 1 }, { 'a': '1' })).toBe(false);
        expect(isEqual({ 'a': 1 }, { 'b': 1 })).toBe(false);
        expect(isEqual({ 'a': 1, b: 2 }, { 'a': 1 })).toBe(false);
        
        const deepObg1 = { a: { b: 3 } };
        const deepObg2 = { a: { b: 3 } };
        expect(isEqual(deepObg1, deepObg2)).toBe(true);
        
        const deepObg3 = { a: { b: 3 } };
        const deepObg4 = { a: { b: 4 } };
        expect(isEqual(deepObg3, deepObg4)).toBe(false);
    
        const deepObg5 = { a: { b: 3 } };
        const deepObg6 = { a: { b: 3, c: 'some'} };
        expect(isEqual(deepObg5, deepObg6)).toBe(false);
    
        const deepObg7 = { a: [4] };
        const deepObg8 = { a: 4 };
        expect(isEqual(deepObg7, deepObg8)).toBe(false);
    
        const deepObg9 = { a: [4] };
        const deepObg10 = { a: [4] };
        expect(isEqual(deepObg9, deepObg10)).toBe(true);
    
        const deepObg11 = { a: [4, {c: 12}] };
        const deepObg12 = { a: [4, {c: 13}] };
        expect(isEqual(deepObg11, deepObg12)).toBe(false);
    
        const deepObg13 = { a: [4, {c: 12}] };
        const deepObg14 = { a: [4, {c: 12}] };
        expect(isEqual(deepObg13, deepObg14)).toBe(true);
        
    });
    
    test('must correct compair Array', () => {
        expect(isEqual([1], [1])).toBe(true);
        expect(isEqual(['1'], [1])).toBe(false);
        expect(isEqual([1], [])).toBe(false);
        expect(isEqual([1], [2])).toBe(false);
    
        expect(isEqual([1], [[2]])).toBe(false);
        expect(isEqual([[2]], [[2]])).toBe(true);
        
        expect(isEqual([[2], {c: 14}], [[2], {c: 14}])).toBe(true);
        
        expect(isEqual([[2], {c: 14}], [[2], {c: '14'}])).toBe(false);
    });
    
    test('must correct compair String', () => {
        expect(isEqual('1', '1')).toBe(true);
        expect(isEqual('1', 1)).toBe(false);
    });
    
    test('must correct compair other', () => {
        expect(isEqual(undefined, undefined)).toBe(true);
        expect(isEqual(undefined, NaN)).toBe(false);
        expect(isEqual(NaN, undefined)).toBe(false);
        expect(isEqual(null, undefined)).toBe(false);
    
        expect(isEqual(NaN, NaN)).toBe(true);
        expect(isEqual(null, NaN)).toBe(false);
        
        expect(isEqual(null, null)).toBe(true);
        
        expect(isEqual(true, true)).toBe(true);
        expect(isEqual(false, false)).toBe(true);
        expect(isEqual(false, true)).toBe(false);
        expect(isEqual(true, false)).toBe(false);
        
        expect(isEqual(0, 0)).toBe(true);
        
        expect(isEqual('', 0)).toBe(false);
        
        expect(isEqual(/a/, /a/)).toBe(true);
        expect(isEqual(/a/, /ab/)).toBe(false);
    
        expect(isEqual(new Date(), new Date())).toBe(true);
        
        expect(isEqual(new Date(), new Date() - 200)).toBe(false);
    });
});

