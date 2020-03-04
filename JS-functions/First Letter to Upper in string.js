function toUpper(str) {

	const toUppercase = str
		 				.split(' ')
						.map( word => word[0].toUpperCase() + word.slice(1))
						.join(' ');
	console.log(toUppercase);
	return toUppercase;
	 
	//2
	const toRegExtoUpper = str => str.replace(/\b\w/g, match =>
		 match.toUpperCase());
}
toUpper('the quick brown fox');
