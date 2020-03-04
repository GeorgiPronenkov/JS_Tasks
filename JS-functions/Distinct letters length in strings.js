//Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters

function longest(s1, s2) {

	 //return result = (s1, s2) => [...new Set(s1+s2)].sort().join('');
	 return Array.from(new Set(s1 + s2))
		 		 .sort()
		 		 .join('');
}

console.log(longest('xyaabbbccccdefww','xxxxyyyyabklmopq')); //abcdefklmopqwxy

