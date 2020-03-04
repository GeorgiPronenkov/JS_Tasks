// Create a function that accepts two arrays and returns a merged array;

function merge(arr1, arr2) {
	//
	return arr1.concat(arr2);
	
	//!!!
	return merged = [...arr1, ...arr2];
	
	//
	arr1.push(...arr2); 
	return arr1;
}
console.log(merge([1,2,3], [4,5,6]));
