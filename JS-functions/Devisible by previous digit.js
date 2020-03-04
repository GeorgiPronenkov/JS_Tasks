/**
 * Divisible by previous digit?
 *
 * Take a number and check each digit if it is divisible by the digit on its left checked and return an array of
 * booleans. The booleans should always start with false becase there is no digit before the first one.
 *
 * 73312 => [false, false, true, false, true]
 */
function divisible(number) {

	return number
		   .toString()
		   .split('')
		   .map((value, index, arr) => value % arr[index - 1] === 0);
}
console.log(divisible(73312));
