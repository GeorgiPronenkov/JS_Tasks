 function factorial(number) {

	if (number <= 1) {
	    return 1;
	}
	else {
	    return (number * (number -1));
	 }
}
console.log(factorial(4));

//with for Loop
function factorial(number) {

	if (number <= 1) {
		return 1;
	}
	for (let i = number-1; i >= 1; i--) {
		number *= i;
	}
	return number;
}
console.log(factorial(4));

//=>
 const factorial = n => {
  if (n <= 1)
  	return 1;
  return n * factorial(n - 1);
 };
 console.log(factorial(4));


 //with tern.operator
 function factorial(number){

  return (number < 2) ? 1:factorial(number-1) * number;
 }
 console.log(factorial(4));


