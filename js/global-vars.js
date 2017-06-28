
let version = '1.0.0';

let balance = loadDependency('balance', 'js/json/balance.json');
let currencies = loadDependency('currencies', 'js/json/currencies.json');





let temporary_disabled = '';
let acronyms = [];
let descriptions = [];
let top_currencies_base = [];
let top_currencies_compare = [];

// jQuery
let currencies_dialog = $('#currencies');
let currencies_template = currencies_dialog.find('#currency-template').remove().removeAttr('id');
let currencies_template_ul = currencies_template.clone().empty();
let currencies_template_li = currencies_template.find('li').clone();

let base_button = $('#base-button');
let compare_button = $('#compare-button');

let top_currencies_section = currencies_dialog.find('#top-currencies');
top_currencies_section.append(currencies_template_ul);
let top_currencies_ul = top_currencies_section.find('ul');

let all_currencies_section = currencies_dialog.find('#all-currencies');
all_currencies_section.append(currencies_template_ul);
let all_currencies_ul = all_currencies_section.find('ul');

let offline_currencies = {
	'ATS': true,
	'BEF': true,
	'CYP': true,
	'DMK': true,
	'EEK': true,
	'ESP': true,
	'FIM': true,
	'GRD': true,
	'IED': true,
	'ITL': true,
	'LUF': true,
	'MTL': true,
	'NLG': true,
	'PTE': true,
	'SIT': true,
	'SKK': true,
	'TMM': true,
	'VEB': true,
	'ZWD': true
};