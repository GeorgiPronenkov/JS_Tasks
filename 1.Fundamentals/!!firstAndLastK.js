function firstAndLastK(arr) {

	let k = arr.shift(); //4
	//console.log(arr.slice(1, k).join(' '));
	console.log(arr.slice(arr.length - k, arr.length).join((' ')));
}

firstAndLastK([4, 5, 8, 9, 11, 13, 78]);
//9 11 13 78 (7 - 4 =3 => remove 3 elem)
