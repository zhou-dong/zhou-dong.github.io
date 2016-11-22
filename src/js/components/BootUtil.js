import React from "react";

var Panel = React.createClass({
	render: function(){
		return (
			<div className='panel panel-default'>
		  		<div className='panel-body'>
		  			{this.props.content}
		  		</div>
		  	</div>
		) ;
	}
});

var Blockquote = React.createClass({
	render: function(){
		return (		
			<blockquote>
					<p>{this.props.content}</p>
					<footer>{this.props.author}</footer>
			</blockquote>
		);
	}
});

var instance = new Object();
instance.Panel = Panel ;
instance.Blockquote = Blockquote;

module.exports = instance;