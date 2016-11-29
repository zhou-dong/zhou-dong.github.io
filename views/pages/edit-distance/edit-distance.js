var ReactDOM = require('react-dom');
var React = require('react');
var Obj = require('../../../components/Obj');
var Table = require('../../../components/Table');

var w1, w2, rowLen, colLen, row;
var table = new Table(0, 0);
var obj = new Obj();

var initDpTable = function() {
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
}

var execute = function() {
	if (row >= rowLen) {
		return;
	}
	var col = 2;
	var intervalId = setInterval(function() {
		var ch1, ch2, pre, add, del, min, same;
		if (col >= colLen) {
			clearInterval(intervalId);
			row++;
			execute();
		} else {
			ch1 = w1.charAt(row - 2);
			ch2 = w2.charAt(col - 2);
			pre = table.get(row - 1, col - 1);
			if (w1.charAt(row - 2) === w2.charAt(col - 2)) {
				table.insert(row, col, pre);
				same = true;
			} else {
				add = table.get(row - 1, col);
				del = table.get(row, col - 1);
				min = Math.min(pre, del, add);
				same = false;
				table.insert(row, col, min + 1);
			}
			col++;
			obj.add('ch1', ch1);
			obj.add('ch2', ch2);
			obj.add('pre', pre);
			obj.add('add', add);
			obj.add('del', del);
			obj.add('min', min);
			obj.add('same', same);
		}
	}, 3000);
}

var Input = React.createClass({
	getInitialState: function(){
		return {word1: "word1", word2: "word2"} ;
	},
	handleChange1: function(event){
		this.setState({word1: event.target.value});
	},
	handleChange2: function(event){
		this.setState({word2: event.target.value});
	},
	handleSubmit: function(event){
		w1 = this.state.word1 ;
		w2 = this.state.word2 ;
		table.reload(w1.length + 2, w2.length + 2);
		obj.clear();
		rowLen = table.lens()[0];
		colLen = table.lens()[1];
		row = 2;
		initDpTable();
		execute(row);
		event.preventDefault();
	},
	render: function(){
		return (
			<form className="input-group">
  				<input type="text" onChange={this.handleChange1} className="form-control" placeholder={this.state.word1}/>
  				<input type="text" onChange={this.handleChange2} className="form-control" placeholder={this.state.word2}/>
  				<span type="button" onClick={this.handleSubmit} className="input-group-addon" id="basic-addon2">START</span>
			</form>
		);
	}
}) ;

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
		if (!this.state.data || !this.state.data['ch1']) 
			return <div></div>;
		var equalOrNot = this.state.data['same'] ? " == " : " != ";
		var msg = "char1 = <code>" + this.state.data['ch1'] + "</code> ";
		msg += "char2 = <code>" + this.state.data['ch2'] + "</code> ";
		msg += ", because <code> " + this.state.data['ch1'] + equalOrNot + this.state.data['ch2'];
		msg += "</code> so <br/>";
		msg += "<code>dp[row][col] = ";
		if (this.state.data["same"]) {
			msg += 'dp[row-1][col-1]</code> = ' + this.state.data["pre"];
		} else {
			msg += 'Math.min(dp[row-1][col-1], dp[row-1][col], dp[row][col-1]) + 1</code> = ' + (this.state.data['min'] + 1);
		}
		var _h = {__html: msg} ;
		return <div className = "alert alert-info" role = "alert" dangerouslySetInnerHTML = {_h}/> ;
	}

});

ReactDOM.render( <table.view parent = {table} /> , document.getElementById('table'));
ReactDOM.render( <Dashboard / > , document.getElementById('dashboard'));
ReactDOM.render( <Input />, document.getElementById('input'));