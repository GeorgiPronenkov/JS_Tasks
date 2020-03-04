function sumTwoSmallestNumbers(numbers) {

	 let sorted = numbers.sort((a, b) => a - b, 0)
	 					 .slice(0,2);
	 return sorted.reduce((a,b) => a +b);
}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //6
