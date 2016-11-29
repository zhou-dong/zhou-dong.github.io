var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

function Table(row, col) {
	var self = this;
	var table = new CreateTable(row, col);
	this.store = assign({}, EventEmitter.prototype, {
		table: table
	});
	this.dispatcher = new Dispatcher();
	this.dispatcher.register(function(eventName) {
		if (eventName === 'change') {
			self.store.emit('change');
		}
		return true;
	});

}

function CreateTable(row, col) {
	var table = new Array(row);
	for (var i = 0; i < row; i++) {
		table[i] = new Array(col).fill(' ');
	}
	return table;
}

Table.prototype.insert = function insert(row, col, val) {
	this.store.table[row][col] = val;
	this.dispatcher.dispatch('change');
};

Table.prototype.empty = function empty(row, col) {
	this.store.table = new CreateTable(row, col);
	this.dispatcher.dispatch('change');
};

Table.prototype.lens = function lens(){
	return [this.store.table.length, this.store.table[0].length] ;
}

Table.prototype.view = React.createClass({

	getInitialState: function() {
		var self = this;
		var parent = this.props.parent;
		parent.store.on('change', function() {
			self.setState({
				data: parent.store.table
			});
		});
		return {
			data: parent.store.table
		};
	},

	render: function() {
		var rows = this.state.data.map(function(row, rowIndex){
			var cols = row.map(function(col, colIndex){
				return (<td key={colIndex}>{col}</td>) ;
			});
			return (<tr key={rowIndex}> {cols} </tr>);
		}) ;
		return ( 
			<table className ='table table-bordered'>
				<tbody> 
					{rows} 
				</tbody>
			</table > 
		);
	}
});

module.exports = Table;