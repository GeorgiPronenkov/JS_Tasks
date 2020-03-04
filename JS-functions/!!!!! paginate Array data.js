function paginateData(collection, currentPage = 1, perPage = 10) {

	 let begin = (currentPage -1) * perPage;
	 let resultData = collection
		 			  .map()
	 				  .slice(begin, begin + perPage);
	 let total_pages = Math.ceil(collection.length / perPage);
	 let result =  {
		  currentPage,
		  perPage,
		  total: total_pages,
		  data: resultData
	 }
}
console.log(result);
