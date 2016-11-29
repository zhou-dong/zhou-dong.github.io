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

for (var row = 2; row < rowLen; row++) {
	table.insert(row, 0, w1.charAt(row - 2));
}

for (var row = 0; row < rowLen; row++) {
	table.insert(row, 1, row);
}

for (var col = 2; col < colLen; col++) {
	table.insert(0, col, w2.charAt(col - 2));
}

for (var col = 0; col < colLen; col++) {
	table.insert(1, col, col);
}

ReactDOM.render( < table.view parent = {
			table
		}
		/> , document.getElementById('table'));