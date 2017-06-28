function getExchangeRate(base) {
	if (!currencies[base]) return false;
	let query = [];
	Object.keys(currencies).map(acronym => {
		query.push(base + acronym);
	});
	query = JSON.stringify(query).replace(/[\[\]]/g, '');
	let url = 'https://query.yahooapis.com/v1/public/yql?q=' +
		'select * from yahoo.finance.xchange where pair in (' + query + ')' +
		'&format=json&env=store://datatables.org/alltableswithkeys';
	fetch(url)
		.then(res => res.json())
		.then(obj => updateAll(obj.query));
}

function updateAll(data) {
	let rate = data.results.rate;
	for (let i = 0; i < rate.length; i++) {
		if (rate[i].Name !== 'N/A') {
			balance[rate[i].id] = new ExchangeRate(rate[i]);
		}
	}
	saveDependency('balance', balance);
}