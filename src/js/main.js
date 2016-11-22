var App = require('./components/App');
var Header = require('./components/Header');
var Footer = require('./components/Footer');
var Jumbotron = require('./components/Jumbotron');

import NavBar from './components/NavBar';
var array = require('./dataStructure/Array') ;

var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');

var a = [1,3, 5, 7]
var count = 0 ;
array.init(a) ; 

var max = array.max() ;
var min = array.min() ;

var View = React.createClass({
	getInitialState: function(){
		var self = this;
		array.store.on('change', function(){
			self.setState({
				data: array.store.items,
				maxIndex: array.maxIndex(),
				count: count+1
			}) ;
		});
		return {
			data: array.store.items,
			maxIndex: array.maxIndex() ,
			minIndex: array.minIndex(),
			count: 0
		} ;
	},
	isMax: function(index){
		if(this.state.maxIndex === this.state.minIndex)
			return 'btn btn-success' ;
		return 'btn ' + ((index === this.state.maxIndex) ? 'btn-info' : 'btn-default') ;
	},
	render: function(){
		var self = this;
		return (
			<div className="panel panel-default">
			 	<div className="panel-heading">
			 	<div className="row">
			 		<div className="col-sm-4 title">Animation</div>
			 		<div className="col-sm-8" id="input"></div>
			 		</div>
			 	</div>
			 	<div className="panel-body">
			 		<div className='row'>
			 			<div className="col-sm-4">
			 				<div className="btn-group btn-group-lg">
			    				<button className="btn btn-default" type="button">Count</button>
			    				<button className="btn btn-default" type="button">{this.state.count}</button>
			  				</div>
						</div>
			 			<div className="col-sm-8">
			 				<div className='btn-group btn-group-lg' role="group" aria-label="">
								{this.state.data.map(function(element, index){
									return ( <button type="button" key={index} className={self.isMax(index)}>{element}</button>);
								})}
							</div>
			 			</div>
			 		</div>
			 	</div>
			</div>
		) ;
	}
});

ReactDOM.render(
	<View />,
	document.getElementById('animation')
);

var id = setInterval(function(){
	array.update(array.maxIndex(), max - 1) ;
	max = array.max() ;
	count ++ ;
	clear() ;
}, 2000);

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);

function clear(){
	if( max === min){
		clearInterval(id) ;
	}
}

var Solution = React.createClass({
	render: function(){
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">Solution</div>
			  <div className="panel-body">
			    Add 1 to n - 1 elements is the same as subtracting 1 from one element.
			  </div>
			</div>
		);
	}
});

var Input = React.createClass({
	render: function(){
		return (
			<div className="input-group">
  				<input type="text" className="form-control" placeholder={this.props.placeholder}/>
  				<span className="input-group-btn">
    				<button className="btn btn-default" type="button">Go!</button>
  				</span>
			</div>
		);
	}
}) ;

ReactDOM.render(<Input placeholder={'Add array items...'}/>, document.getElementById('input'));

ReactDOM.render(<Solution/>, document.getElementById('solution'));


var content = "Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1." ;
var title = "Minimum Moves to Equal Array Elements";

ReactDOM.render(
	<Jumbotron number={453} title={title} content={content} />,
	document.getElementById('jumbotron')
);

//ReactDOM.render(
//	<NavBar />,
//	document.getElementById('navbar')
//);