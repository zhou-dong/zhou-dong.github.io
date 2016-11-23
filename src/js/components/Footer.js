var React = require('react') ;

var Footer = React.createClass({

	getInitialState: function(){
		return {
			year: new Date().getFullYear(),
			link: 'http://zhou-dong.github.io/',
			github: 'https://github.com/zhou-dong' 
		} ;
	},

	render: function(){
		return (
			<footer className='footer'>
				<div className='container'>
					<ul>
						<li><a href={this.state.link}>Home</a></li>
						<li><a href={this.state.link}>About</a></li>
						<li className='github'>
							<a href={this.state.github}><img src='https://zhou-dong.github.io/img/github.svg'/></a>
						</li>
					</ul>
					
				</div>
			</footer>
		);
	}

});

module.exports = Footer;