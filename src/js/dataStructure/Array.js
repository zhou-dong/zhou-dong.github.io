var React = require('react');
var Dispatcher = require('flux').Dispatcher ;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var store = assign({}, EventEmitter.prototype, {items:[]}) ;

var dispatcher = new Dispatcher() ;
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

var init = function(items){
	for(var i = 0 ; i < items.length; i++){
		this.add(items[i]);
	}
	dispatcher.dispatch('change') ;
}

var sum = function(){
	return store.items.reduce(function(a,b){return a+b;}, 0) ;
}

var min = function(){
	return Math.min.apply(null, store.items) ;
}

var length = function(){
	return store.items.length;
}

var max = function(){
	return Math.max.apply(null, store.items);
}

var maxIndex = function(){
	var temp = store.items;
	if(temp.length === 0){
		return -1; 
	}
	var max = temp[0] ;
	var maxIndex = 0;
	for(var i = 1; i <temp.length; i++){
		if(temp[i] > max){
			max = temp[i] ;
			maxIndex = i ;
		}
	}
	return maxIndex;
}

var minIndex = function(){
	var temp = store.items ;
	if(temp.length === 0){
		return -1;
	}
	var min = temp[0];
	var minIndex = 0 ;
	for(var i = 1 ; i<temp.length; i++){
		if(temp[i] < min){
			min = temp[i] ;
			minIndex = i;
		}
	}
	return minIndex ;
}

var array = new Object() ;
array.store = store ;
array.add = add ;
array.remove = remove ;
array.update = update ;
array.init = init ;
array.sum = sum;
array.min = min;
array.max = max;
array.maxIndex = maxIndex ;
array.minIndex = minIndex ;
array.length = length ;

module.exports = array ;