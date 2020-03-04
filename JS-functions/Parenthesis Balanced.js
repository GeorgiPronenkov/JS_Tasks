function checkInArr(arr) {

	return arr[arr.length -1];
}

function isBalanced(input) {
	let arr = [];
	for (let i = 0; i < input.length; i++) {
		let bracket = input.charAt(i);
		if (bracket === '(') {
		    arr.push(bracket);
		} else if (bracket === ')') {
		    //check if there is an opening bracket at arr
			if (checkInArr(arr) === '(') {
				//remove the oppening bracket
			    arr.pop();
			} else {
			    return false;
			}
		}
	}
	return arr.length === 0;
}
console.log(isBalanced('((())()'));

//2nd
function isBalanced(input) {
	const bracesType = br => {
		while (/\(\)/.test(br))
		br = br.replace(/\(\)/g, '');
		return br.length > 1;
	};
}
console.log(isBalanced('((()))'));


//3rd Variant
// function isBalanced(brackets = '') {
// 	const stack = [];
// 	let index = 0;
//
// 	if (brackets.length % 2 || brackets.startsWith(')')) return false;
//
// 	while (index < brackets.length) {
// 		if (brackets[index] === '(') stack.push(brackets[index]);
// 		else {
// 			if (!stack.length) return false;
// 			stack.pop();
// 		}
//
// 		index += 1;
// 	}
//
// 	return !stack.length;
// }




