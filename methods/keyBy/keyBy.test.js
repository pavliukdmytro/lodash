const keyBy = require('./keyBy');

test('keyBy must return the composed aggregate object', () => {
	const array = [
		{ 'dir': 'left', 'code': 97 },
		{ 'dir': 'right', 'code': 100 }
	];
	const callback = (o) => {
		return String.fromCharCode(o.code);
	};
	const result = { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } };
	expect(keyBy(array, callback)).toEqual(result);
	
	const result2 = { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } };
	expect(keyBy(array, 'dir')).toEqual(result2);
	
});