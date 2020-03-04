function wordSearch(wordFind, text) {

	let findInText = text.split(' ');
	let result = findInText
				 .filter(word => word === wordFind)
				 .join(', ');
	if (result.length > 1) {
		 return true;
	}
}

console.log(wordSearch('the', 'what makes the desert beautiful, said the little prince is that somewhere it hides a well'));
