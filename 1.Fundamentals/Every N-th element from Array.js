function nthElem(arr) {

	let nth = Number(arr.pop());
	let res = [];
	for(let i = 0; i < arr.length; i+=nth) {
		res.push(arr[i])
	}
	console.log(res.join(', '));
}
nthElem([3,1,2,4,5, 2]); //3,2,5
