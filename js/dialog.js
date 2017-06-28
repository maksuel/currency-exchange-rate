
let dialog;
let dialogContent;
let topCurrenciesSection;
let allCurrenciesSection;
let buttonTemplate;

// Define elements
(function () {
	// MDL Currencies Dialog
	dialog = document.getElementById('currencies');
	let showButtons = document.querySelectorAll('.show-modal');
	if (!dialog.showModal) dialogPolyfill.registerDialog(dialog);
	showButtons.forEach(button => button.addEventListener('click', () => {
		dialog.showModal();
		updateCurrenciesDialog(button.id);
	}));
	dialog.querySelector('.close').addEventListener('click', () => dialog.close());

	// Element switch id
	dialogContent = document.getElementById('dialog-content');
	dialogContent.removeAttribute('id');

	// Template
	let template = document.getElementById('currency-template');
	let listTemplate = template.cloneNode();
	listTemplate.removeAttribute('id');

	// Config and Define top section
	topCurrenciesSection = document.getElementById('top-currencies');
	topCurrenciesSection.removeAttribute('id');
	topCurrenciesSection.appendChild(listTemplate.cloneNode());
	topCurrenciesSection = topCurrenciesSection.querySelector('ul');

	// Config and Define all section
	allCurrenciesSection = document.getElementById('all-currencies');
	allCurrenciesSection.removeAttribute('id');
	allCurrenciesSection.appendChild(listTemplate.cloneNode());
	allCurrenciesSection = allCurrenciesSection.querySelector('ul');

	// Define button template
	buttonTemplate = template.querySelector('li').cloneNode(true);

	// Remove template from DOM
	template.remove();
})();

// Functions
let createDialogButton = (acronym, idPrepend) => {
	let button = buttonTemplate.cloneNode(true);
	button.querySelector('button').id = idPrepend ? idPrepend + acronym : acronym;
	button.querySelector('button').onclick = () =>
		currencySelected(acronym, button.parentElement.parentElement.parentElement);
	button.querySelector('img').src = `img/${acronym}.png`;
	button.querySelector('img').alt = `${acronym} flag`;
	button.querySelector('.acronym').innerHTML = acronym;
	button.querySelector('.description').innerHTML = currencies[acronym].description;
	if (!idPrepend) button.querySelector('.mdl-list__item-secondary-action').remove();
	return button;
}

let currencySelected = (acronym, elementContent) => {
	dialog.close();
	let ref = elementContent.id;
	elementContent.removeAttribute('id');

	if (ref === 'base-button') {
		console.log('BASE', acronym);
	}
	if (ref === 'compare-button') {
		console.log('COMPARE', acronym);
	}
}



let adjustDialogSizes = () => {

	let percentSize = 0.98;
	let windowHeight = window.innerHeight;
	let windowWidth = window.innerWidth;

	// TEMPORARY #######################################################################################
	let elem = document.createElement('p');
	elem.appendChild(
		document.createTextNode(
			`Width: ${windowWidth} / Height: ${windowHeight} / Device Ratio: ${window.devicePixelRatio}`
		)
	);
	document.querySelector('body').appendChild(elem);
	// #################################################################################################

	// Definitions
	let newDialogHeight = windowHeight * percentSize;
	let margin = (windowHeight - newDialogHeight) / 2;
	let newDialogWidth = windowWidth - (2 * margin);

	// Width adjust
	let dialogWidth = dialog.offsetWidth;
	let dialogInnerWidth = parseFloat(window.getComputedStyle(dialog, null).width);
	let dialogOffset = dialogWidth - dialogInnerWidth;
	dialog.style.width = (newDialogWidth - dialogOffset) + 'px';
	dialog.style.top = margin + 'px';
	if (windowWidth - dialog.offsetWidth > Math.round(margin * 2)) {
		margin = (windowWidth - dialog.offsetWidth) / 2;
	}
	dialog.style.left = margin + 'px';

	// Height adjust
	let dialogHeight = dialog.offsetHeight;
	let contentHeight = dialogContent.offsetHeight;
	dialogContent.style.height = ((newDialogHeight - dialogHeight) + contentHeight) + 'px';
};

let isSettedDialogSizes = false;

let updateCurrenciesDialog = ref => {

	if (!isSettedDialogSizes) {
		adjustDialogSizes();
		isSettedDialogSizes = true;
	}

	dialogContent.id = ref;
	let tempArray = [];
	let ordered = false;
	let key;

	if (ref === 'base-button') {
		key = 'baseScore';
	}
	if (ref === 'compare-button') {
		key = 'compareScore';
	}

	if (key) {
		Object.keys(currencies).map(acronym => {

			if (currencies[acronym].hasOwnProperty(key)) {
				let score = currencies[acronym][key];
				if (tempArray.length < 6) {
					tempArray.push({
						'acronym': acronym,
						'score': score
					});
				} else {
					if (!ordered) {
						tempArray.sort(sortTopCurrencies);
						ordered = true;
					}
					for (let i = 0; i < tempArray.length; i++) {
						if (score >= tempArray[i].score) {
							tempArray.push({
								'acronym': acronym,
								'score': score
							});
							tempArray.sort(sortTopCurrencies);
							tempArray.splice(-1, 1);
							break;
						}
					}
				}
			}
		});
	}

	topCurrenciesSection.innerHTML = '';
	for (let i = 0; i < tempArray.length; i++) {
		topCurrenciesSection.appendChild(topDialogButton(tempArray[i].acronym));
	}
}

let sortTopCurrencies = (a, b) => {
	return b.score - a.score;
};

window.onresize = () => { if (isSettedDialogSizes) adjustDialogSizes(); };

// Global Functions
let newDialogButton = acronym => createDialogButton(acronym);
let topDialogButton = acronym => createDialogButton(acronym, 'top-');
