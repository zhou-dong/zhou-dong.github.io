import React from "react";
import ReactDOM from 'react-dom' ;
import Footer from '../components/Footer' ;
import Header from '../components/Header' ;

ReactDOM.render(
	<Header />, document.getElementById('header')
);

ReactDOM.render(
	<Footer />, document.getElementById('footer')
);