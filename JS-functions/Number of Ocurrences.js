function charCount(text, char) {

	//with regEx
	const matches = text.match(new RegExp(char, 'g'));
	return matches ? matches.length : 0;

	//2nd
	let count = 0;
	let index = 0;

	while (index < text.length) {
		 if (text[index] === char) {  //check if the current char is equal to the given char
		     count++;
		 }
		 index ++;
	}
	return count;
}
console.log(charCount('w3resource.com', 'o'));
