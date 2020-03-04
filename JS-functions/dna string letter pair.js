//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
function DNAStrand(dna){

	 return dna.replace(/A/g, 't')
		       .replace(/T/g, 'a')
		       .replace(/C/g, 'g')
		       .replace(/G/g, 'c')
		       .toUpperCase();
};
console.log(DNAStrand('TAACTAG')); //ATTGATC
