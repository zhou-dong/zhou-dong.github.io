var fs = require('fs');
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');

var babel = require('gulp-babel');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

var NewPage = require('../utils/new-page');

var domain = "https://zhou-dong.github.io/";
var leetcode = domain + "leetcode/";
var author = 'Dong Zhou';

var config = function(path) {
	return JSON.parse(fs.readFileSync(path, 'utf8'));
}

gulp.task('about', function() {
	var page = new NewPage.About('about');
	console.log(page);
	gulp.src(page.template)
		.pipe(ejs(page))
		.pipe(rename(page.dest))
		.pipe(gulp.dest(page.dest));
});

var name = 'reverse-string';
gulp.task(name, function() {
	var page = new NewPage.Leetcode(name);
	gulp.src(page.template)
		.pipe(ejs(page))
		.pipe(rename(page.dest))
		.pipe(gulp.dest(page.dest));

	browserify(page.jsSrc)
		.transform("babelify", {
			presets: ["es2015", "react"]
		})
		.transform('reactify')
		.bundle()
		.pipe(source(name + '.js'))
		.pipe(gulp.dest('../../js'));
});

gulp.task('default', [name], function() {
	return gulp.watch(name + '/*.*', [name]);
});