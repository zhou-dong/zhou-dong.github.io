var React = require('react');
var ReactDOM = require('react-dom');

var Introduction = React.createClass({
	getInitialState: function() {
		return {
			content: this.props.content,
			heading: this.props.heading
		}
	},
	render: function() {
		return (
			<div className="panel panel-info">
				<div className="panel-heading">
					{heading}
				</div>
			  	<div className="panel-body">
			  		{content}
			  	</div>
			</div>
		)
	}
});

var target = document.getElementById('self-introduction');
ReactDOM.render(<Introduction content={content} heading={heading}/> , target);