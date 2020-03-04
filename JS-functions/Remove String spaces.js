function noSpaces(input) {

	return input.replace(/^\s+|\s+$/g, '');
	//2
	const noSpace = x => x.replace(/ /g, '');
}
console.log(noSpaces('    8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));
