/**
 * Form The Minimum
 *
 * Given a list of digits, return the smallest number that could be formed from these digits, using the digits only
 * once ( ignore duplicates).
 *
 * minValue({1, 9, 3, 1, 7, 4, 6, 6, 7})  ==> (134679)
 */

function minValue(arr) {

	return [...new Set(arr)]
		   .sort((a,b) => a-b)
		   .join('');
}
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));
