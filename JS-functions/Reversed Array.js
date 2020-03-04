/**
 * Convert number to reversed array of digits
 *
 * 348597 => [7,9,5,8,4,3]
 */
//string-split-reduceRight

function reversed(number) {

	let nums = number.toString();
	let newN = Array
				.from(nums)
				.map(Number)
				.reverse();
	return newN;
}
console.log(reversed(348597));
