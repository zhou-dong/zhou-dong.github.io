var fs = require('fs');　　

var readJson = function(path) {
	return JSON.parse(fs.readFileSync(path, 'utf8'));
};

var extendCopy = function(child, parent) {　　　　
	for (var property in parent) {　　　　　　
		child[property] = parent[property];　　　　
	}
	//child.uber = parent;　
};

function Page(name) {
	this.name = name;
	this.srcDir = "./" + name + "/";
	this.config = this.srcDir + "config.json";
	this.template = this.srcDir + name + ".ejs";
	this.jsSrc = this.srcDir + name + ".js";
	extendCopy(this, readJson(this.config));
	if (!('author' in this)) {
		this.author = 'Dong Zhou';
	}
	if (!('identifier' in this)) {
		this.identifier = 'identifier';
	}
};

Page.prototype.domain = "https://zhou-dong.github.io/";
Page.prototype.dest = "../../";

var path = function(pre, category, name) {
	return pre + category + "/" + name + ".html";
};

function Leetcode(name) {
	var page = new Page(name);
	extendCopy(this, page);
	this.url = path(this.domain, "leetcode", name);
	this.dest = path(this.dest, "leetcode", name);
	var preDescription = "leetcode code solution and animation for ";
	this.description = preDescription + this.description;
};

function About(name) {
	var page = Page(name);
	extendCopy(this.page);
	this.url = path(this.domain, "about", name);
	this.dest = path(this.dest, "about", name);
};

module.exports = {
	Leetcode: Leetcode,
	About: About
};