(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Trie structure for OrgChart
 *
 * @author Dong Zhou
 */

function Node(name) {
	this.name = name;
	this.children = [];
}

Node.prototype.childIndex = function (name) {
	var result = -1;
	this.children.forEach(function (element, index) {
		if (element["name"] === name) {
			result = index;
			return;
		}
	});
	return result;
};

Node.prototype.addChild = function (name) {
	if (this.childIndex(name) === -1) this.children.push(new Node(name));
	return this.children[this.childIndex(name)];
};

Node.prototype.getChild = function (name) {
	var index = this.childIndex(name);
	return index === -1 ? null : this.children[index];
};

Node.prototype.remove = function (index) {
	this.children.splice(index, 1);
};

Node.prototype.isEmpty = function () {
	return this.children.length === 0;
};

function Trie() {
	this.root = new Node("root");
}

Trie.prototype.validate = function (word) {
	if (word === undefined || word === null) {
		throw "The given word is invalid";
	}
	if (typeof word !== "string") {
		throw "The given word is not a string";
	}
};

Trie.prototype.add = function (word) {
	this.validate(word);
	var current = this.root;
	for (var i = 0; i < word.length; i++) {
		current = current.addChild(word[i]);
	}
};

Trie.prototype.remove = function (word) {
	this.validate(word);
	_remove(this.root, word);

	function _remove(node, word) {
		if (!node || !word) {
			return;
		}
		var current = word.charAt(0);
		if (node.childIndex(current) === -1) {
			return;
		}
		_remove(node.getChild(current), word.substring(1));
		if (node.getChild(current).isEmpty()) {
			node.remove(node.childIndex(current));
		}
	}
};

module.exports.Trie = Trie;


},{}],2:[function(require,module,exports){
"use strict";

var Trie = require('../Trie').Trie;

var trie = new Trie();

trie.add("hello");

trie.add("world");

trie.add("hxllo");

trie.remove("hell");

trie.add("wolld");

console.log(trie);

var datasource = trie.root;

console.log(datasource);

$('#chart-container').orgchart({
	'data': datasource,
	'depth': 6
});


},{"../Trie":1}]},{},[2]);
