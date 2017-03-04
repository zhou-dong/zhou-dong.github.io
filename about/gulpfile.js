var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var browserify = require('browserify');

var dest = './pages/';
var views = './views/';

gulp.task('intro', function() {
	var content = {
		'title': 'Prepared Interview'
	};
	gulp.src(views + 'intro.ejs')
		.pipe(ejs(content))
		.pipe(rename('intro.html'))
		.pipe(gulp.dest(dest));
});


gulp.task('default', ['intro'], function() {
	return gulp.watch("./views/*.*", ['intro']);
});