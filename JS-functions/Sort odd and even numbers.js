function sort(arr) {

	let sorted =  arr.sort(function(a,b) {
	  	return (a & 1) - (b & 1) || a-b;
	});
  console.log(sorted);
}
sort([10, 21, 4, 15, 7, 99, 0, 12]); //[ 0, 4, 10, 12, 7, 15, 21, 99 ]
