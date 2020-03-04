function devicible(arrOfNumbers, divisor) {

	// let resultArray = [];
	// for (let num of arrOfNumbers) {
	//      if (num % divisor === 0) {
	//          resultArray.push(num);
	//      }
	// }
	// return resultArray;

	//2nd:
	return arrOfNumbers.filter(value => value % divisor === 0);

}
console.log(devicible([1,2,3,4,5,6], 2));
