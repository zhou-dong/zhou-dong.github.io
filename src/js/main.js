var App = require('./components/App');
var Header = require('./components/Header');
var Footer = require('./components/Footer');
var Jumbotron = require('./components/Jumbotron');

var NavBar = require('./components/NavBar');
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
			<div className='row'>
				<div className='btn-group btn-group-lg col-sm-8 col-center-block' role="group" aria-label="stack">
					{this.state.data.map(function(element, index){
						return ( <button type="button" key={index} className={self.isMax(index)}>{element}</button>);
					})}
				</div>
				<div className='col-sm-4'>
					<button className="btn btn-primary btn-lg" type="button">
  						Count <span className="badge">{this.state.count}</span>
					</button>
				</div>
			</div>
		) ;
	}
});

ReactDOM.render(
	<View />,
	document.getElementById('array')
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

var content = "Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1." ;
var title = "Minimum Moves to Equal Array Elements";

ReactDOM.render(
	<Jumbotron title={title} content={content} />,
	document.getElementById('jumbotron')
);

//ReactDOM.render(
//	<NavBar />,
//	document.getElementById('navbar')
//);
