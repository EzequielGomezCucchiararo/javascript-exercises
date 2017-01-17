// Integer Numbers Range

function rangeBetween(x1, x2) {
	if (x2 < x1) return -1;
	
	for (var i = x1 + 1; i < x2; i += 1) {
		console.log(i);
	}
}

rangeBetween(2,10);

