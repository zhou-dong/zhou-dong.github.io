var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

function Queue() {
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

Queue.prototype.push = function push(item) {
	this.store.array.push(item);
	this.dispatcher.dispatch('change');
};

Queue.prototype.poll = function poll() {
	var last = this.store.array.shift();
	this.dispatcher.dispatch('change');
	return last;
};

Queue.prototype.peek = function peek() {
	return this.store.array[this.store.array.length - 1];
};

Queue.prototype.isEmpty = function isEmpty() {
	return this.store.array.length === 0;
};

Queue.prototype.empty = function empty(){
	this.store.array = [] ;
	this.dispatcher.dispatch('change');
};

Queue.prototype.view = React.createClass({
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
			<div className={this.getViewClass()} role="group" aria-label="Queue">{
				this.state.data.map(function(element, index){
					return ( <button type="button" key={element+index} className="btn btn-default btn-lg">{element}</button>);
				})
			}</div>
		) ;
	}
}) ;

module.exports = Queue;