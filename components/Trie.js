/**
 * Trie structure for OrgChart
 *
 * @author Dong Zhou
 */

function Node(name) {
	this.name = name;
	this.children = {};
}

Node.prototype.contains = function(name) {
	return name in this.children;
}

Node.prototype.addChild = function(name) {
	if (!this.contains(name))
		this.children[name] = {};
	return this.children[name];
}

function Trie() {
	this.root = new Node("root");
}

Trie.prototype.validate = function(word) {
	if (word === undefined || word === null) {
		throw "The given word is invalid";
	}
	if (typeof word !== "string") {
		throw "The given word is not a string";
	}
}

Trie.prototype.add = function(word) {
	this.validate(word);
	var current = this.root;
	for (var i = 0; i < word.length; i++) {
		current = current.addChild(word[i]);
	}
}

Trie.prototype.remove = function(word) {
	this.validate(word);
	this._remove(this.root, word);
}

Trie.prototype._remove = function(node, word) {
	if (!node || !word) {
		return;
	}

	_remove(node, word);

}