/**
 * Calculate Average number of Array
 *
 */

function average(numbers) {

	return numbers
		   .reduce((a, b) => (a + b) / numbers.length);
}
console.log(average([3,6,5,8,10]));
