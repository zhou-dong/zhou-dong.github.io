var React = require('React');

var MyArray  = React.createClass({


	getInitialState: function(){
		return {

			array: ['Left', 'Middle', 'Right', 'RightRight', 'RightRightRight']
		};
	},

	render: function(){
		return (
			<div className="btn-group" role="group" aria-label="...">{
				this.state.array.map(function(element){
					return ( <button type="button" key={element} className="btn btn-default">{element}</button>);
				})
			}
			</div>
		) ;

	}

});

module.exports = MyArray;