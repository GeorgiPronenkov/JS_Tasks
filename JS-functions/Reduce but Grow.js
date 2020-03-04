/**
 * Reduce but Grow
 *
 * Given a non-empty array of integers, return the result of multiplying the values together in order.
 *
 * [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

//1:
function reduce(arr) {
	return arr.reduce((a,b)=> a * b, 1);
}
console.log(reduce([1,2,3,4]));

//2: reduceRight
function reduce(arr) {
	const resultArray = arr.reduceRight(
		(accumulator, currentValue) => accumulator * currentValue
	);
	return resultArray;
}
console.log(reduce([1,2,3,4]));
