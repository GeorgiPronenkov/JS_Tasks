function* idMaker() {

	 let index = 0;
	 while(true) {
	 	 if (index === 3) {
	 	     return index
	 	 }
		  yield index++;
	 }
}
let gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
