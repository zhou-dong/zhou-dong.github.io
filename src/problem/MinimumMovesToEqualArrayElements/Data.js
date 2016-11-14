var Dispatcher = require('./Dispatcher') ;

var EventEmitter = require('events').EventEmitter ;
var assign = require('object-assign') ;

var CHANGE_EVENT = 'change' ;

var _items = [] ;

var Data = assign({}, EventEmitter.prototype, {
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});


Dispatcher.register(function(){

	return true;
});

module.exports = Data;