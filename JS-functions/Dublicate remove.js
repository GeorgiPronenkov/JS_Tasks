function dublicate(input) {

	let resultInput = input.split(' ');

	return ([...new Set(resultInput)].join(' '));
}
console.log(dublicate('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
