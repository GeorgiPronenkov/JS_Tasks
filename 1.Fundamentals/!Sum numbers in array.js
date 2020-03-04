function sumAndVat(input) {

	let sum = 0;
	for(let el of input) {
		sum += Number(el);
	}
	console.log(`sum = ${sum}`);
}

sumAndVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);
