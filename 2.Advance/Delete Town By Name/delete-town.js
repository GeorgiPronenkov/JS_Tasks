function attachEvents() {

	let resultDiv = $('#result');
	$('#btnDelete').on('click', function () {
		let deleted = false;
		let town = $('#townName').val();
		let allTowns = $('#towns option')
						.filter((index, el) => $(el)
						.text() === town)
						.each(function (index,el) {
						deleted = true;
						$(el).remove();
		});

		resultDiv.text(deleted ? `${town} deleted.` : `${town} not found`);
	});
}

// function attachEvents() {
// 	$('#btnDelete').click(function() {
// 		let townName = $('#townName').val();
// 		$('#townName').val('');
// 		let found = false;
// 		for (let option of $('#towns option'))
// 			if (option.textContent === townName) {
// 				found = true;
// 				option.remove();
// 			}
// 		if (found)
// 			$('#result').text(townName + " deleted.");
// 		else
// 			$('#result').text(townName + " not found.");
// 	});
// }
