var Trie = require('../Trie').Trie;

var trie = new Trie();

trie.add("hello");

trie.add("world");


trie.add("hxllo");

trie.remove("hello");

trie.add("wolld");

console.log(trie);

var datasource = trie.root;

console.log(datasource);

$('#chart-container').orgchart({
	'data': datasource,
	'depth': 6
});