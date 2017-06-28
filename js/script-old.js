// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('service-worker.js')
// 		.then(reg => {
// 			console.log('Service Worker is registered', reg);
// 		})
// 		.catch(error => {
// 			console.error('Service Worker Error', error);
// 		});
// } else {

// }

function getUrlFlag(acronym) {
	//return `http://www.likeforex.com/img/flag/l/${acronym}.png`;
	return `img/${acronym}.png`;
}
function setStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
function getStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}
function saveBalance() {
	setStorage('balance', balance);
}
function getBalance() {
	return getStorage('balance');
}
function saveCurrencies() {
	setStorage('currencies', currencies);
}
function getCurrencies() {
	return getStorage('currencies');
}
function adjustModal() {
	let margin_top = parseInt($('.modal-dialog').css('margin-top'));
	let header_height = $('.modal-header').outerHeight();
	let footer_height = $('.modal-footer').outerHeight();
	let window_height = $(window).height();
	let padding = (margin_top * 2) + header_height + footer_height;
	let body_height = window_height - padding - 2;
	modal_body.outerHeight(body_height);
}
$('#currencies').on('shown.bs.modal', () => adjustModal());
$(window).resize(() => adjustModal());


// Save balance or get if exist
if (!localStorage.getItem('balance')) {
	saveBalance();
} else {
	balance = getBalance();
}

// Sort currencies by acronym
if (!localStorage.getItem('currencies')) {

	Object.keys(currencies).map(acronym => {
		acronyms.push(acronym);
		descriptions.push(currencies[acronym].description);
		if (currencies[acronym].append === '') { delete currencies[acronym].append; }
	});

	acronyms.sort();
	descriptions.sort();

	let new_currencies_order = {};

	for (let i = 0; i < acronyms.length; i++) {
		let acronym = acronyms[i];
		new_currencies_order[acronym] = currencies[acronym];
	}
	currencies = new_currencies_order;
	saveCurrencies();
} else {
	currencies = getCurrencies();
}

// Update selected currencies
updateButton('base');
updateButton('compare');

// Construct modal options
let imageToCache = [];

Object.keys(currencies).map(acronym => {
	if (!offline_currencies.hasOwnProperty(acronym)) {
		imageToCache.push(getUrlFlag(acronym));
	}

	let description = currencies[acronym].description;
	if (currencies[acronym].hasOwnProperty('append')) {
		description = `${description} ${currencies[acronym].append}`;
	}

	let template = currencies_template_li.clone();

	template.find('button').attr({
		'id': acronym,
		'onclick': `select('${acronym}')`
	});

	if (!offline_currencies.hasOwnProperty(acronym)) {
		template.find('img').attr('src', getUrlFlag(acronym));
	}
	template.find('.acronym').text(acronym);
	template.find('.description').text(description);

	all_currencies_ul.append(template);
});

// Update list of top currencies
updateTopCurrencies('base');
updateTopCurrencies('compare');

// Images cache section
let oldImagesCache = [];

function cacheImages(list) {
	let cacheName = 'img-' + version;
	caches.open(cacheName).then(cache => {
		cache.addAll(list).then(() => {
			oldImagesCache.map(name => {
				caches.delete(name);
			});
		});
	});
}

cacheImages(imageToCache);










function updateAll(currency) {

	if (!currencies.hasOwnProperty(currency)) return false;

	let query = [];

	Object.keys(currencies).map(acronym => {
		query.push(currency + acronym);
	});

	query = JSON.stringify(query).replace(/[\[\]]/g, '');

	let url = 'https://query.yahooapis.com/v1/public/yql?q=' +
		'select * from yahoo.finance.xchange where pair in (' + query + ')' +
		'&format=json&env=store://datatables.org/alltableswithkeys';

	fetch(url).then(res => {
		res.json().then(data => {
			let count = data.query.count;
			let rate = data.query.results.rate;
			let temp = {};

			let countPass = 1;

			for (let i = 0; i < rate.length; i++) {
				if (rate[i].Name !== 'N/A') {
					temp[rate[i].id] = new ExchangeRate(rate[i]);
					countPass++;
				}
			}

			rate = temp;
			console.log(data);
			console.log(countPass, rate);
		});
	});
}

function checkOnlineCurrencies(base, refresh) {

	if (!currencies.hasOwnProperty(base)) return false;

	if (localStorage.getItem('currencies')) currencies = JSON.parse(localStorage.getItem('currencies'));

	let rates = {};
	let promises = [];
	let query = [];

	let count = 1;

	Object.keys(currencies).map(acronym => {

		query.push(base + acronym);







		// if( currencies[acronym].hasOwnProperty('isOnline') &&
		//     currencies[acronym].isOnline === false &&
		//     refresh === false) return;
		//
		// let query = 'https://query.yahooapis.com/v1/public/yql?q=' +
		//     'select * from yahoo.finance.xchange where pair in ("USD' + acronym + '")' +
		//     '&format=json&env=store://datatables.org/alltableswithkeys';
		//
		// if(currencies[acronym].append === '') { delete currencies[acronym].append; }
		//
		// promises.push( fetch(query).then(res => {
		//     res.json().then(data => {
		//         let rate = data.query.results.rate;
		//
		//         if(rate.Name === 'N/A') {
		//             currencies[acronym].isOnline = false;
		//         } else {
		//             currencies[acronym].isOnline = true;
		//
		//             rates[rate.id] = {
		//                 'Ask': rate.Ask,
		//                 'Bid': rate.Bid,
		//                 'Date': rate.Date,
		//                 'Name': rate.Name,
		//                 'Rate': rate.Rate,
		//                 'Time': rate.Time
		//             };
		//         }
		//     });
		// }) );

		count++;
	});

	query = JSON.stringify(query).replace(/[\[\]]/g, '');

	console.log(query);

	Promise.all(promises).then(() => {
		localStorage.setItem('currencies', JSON.stringify(currencies));
		localStorage.setItem('rates', JSON.stringify(rates));
		console.log(count);
		console.log(currencies);
		console.log(rates);
	});
}








let data;
let base_input;
let compare_input;
let rate = 3;
let toFixed = 2;

function preload() {
}

function setup() {

	


	base_input = $('#base-input');
	compare_input = $('#compare-input');

	startListening();

	base_input.val(balance.base.value);
	//updateExchangeRate('compare')
}



function startListening() {

	base_input.on('input', () => updateExchangeRate('compare'));
	compare_input.on('input', () => updateExchangeRate('base'));
}

function updateExchangeRate(ref) {

	balance.base.value = parseFloat(base_input.val());
	balance.compare.value = parseFloat(compare_input.val());

	if (balance) {

		if (ref === 'base') {

			balance.base.value = balance.compare.value / rate;

			if (balance.base.value != 0) {

				base_input.val(balance.base.value.toFixed(toFixed));
				base_input.parent().addClass('is-dirty');
			}
		}

		if (ref === 'compare') {

			balance.compare.value = balance.base.value * rate;

			if (balance.compare.value != 0) {

				compare_input.val(balance.compare.value.toFixed(toFixed));
				compare_input.parent().addClass('is-dirty');
			}
		}

	} else {

		//loadRate();
	}

}