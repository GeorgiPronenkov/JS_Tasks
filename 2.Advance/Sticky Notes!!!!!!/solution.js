function addSticker() {

	//getting inputs
	let $title = $('.title');
	let $content = $('.content');
	let $list = $('#sticker-list');

	//проверяваме ги
	if ($title.val() && $content.val()) {
		createNote();
	    reset();
	}

	function createNote() {

		let $li = $('<li>');
		$li.addClass('note-content');

		let $a = $('<a>');
		$a.addClass('button');
		$a.text('x');

		//x
		$a.on('click',  () => $li.remove());

		let $h = $('<h2>');
		$h.text($title.val());

		let $p = $('<p>');
		$p.text($content.val());

		$li.append($a);
		$li.append($h);
		$li.append($('<hr>'));
		$li.append($p);

		$list.append($li);
	}

	//reset
	function reset() {
		$title.val('');
		$content.val('');
	}
}



