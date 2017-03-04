var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var browserify = require('browserify');
// Converts string to a stream
var source = require('vinyl-source-stream');
var fs = require('fs');

var dist = './pages/';
var views = './views/';

gulp.task('intro', function() {
	var directory = views + 'intro/';
	var ejsTemplate = directory + 'intro.ejs';
	var reactSource = directory + 'intro.js';
	var introContent = fs.readFileSync(directory + 'intro.txt', 'utf8')
	var content = {
		'title': 'Prepared Interview',
		'content': introContent
	};
	// ejs to html
	gulp.src(ejsTemplate)
		.pipe(ejs(content))
		.pipe(rename('intro.html'))
		.pipe(gulp.dest(dist));
	// react.js browserify
	browserify(reactSource)
		.transform("babelify", {
			presets: ["es2015", "react"]
		})
		.transform('reactify')
		.bundle()
		.pipe(source('intro.js'))
		.pipe(gulp.dest(dist))
});

gulp.task('default', ['intro'], function() {
	return gulp.watch("./views/intro/*.*", ['intro']);
});