function sort(arr) {

	let defaultSort = arr.sort((a,b) => {
	  	return a.toString()
				.localeCompare(b);
	});
  console.log(defaultSort);
}

sort(['s', 't', 'a', 'c', 'K', 'o', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1']);
//['1', '2', 'a', 'c', 'E', 'f', 'K', 'l', 'o', 'r', 's', 't', 'v', 'W']
