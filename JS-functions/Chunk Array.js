/**
 * Array chunk solution, accepts two params, array and chunk size;
 *
 * [1,2,3,4,5], 2 => [[1,2], [3,4],[5]];
 * [1,2,3,4,5], 3 => [[1,2,3], [45]];
 * @param array
 * @param size
 * @returns {*[][]} flatten
 */
function chunk(array, size) {

	//1:
	const chunkArray = (arr = [], size) => {
		return Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
			arr.slice(i * size, i * size + size)
		);
	};

	//2
	const chunkedArr = [];
	let index = 0;
	while (index < array.length) {
		chunkedArr.push(array.slice(index, index + size));
		index += size;
	}
	return chunkedArr;
}

console.log(chunk([1,2,3,4,5], 3));
