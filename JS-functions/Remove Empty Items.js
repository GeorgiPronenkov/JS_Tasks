/**
 * Remove Empty Items of Array
 *
 * [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined] => [1, 2, 3, 4, null, undefined]
 */
function emptyItems(arr) {

	return Object.values(arr)
}

console.log(emptyItems([1, 2, 3, ,,,,,, null, undefined]));