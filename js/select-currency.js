/**
 * Created by mak on 13/03/17.
 */

function reActiveCurrency() {
	let acronym = temporary_disabled;
	top_currencies_section.find('#' + acronym + '-top')
		.attr('onclick', `select('${acronym}')`).removeAttr('disabled');
	all_currencies_section.find('#' + acronym)
		.attr('onclick', `select('${acronym}')`).removeAttr('disabled');
}

function removeReference() {
	modal_body.removeAttr('data-button-active');
}

function updateScore(ref, acronym) {
	if (ref === 'base') {
		if (currencies[acronym].hasOwnProperty('baseScore')) {
			currencies[acronym].baseScore++;
		} else {
			currencies[acronym].baseScore = 1;
		}
	}
	if (ref === 'compare') {
		if (currencies[acronym].hasOwnProperty('compareScore')) {
			currencies[acronym].compareScore++;
		} else {
			currencies[acronym].compareScore = 1;
		}
	}
	saveCurrencies();
}

function updateBalance(ref, acronym) {
	balance[ref].acronym = acronym;
	saveBalance();
}

function updateButton(ref) {
	if (ref === 'base') {
		let acronym = balance.base.acronym;
		base_button.attr('onclick', `changeCurrency('base','${acronym}')`)
			.find('img').attr('src', getUrlFlag(acronym));
		base_button.find('span').text(acronym);
	}
	if (ref === 'compare') {
		let acronym = balance.compare.acronym;
		compare_button.attr('onclick', `changeCurrency('compare','${acronym}')`)
			.find('img').attr('src', getUrlFlag(acronym));
		compare_button.find('span').text(acronym);
	}
}

function updateTopCurrencies(ref) {
	let temp_array = [];
	let ordered = false;
	let key;

	if (ref === 'base') {
		key = 'baseScore';
	}
	if (ref === 'compare') {
		key = 'compareScore';
	}

	if (key) {
		Object.keys(currencies).map(acronym => {

			if (currencies[acronym].hasOwnProperty(key)) {
				let score = currencies[acronym][key];
				if (temp_array.length < 6) {
					temp_array.push({
						'acronym': acronym,
						'score': score
					});
				} else {
					if (!ordered) {
						temp_array.sort((a, b) => {
							return b.score - a.score;
						});
						ordered = true;
					}
					for (let i = 0; i < temp_array.length; i++) {
						if (score >= temp_array[i].score) {
							temp_array.push({
								'acronym': acronym,
								'score': score
							});
							temp_array.sort((a, b) => {
								return b.score - a.score;
							});
							temp_array.splice(-1, 1);
							break;
						}
					}
				}
			}
		});
	}

	if (ref === 'base') {
		top_currencies_base = temp_array;
	}
	if (ref === 'compare') {
		top_currencies_compare = temp_array;
	}
}

$('#currencies').on('hide.bs.modal', () => reActiveCurrency());

function select(acronym) {
	let ref = modal_body.attr('data-button-active');
	removeReference();
	updateScore(ref, acronym);
	updateBalance(ref, acronym);
	updateButton(ref);
	updateTopCurrencies(ref);
}