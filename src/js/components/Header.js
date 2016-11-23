var React = require("react") ;

var Header = React.createClass({

	render: function(){
		return (
				<div className="jumbotron">
     				<div className="container">
        				<h1><a href="./" className="tip-number">DZ</a><span>读书、旅行</span></h1>
     					<p></p>
        				<hr />
      				</div>
    			</div>
		);
	}

});

module.exports = Header;