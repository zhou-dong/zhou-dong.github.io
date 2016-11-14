var React = require('react');
var Dispatcher = require('flux').Dispatcher ;
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

var add = function(item){
	store.items.push(item) ;
}

var update = function(index, item){
	store.items[index] = item ;
	dispatcher.dispatch('change') ;
}

var remove = function(index){
	store.items.splice(index, 1) ;
	dispatcher.dispatch('change') ;
}

var View = React.createClass({
	getInitialState: function(){
		var self = this;
		store.on('change', function(){
			self.setState({data: store.items}) ;
		});
		return {data: store.items} ;
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
});

var array = new Object() ;
array.view = View ;
array.add = add ;
array.remove = remove ;
array.update = update ;

module.exports = array ;