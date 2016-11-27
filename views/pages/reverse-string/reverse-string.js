var ReactDOM = require('react-dom');
var React = require('react');

var stack = require('../../../components/Stack');

function popAll(){
	var popId = setInterval(function() {
	if (stack.isEmpty()) {
		clearInterval(popId);
	} else {
		stack.pop();
	}
	}, 1000);
}

function addToStack(str){
	var array = str.split("") ;
	var index = 0 ;
	var pushId = setInterval(function() {
		if (index === array.length) {
			clearInterval(pushId);
			popAll();
		} else {
			stack.push(array[index++]);
		}
	}, 1000);
}

var Input = React.createClass({

	getInitialState: function(){
		return { value: 'hello' } ;
	},

	handleChange: function(event){
		this.setState({value: event.target.value}) ;
	},

	handleSubmit: function(e){
		addToStack(this.state.value);
		e.preventDefault();
	},

	render: function() {
		return (
			<form className='form-inline' onSubmit={this.handleSubmit}>
				<div className='input-group'>
					<span className='input-group-addon'>Input</span>
					<input type='text' onChange={this.handleChange} className='form-control' placeholder={this.state.value}/>
				</div>
  				<button className='btn btn-default'> Start</button>
			</form>
		);
	}
});

ReactDOM.render( < stack.view / > , document.getElementById('stack'));
ReactDOM.render( < Input / > , document.getElementById('input'));