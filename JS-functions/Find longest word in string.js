function longestWord(str) {

	 const longest = str.split(' ')
	 					.sort((a, b) => b.length - a.length)[0];
	 console.log(longest);
	 return longest;
}
longestWord('Web Development Tutorial');
