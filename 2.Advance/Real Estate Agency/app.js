function realEstateAgency () {
	$('button[name="regOffer"]').on('click', regOffer);
	$('button[name="findOffer"]').on('click', findOffer);

	let $message = $('#message');
	let $building = $('#building');

	function regOffer() {
		let $rentInput = $('input[name="apartmentRent"]');
		let $apartment = $('input[name="apartmentType"]');
		let $commissionInput = $('input[name="agencyCommission"]');

		let isNumbers = (+$rentInput.val()) && +$commissionInput.val() //да са числа
									   		&& (+$commissionInput.val() >= 0
									   		&& +$commissionInput.val() <= 100);
		let isNotEmpty = ($apartment.val() && ($apartment.val().indexOf(':') === -1));

		if (isNumbers && isNotEmpty) {

			let $div = createHTMLElement('div', '', 'apartment');
			let $rent = createHTMLElement('p', `Rent: ${$rentInput.val()}`);
			let $type = createHTMLElement('p', `Type: ${$apartment.val()}`);
			let $commission = createHTMLElement('p', `Commision: ${$commissionInput.val()}`);

			$div.append($rent)
				.append($type)
				.append($commission);
			$building.append($div);

			$message.text('Successful!!!');
		}else {
		    $message.text('Registration failed.Try again!!!');
		}

		$rentInput.val();
		$apartment.val();
		$commissionInput.val();
	}

	function createHTMLElement(type, text, className) {
		let element = $(`<${type}></${type}>`);
		if (text) {
		    element.text(text);
		}
		if (className) {
		    element.addClass(className);
		}
		return element;
	}

	function findOffer() {
		let $familyBudget = $('input[name="familyBudget"]');
		let $familyApartmentType = $('input[name="familyApartmentType"]');
		let $familyName = $('input[name="familyName"]');

		let budget = +$familyBudget.val();
		let isTheBudgetOK = !isNaN(budget) && budget > 0;
		let isNotEmpty = $familyApartmentType.val() && $familyName.val();

		if (isTheBudgetOK && isNotEmpty) {
		    let $totalAgencyProfit = $('#roof h1');

		    for (const apartment of Array.from($('.apartment'))) {
				let $type = $(apartment).children().eq(1);
				let type = $type.text().split(': ')[1];

				if ($familyApartmentType.val() === type) {

					let $rent = $(apartment).children().eq(0); //element
					let rent = $rent.text().split(': ')[1]; //value
					let $commission = $(apartment).children().eq(2);
					let commission = $commission.text().split(': ')[1];
					let c = (+rent * +commission) / 100;
					let neededMoney = (+rent) + c;


					if (($familyBudget.val() >= neededMoney)) {
						$rent.text(`${$familyName.val()}`);
						$type.text('live here now');
						$commission.remove();

						let $button = createHTMLElement('button', 'MoveOut');
						$button.on('click', function(){
							$(apartment).remove();
							$message.text(`They had found problems in ${$familyName.val()}`);
						});

						$(apartment).append($button);
						$(apartment).css('border', '2px solid red')
;
						$message.text('Enjoy your home!!!');
						homeless = false;

						let currentAgencyCommission = +$totalAgencyProfit.text().split(' ')[2];
						let updatedAgencyCommission = currentAgencyCommission + (commission * 2);

						$totalAgencyProfit.text(`agency profit: ${updatedAgencyCommission} lv`);
					}

					if (!homeless) {
						break;
					}
				}
		    }

		    if (homeless) {
				$message.text('can not find home for you, sorry!');
		    }
		}else {
			$message.text('can not find home for you, sorry!');
		}
	}
}
