/// <reference path="../typings/index.d.ts" />

function loadDependency(name, uri) {
	if (localStorage.getItem(name)) {
		return JSON.parse(localStorage.getItem(name));
	} else {
		fetch(uri)
			.then(res => res.json())
			.then(obj => {
				eval(name + ' = ' + JSON.stringify(obj) + ';');
				saveDependency(name, obj);
				loadedDependency();
			});
	}
}

function saveDependency(name, obj) {
	localStorage.setItem(name, JSON.stringify(obj));
}

function loadedDependency() {
	if (balance && currencies) {
		preload();
	}
}