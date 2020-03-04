//
function descendingOrder(n){

	 return parseInt(n.toString()
		   			  .split('')
		          	  .sort()
		 			  .reverse()
		 			  .join(''), 10);
}
descendingOrder(56789);
