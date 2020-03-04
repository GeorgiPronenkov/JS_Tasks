function evenposition(arr) {

	let resultArr = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (i % 2 === 0) {
	// 	    resultArr.push(arr[i]);
	// 	}
	// }

	for (let pos in arr) {
		if (pos % 2 === 1) {
			resultArr.push(arr[pos]);
		}
	}
	console.log(resultArr.join(', '));
}
evenposition(['35', '60', '70', '88', '90', '100', '230']);
