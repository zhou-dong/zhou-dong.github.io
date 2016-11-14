var React = require('react') ;

var Footer = React.createClass({

	getInitialState: function(){
		return {
			year: new Date().getFullYear(),
			company: 'DongZhou'
		} ;
	},

	render: function(){
		return (
			<div>
				<hr />
				<footer>
					<p>&copy; {this.state.year} {this.state.company}, Inc.</p>
				</footer>
			</div>
		);
	}

});

module.exports = Footer;