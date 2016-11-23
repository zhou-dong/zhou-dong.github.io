var React = require('react');
var ReactDOM = require('react-dom') ;

var Header = require('../../js/components/Header') ;
var Footer = require('../../js/components/Footer') ;


ReactDOM.render(
	<Header />, document.getElementById('header')
);

ReactDOM.render(
	<Footer />, document.getElementById('footer')
);
