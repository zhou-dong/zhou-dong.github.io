var React = require('react') ;
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign') ;
var EventEmitter = require('events').EventEmitter ;

var dispatcher = new Dispatcher() ;
dispatcher.register(function(eventName){
	if(eventName === 'change'){
		store.emit('change') ;
	}
	return true;
});

var store = assign({}, EventEmitter.prototype, {array:[]}) ;

var push = function(item){
	store.array.push(item) ;
	dispatcher.dispatch('change') ;
}

var pop = function(){
	var top = store.array.pop() ;
console.log(top);
	dispatcher.dispatch('change') ;
	return top ;
}

var peek = function(){
	return store.array[store.array.length - 1] ;
}

var isEmpty = function(){
	return store.array.length === 0;
}

var view = React.createClass({
	getInitialState: function(){
		var self = this;
		store.on('change', function(){
			self.setState({data: store.array});
		}) ;
		return { data: store.array } ;
	},
	render: function(){
		return (
			<div className="btn-group" role="group" aria-label="stack">{
				this.state.data.map(function(element, index){
					return ( <button type="button" key={element+index} className="btn btn-default">{element}</button>);
				})
			}</div>
		) ;
	}
}) ;

var instance = new Object() ;
instance.view = view ;
instance.push = push ;
instance.pop = pop ;
instance.peek = peek ;
instance.isEmpty = isEmpty ;

module.exports = instance ;