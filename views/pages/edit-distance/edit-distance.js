var ReactDOM = require('react-dom');
var React = require('react');
var Obj = require('../../../components/Obj');
var Table = require('../../../components/Table');

var w1 = "abcdefg";
var w2 = "bdeabg";

var table = new Table(w1.length + 2, w2.length + 2);
var obj = new Obj();

var rowLen = table.lens()[0];
var colLen = table.lens()[1];

table.insert(0, 0, '-');
table.insert(0, 1, '-');
table.insert(1, 0, '-');
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
	if (row >= rowLen) {
		return;
	}
	var col = 2;
	var intervalId = setInterval(function() {
		if (col >= colLen) {
			clearInterval(intervalId);
			row++;
			execute();
		} else {
			var a = w1.charAt(row - 2);
			var b = w2.charAt(col - 2);
			var pre = table.get(row - 1, col - 1);
			obj.add('ch1', a);
			obj.add('ch2', b);
			obj.add('pre', pre);
			if (w1.charAt(row - 2) === w2.charAt(col - 2)) {
				table.insert(row, col, pre);
				obj.add('same', true);
			} else {
				var add = table.get(row - 1, col);
				var del = table.get(row, col - 1);
				var min = Math.min(pre, del, add) + 1;
				obj.add('add', add);
				obj.add('del', del);
				obj.add('min', min);
				obj.add('same', false);
				table.insert(row, col, min);
			}
			col++;
		}
	}, 3000);
}

execute(row);


var Dashboard = React.createClass({

			getInitialState: function() {
				var self = this;
				obj.store.on('change', function() {
					self.setState({
						data: obj.store.instance
					});
				});
				return {
					data: obj.store.instance
				};
			},

			render: function() {
				console.log(this.state.data);
				return ( < div > {
						this.state.data['ch1']
					} < /div>);
				}
			});


		ReactDOM.render( < table.view parent = {
				table
			}
			/> , document.getElementById('table'));
			ReactDOM.render( < Dashboard / > , document.getElementById('dashboard'));