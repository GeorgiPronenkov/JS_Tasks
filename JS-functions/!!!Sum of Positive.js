/**
 * Sum of positive
 *
 * Given an array of numbers, return the sum of all of the positives ones.
 * [1,-4,7,12] => 1 + 7 + 12 = 20
 */

//1st
 function positive(arr) {

 	for (let i = 0; i < arr.length; i++) {
 		if (arr[i] < 0) {
			return false;
		}
		else if (arr[i] >= 0) {
 		   let sums = 0;
 		   sums += arr[i];
 		   return sums;
 		}
 	}
 }
console.log(positive([1,-4,7,12]));

//2: with filter and reduce
function sumOfPositives(arr) {

	let positives = arr.filter(a => a > 0);
	return positives.reduce((a, b) => a + b, 0);
	//2.1
	return arr.filter(a => a > 0)
		      .reduce((a, b) => a + b, 0);
}
console.log(sumOfPositives([1,-4,7,12]));

//3:
function sumOfPositives(input) {

	return input.reduce((result, currentVal) => {
		if(currentVal > 0){
			return result += currentVal;
		}
		return result;
	}, 0);
}
console.log(sumOfPositives([1,-4,7,12]));
