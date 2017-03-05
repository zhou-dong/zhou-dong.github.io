var React = require('react');
var ReactDOM = require('react-dom');

var Introduction = React.createClass({
	render: function() {
		return (
			<div className="panel panel-info">
				<div className="panel-heading">
					03/04/2017 Self Introduction
				</div>
			  	<div className="panel-body">
			  		{intro}
			  	</div>
			</div>
		)
	}
});

var Challenge = React.createClass({
	render: function() {
		return (
			<div className="panel panel-success">
				<div className="panel-heading">
					03/04/2017 Bigest Challenge
				</div>
			  	<div className="panel-body">
			  		{challenge}
			  	</div>
			</div>
		)
	}
});

var WorkFlow = React.createClass({
	render: function() {
		return (
			<div className="panel panel-warning">
				<div className="panel-heading">
					03/04/2017 WorkFlow
				</div>
			  	<div className="panel-body">
			  		{workflow}
			  	</div>
			</div>
		)
	}
});

ReactDOM.render(<Introduction />, document.getElementById('introduction'));
ReactDOM.render(<Challenge />, document.getElementById('challenge'));
ReactDOM.render(<WorkFlow />, document.getElementById('workflow'));