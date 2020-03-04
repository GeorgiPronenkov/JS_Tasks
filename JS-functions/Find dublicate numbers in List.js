function dublicate(arrNumbers) {

	let newArr = [];
	for (let i = 0; i < arrNumbers.length; i++) {
		if (arrNumbers[i] === arrNumbers[i + 1]) {
		    newArr.push(arrNumbers[i]);
		}
	}
	return newArr;
	
	//2nd variant
	let sortedArr = arrNumbers.sort();
	let uniq = [...new Set(sortedArr)];
	return uniq;
}

console.log(dublicate([1,3,2,5,4,5,7,6,7])); //5
