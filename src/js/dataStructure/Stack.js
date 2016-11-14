var React = require('react') ;
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var dispatcher = new Dispatcher() ;

var store = assign({}, EventEmitter.prototype, {items:[]}) ;

dispatcher.register(function(eventName){
	if(eventName === 'change'){
		store.emit('change');
	}
	return true;
}) ;

var push = function(item){
	store.items.push(item) ;
	dispatcher.dispatch('change') ;
}

var pop = function(){
	var top = store.items.pop() ;
	dispatcher.dispatch('change');
	return top;
}

var peek = function(){
	return store.items[store.items.length - 1] ;
}

var isEmpty = function(){
	return store.items.length === 0;
}

var View = React.createClass({
	getInitialState: function(){
		var self = this;
		store.on('change', function(){
			self.setState({data: store.items});
		}) ;
		return { data: store.items } ;
	},
	render: function(){
		return (
			<div className="btn-group" role="group" aria-label="stack">{
				this.state.data.map(function(element){
					return ( <button type="button" key={element} className="btn btn-default">{element}</button>);
				})
			}</div>
		) ;
	}
}) ;

var stack = new Object() ;
stack.view = View ;
stack.pop = pop ;
stack.push = push 
stack.peek = peek ;
stack.isEmpty = isEmpty;

//setInterval(pop, 3000);
module.exports = stack;