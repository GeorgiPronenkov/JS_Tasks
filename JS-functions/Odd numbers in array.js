function odd(arr) {
	return arr.filter(num => num % 2 !== 0) //num => num % 2
}
console.log(odd([5,13,8,10]));