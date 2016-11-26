var ReactDOM = require('react-dom');
var React = require('react');

var stack = require('../../../components/Stack');

var array = "hello".split("");
var index = 0;

var pushId = setInterval(function() {
	if (index === array.length) {
		clearInterval(pushId);
		var popId = setInterval(function() {
			if (stack.isEmpty()) {
				clearInterval(popId);
			} else {
				stack.pop();
			}
		}, 3000);
	} else {
		stack.push(array[index++]);
	}
}, 3000);

ReactDOM.render( < stack.view / > , document.getElementById('stack'));