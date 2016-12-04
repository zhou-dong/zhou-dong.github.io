var Trie = require('../../../components/Trie').Trie;

var callback = function() {
	$('.orgchart').remove();
	$('#chart-container').orgchart({
		'data': trie.root,
		'depth': trie.depth()
	});
};

var trie = new Trie();

var words = ["hello", "world", "troy", "university", "trojans"];

trie.addWords(words, callback);