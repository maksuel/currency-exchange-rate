
if (preload) preload();

if (setup) {
	document.onreadystatechange = () => {
		if (document.readyState === 'complete') {
			setup();
		}
	};
}