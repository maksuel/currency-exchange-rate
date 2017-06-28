function preload() {
	getExchangeRate(balance.base.acronym);
}

// Setup
$(document).ready(() => {
	Object.keys(currencies).map(acronym => {
		//if (currencies[acronym].isOnline) {
		allCurrenciesSection.appendChild(newDialogButton(acronym));
		//}
	});
});



