var ReactDOM = require('react-dom');
var React = require('react');

var stack = require('../../../components/Stack');

var array = "hello".split("");
var index = 0;

var pushId = setInterval(function() {
	if (index === array.length) {
		clearInterval(pushId);
		// var popId = setInterval(function() {
		// 	if (stack.isEmpty()) {
		// 		clearInterval(popId);
		// 	} else {
		// 		stack.pop();
		// 	}
		// }, 1000);
	} else {
		stack.push(array[index++]);
	}
}, 1000);


var Input = React.createClass({
	render: function() {
		return (
			<form className='form-inline'>
				<div className="input-group">
						<span className="input-group-addon" id="basic-addon1">Input</span>
						<input type="text" className="form-control" placeholder="hello"/>
				</div>
  				<button type='submit' className='btn btn-default'> Start</button>
			</form>
		);
	}
});

ReactDOM.render( < stack.view / > , document.getElementById('stack'));
ReactDOM.render( < Input / > , document.getElementById('input'));