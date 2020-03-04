/**
 * Wordsearch
 *
 * Create a function wordSearch(word,text) that searches to see whether a word word is
present in the given text variable. *
 * Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well"
 * => wordSearch("prince",text) --> true;
*/

function wordSearch(word, text) {
	
	//1:
	return new RegExp('\\b' + word + '\\b').test(text);
	
	//let texts = text.split();
	//2:
	let result = text.match(/\b\w+\b/g);
	for (let i = 0; i < result.length; i++) {
		let findWord = result[i];
		if (word === findWord) {
		    return true;
		}
	}
	return  false;
}

console.log(wordSearch('prince', 'what makes the desert beautiful, said the little prince is that somewhere it hides a well'));
