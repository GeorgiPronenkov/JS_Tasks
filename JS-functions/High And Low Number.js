/**
 * Highest and Lowest number in string
 *
 * Given a string of space separated numbers, return the highest and lowest number. * highAndLow("1 2 3 4 5"); // return "5 1"
 */

function numbers(inputStr) {

	let arr = inputStr
		      .split(' ')
		      .map(Number);

	return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
console.log(numbers('1 9 3 4 -5')); //-5 9
