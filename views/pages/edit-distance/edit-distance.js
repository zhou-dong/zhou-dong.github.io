var ReactDOM = require('react-dom');
var React = require('react');

var Table = require('../../../components/Table');

var w1 = "abcdefg";
var w2 = "bdeabg";

var table = new Table(w1.length + 2, w2.length + 2);

var rowLen = table.lens()[0];
var colLen = table.lens()[1];

console.log(rowLen);
console.log(colLen);

table.insert(1, 1, 0);

for (var row = 2; row < rowLen; row++) {
	table.insert(row, 0, w1.charAt(row - 2));
}

for (var row = 2; row < rowLen; row++) {
	table.insert(row, 1, row - 1);
}

for (var col = 2; col < colLen; col++) {
	table.insert(0, col, w2.charAt(col - 2));
}

for (var col = 2; col < colLen; col++) {
	table.insert(1, col, col - 1);
}

var row = 2;

function execute() {
	console.log('row: ' + row);
	if (row >= rowLen) {
		return;
	}
	var col = 2;
	var intervalId = setInterval(function() {
		if (col === colLen || col > colLen) {
			clearInterval(intervalId);
			row++;
			execute();
		} else {
			if (w1.charAt(row - 2) === w2.charAt(col - 2)) {
				table.insert(row, col, table.get(row - 1, col - 1));
			} else {
				var min = Math.min(table.get(row - 1, col - 1), table.get(row - 1, col), table.get(row, col - 1));
				table.insert(row, col, min + 1);
			}
			col++;
		}
	}, 1000);
}

execute(row);

ReactDOM.render( < table.view parent = {
			table
		}
		/> , document.getElementById('table'));