/**
 * Flatten and sort an array
 *
 * Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the
 * sorted (ascending) order.
 *
 *  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function flattenSort(array) {

	//1:
	return array
		   .reduce((acc, curr) => [...acc, ...curr], [])
		   .sort((a,b) => a-b);

	//2:
	return array
		   .reduce((acc, val) => acc.concat(val),[])
		   .sort((a,b) => a-b);

	//3 rest operator
	return []
		   .concat(...array)
		   .sort((a,b) => a-b);
}

console.log(flattenSort([[3, 2, 1], [4, 6, 5], [], [10, 7, 8]]));
