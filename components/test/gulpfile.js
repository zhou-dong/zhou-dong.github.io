var fs = require('fs');
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

var name = 'trie';
gulp.task(name, function() {

	browserify("./TestTrie.js")
		.transform("babelify", {
			presets: ["es2015"]
		})
		.transform('reactify')
		.bundle()
		.pipe(source('./TestTrie2.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('default', [name], function() {
	return gulp.watch('../*.*', [name]);
});