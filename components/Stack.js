var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

function Stack() {
	var self = this;
	this.store = assign({}, EventEmitter.prototype, {
		array: []
	});
	this.dispatcher = new Dispatcher();
	this.dispatcher.register(function(eventName) {
		if (eventName === 'change') {
			self.store.emit('change');
		}
		return true;
	});

}

Stack.prototype.push = function push(item) {
	this.store.array.push(item);
	this.dispatcher.dispatch('change');
};

Stack.prototype.pop = function pop() {
	var top = this.store.array.pop();
	this.dispatcher.dispatch('change');
	return top;
};

Stack.prototype.peek = function peek() {
	return this.store.array[this.store.array.length - 1];
};

Stack.prototype.isEmpty = function isEmpty() {
	return this.store.array.length === 0;
};

Stack.prototype.empty = function empty(){
	this.store.array = [] ;
	this.dispatcher.dispatch('change');
};

Stack.prototype.view = React.createClass({
	getViewClass: function(){
		return (this.props.isVertical) ? "btn-group-vertical" : "btn-group" ;
	},
	getInitialState: function(){
		var self = this;
		var parent = this.props.parent;
		parent.store.on('change', function(){
			self.setState({data: parent.store.array});
		}) ;
		return { data:  parent.store.array } ;
	},
	render: function(){
		return (
			<div className={this.getViewClass()} role="group" aria-label="stack">{
				this.state.data.slice(0).reverse().map(function(element, index){
					return ( <button type="button" key={element+index} className="btn btn-default btn-lg">{element}</button>);
				})
			}</div>
		) ;
	}
}) ;

module.exports = Stack;