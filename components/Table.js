var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

function Table(row, col) {
	var self = this;
	this.store = assign({}, EventEmitter.prototype, {
		table: new CreateTable(row, col),
		currentRow: 0,
		currentCol: 0
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
	this.store.currentRow = row;
	this.store.currentCol = col;
	this.dispatcher.dispatch('change');
};

Table.prototype.lens = function lens(){
	return [this.store.table.length, this.store.table[0].length] ;
}

Table.prototype.get = function get(row, col){
	return this.store.table[row][col] ;
}

Table.prototype.reload = function reload(row, col){
	this.store.table = new CreateTable(row, col);
	this.store.currentRow = 0;
	this.store.currentCol = 0;
	this.dispatcher.dispatch('change');
}

Table.prototype.view = React.createClass({

	getInitialState: function() {
		var self = this;
		var parent = this.props.parent;
		parent.store.on('change', function() {
			self.setState({
				data: parent.store.table,
				row: parent.store.currentRow,
				col: parent.store.currentCol
			});
		});
		return {
			data: parent.store.table,
			row: parent.store.currentRow,
			col: parent.store.currentCol
		};
	},
	
	render: function() {
		var self = this;
		var rows = this.state.data.map(function(row, rowIndex){
			var cols = row.map(function(col, colIndex){
				var className =  ((rowIndex === self.state.row && colIndex === 0) ||
					(colIndex === self.state.col && rowIndex === 0)) ? "success" : "" ;;
				return <td className={className} key={colIndex}>{col}</td>;
			});
			return (<tr key={rowIndex}> {cols} </tr>);
		}) ;
		return ( 
			<table className ='table table-bordered table-hover'>
				<tbody> 
					{rows} 
				</tbody>
			</table > 
		);
	}
});

module.exports = Table;