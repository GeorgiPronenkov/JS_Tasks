/**
 * Nth Smallest Element
 *
 * Given an array of integers, find the Nth smallest element in this array
 *
 * nthSmallest({3,1,2} ,2) ==> return (2)
 */
function solve(arr,nth) {

	return arr.sort((a, b) => a - b)[nth-1]; //?
}
console.log(solve([6,1,2,4],3));
