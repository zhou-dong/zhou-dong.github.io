var React = require('react');

var Jumbotron = React.createClass({

	render: function(){
		return (
			<div className="jumbotron">
		     	<div className="container">
		        	<h1>
		        		<span className="tip-number">{this.props.number}</span>
		        		{this.props.title}
		        	</h1>
		        	<p>{this.props.content}</p>
		        	<hr />
		      	</div>
		    </div>
		) ;
	}

});

module.exports = Jumbotron ;