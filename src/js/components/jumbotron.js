var React = require('react');

var Jumbotron = React.createClass({

	render: function(){
		return (
			<div className="jumbotron">
		     	<div className="container">
		        	<h1>
		        		<span className="tip-number">
							453   
						</span>
		        		{this.props.title}
		        	</h1>
		        	<p>{this.props.content}</p>
		      	</div>
		    </div>
		) ;
	}

});

module.exports = Jumbotron ;