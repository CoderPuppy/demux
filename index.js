var through = require('through');

function demux() {
	var ts = through();

	for(var i = arguments.length - 1; i >= 0; i--) {
		arguments[i].pipe(ts);
	}

	return ts;
}