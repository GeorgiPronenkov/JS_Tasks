function deepCount(arr) {

	let count = 0;
	for (let i = 0; i < arr.length; i++){
		count ++;
		for (let j = 0; j < arr[i].length; j++) {
			count ++;
			for (let k = 0; k < arr[i][j].length; k++) {
				count++
			}
		}
	}
	return count
}
console.log(deepCount([1,2, [3,4,6, [5,6,7]]])); //10
