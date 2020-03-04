import functions from '../functions';

// test('sum Numbers', () => {
// 	 expect(functions.sumNumbers(2, 2)).toBe(4);
// });
describe('Basic matchers, numbers, Truthiness', () => {
	 it('deep equal ', function () {
		  expect(functions.equal({ a:undefined, b: 2 })).toEqual({ b: 2 });
	 });
	 it('number close to', function () {
		  expect(functions.closeTo(0.2 ,0.1)).toBeCloseTo(0.3, 5);
	 });
	 it('only undefined', function () {
		  expect(functions.truth(undefined)).toBeUndefined();
	 });
});

describe('Testing arrays', () => {
	 it('Check array length', () => {
		  expect(functions.nameList(['Alice', 'Bob', 'Eve'])).toHaveLength(3);
	 });
	 it('Contain string in array', () => {
		  expect(functions.nameList(['Alice', 'Bob', 'Eve'])).toContain('Alice');
	 });
	 it('Contain Equal', () => {
		  expect(functions.nameList([{ a: 1 }, { a: 2 }])).toContainEqual({ a: 1 });
	 });
});

describe('Testing objects', () => {
	 it('To have property', () => {
		  expect(functions.nameList({ a: 1 })).toHaveProperty('a');
	 })
});


// it('throws a new error', () => {
// 	 // const fn = () => { throw new Error('Out of cheese!') };
// 	 expect(functions.throwErrorTest).toThrow();
// 	 expect(functions.throwErrorTest.bind(null, 'Out of cheese')).toThrow('Out of cheese');
// 	 // expect(fn).toThrowErrorMatchingSnapshot()
// });