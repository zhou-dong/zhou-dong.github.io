var Trie = require('../../../components/Trie').Trie;

var show = function() {
	$('.orgchart').remove();
	$('#chart-container').orgchart({
		'data': trie.root,
		'depth': trie.depth()
	});
};

var trie = new Trie();

//trie.add("hello");
trie.add("world");
trie.add("hxllo");
trie.remove("hxllo");
var words = ["hello", "world", "troy", "university"];
//trie.addSlow("wolld", show);


var index = 0;
var len = words.length;

var intervalId = setInterval(function() {
	if (index === len) {
		clearInterval(intervalId);
	} else {
		trie.addSlow(words[index++], show);
	}
}, 1000);
trie.addSlow("hello", show);