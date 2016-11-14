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

var i = 0 ;

for(i = 0 ; i < 10 ; i++){
	array.add(i);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

ReactDOM.render(
	<array.view />,
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
