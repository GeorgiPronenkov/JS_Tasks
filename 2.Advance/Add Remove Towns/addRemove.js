/**
Write the missing JavaScript code to make the [Add] and [Delete] buttons work as expected.
    • The [Add] button should append the text from the text box as a new item at the end of the
 list box and clear the input text box after that. If the textbox is empty, it should do nothing.
    • The [Delete] button should delete selected item from the list. If no item is selected, it should do nothing.
        ◦ When an item is selected it has the property selected.
*/
function attachEvents() {
	
	$('#btnAdd').click(addTown);
	$('#btnDelete').click(deleteTown);
	
	function addTown() {

		let inputBox = $('#newItem');
		if (inputBox.val() !== '') {
		    $('#towns')
				.append($('<option>')
				.text(inputBox.val()));
		   inputBox.val('');
		}
	}

	function deleteTown() {

		$('#towns')
			.find('option:selected')
			.remove();
	}
}
