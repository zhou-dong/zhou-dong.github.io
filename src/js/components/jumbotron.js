var React = require('react');

var Jumbotron = React.createClass({

	render: function(){
		return (
			<div className="jumbotron">
		     	<div className="container">
		        	<h1>{this.props.title}</h1>
		        	<p>{this.props.content}</p>
		        	<p><a className="btn btn-primary btn-lg" href="{this.props.link}" role="button">Learn more &raquo;</a></p>
		      	</div>
		    </div>
		) ;
	}

});

module.exports = Jumbotron ;