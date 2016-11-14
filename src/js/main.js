var App = require('./components/App');
var Header = require('./components/Header');
var Footer = require('./components/Footer');
var Jumbotron = require('./components/Jumbotron');


var MyArray = require('./components/MyArray') ;

var NavBar = require('./components/NavBar');

var Stack = require('./dataStructure/Stack') ;

var array = require('./dataStructure/Array') ;

var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');

var a = [1,2,3,4]

array.init(a) ; 

var sum = array.sum();

var min = array.min() ;

var len = array.length() ;


console.log(array.sum()) ;
console.log(array.min()) ;
console.log(array.length()) ;

console.log(sum - min*len) ;

console.log(array.maxIndex()) ;
console.log(array.minIndex()) ;

var View = React.createClass({
	getInitialState: function(){
		var self = this;
		array.store.on('change', function(){
			self.setState({data: array.store.items}) ;
		});
		return {data: array.store.items} ;
	},
	render: function(){
		return (
			<div className="btn-group" role="group" aria-label="stack">{
				this.state.data.map(function(element, index){
					return ( <button type="button" key={index} className="btn btn-default">{element}</button>);
				})
			}</div>
		) ;
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

ReactDOM.render(
	<View />,
	document.getElementById('array')
);

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);

ReactDOM.render(
	<Jumbotron title="leetcode" content="welcome" link="11111.html"/>,
	document.getElementById('jumbotron')
);

ReactDOM.render(
	<NavBar />,
	document.getElementById('navbar')
);
