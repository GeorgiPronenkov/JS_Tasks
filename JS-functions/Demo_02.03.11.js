function isLetter(inputArr) {

	let countNumbers = 0;
	for (let i = 0; i < inputArr.length; i++) {
		if(/\d+/.test(inputArr[i])){
			countNumbers++;
		}
	}

	return countNumbers;
}
console.log(isLetter(['23', 13, 'text']));


//1: const toUpperCase = str => str.split(' ')
// 				 .map(word => word[0].toupperCase() + word.slice(1)
// 				 .join(' ');
//
//2: const toUpperRegEx = str => str.replace(/\b\w/g, match => match.toUpperCase());

//3 function abreviation(name) {
//
// 	let abrev = name.split(' ');
// 	let firstN = abrev[0][0].toUpperCase();
// 	let lastN = abrev[1][0].toUpperCase();
// 	return  firstN + '.' + lastN + '.';
// }
// console.log(abreviation('Georgi Pronenkov'));
