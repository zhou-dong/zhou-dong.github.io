var React = require('react');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

function Obj() {
	var self = this;
	this.store = assign({}, EventEmitter.prototype, {
		instance: {}
	});
	this.dispatcher = new Dispatcher();
	this.dispatcher.register(function(eventName) {
		if (eventName === 'change') {
			self.store.emit('change');
		}
		return true;
	});
}

Obj.prototype.add = function add(key, val) {
	this.store.instance[key] = val;
	this.dispatcher.dispatch('change');
}

Obj.prototype.remove = function remove(key) {
	delete this.store.instance.key;
	this.dispatcher.dispatch('change');
}

Obj.prototype.instance = function instance() {
	return this.store.instance;
}

module.exports = Obj;