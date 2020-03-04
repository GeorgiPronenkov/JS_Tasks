function randomArray() {

	let array = [];
	while(array.length < 10) {
		let random = Math.floor(Math.random() * 10);
		if(!array.includes(random)) array.push(random);
	}
	return array;
}
console.log(randomArray([1,2,3,4,]));
