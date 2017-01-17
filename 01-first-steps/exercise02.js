// Multiplications table

function multTable() {
	var sTable = "\n"
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			sTable += (i * j) + "\t";
		}
		sTable += "\n";
	}
	console.log(sTable);
}

multTable();