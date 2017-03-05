var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var dist = path.join(__dirname, '../../pages/');

var getDataContent = function(dataname) {
	var filePath = path.join(__dirname, 'data', dataname);
	return fs.readFileSync(filePath, 'utf8');
}

var content = {
	'title': 'Prepared Interview',
	'challenge': getDataContent('challenge.txt'),
	'intro': getDataContent('intro.txt'),
	'workflow': getDataContent('workflow.txt')
}

var ejsToHtml = function() {
	gulp.src('intro.ejs')
		.pipe(ejs(content))
		.pipe(rename('intro.html'))
		.pipe(gulp.dest(dist));
}

var reactBrowserify = function() {
	browserify('intro.js')
		.transform("babelify", {
			presets: ["es2015", "react"]
		})
		.transform('reactify')
		.bundle()
		.pipe(source('intro.js'))
		.pipe(gulp.dest(dist))
}

gulp.task('intro', function() {
	ejsToHtml();
	reactBrowserify();
});

gulp.task('default', ['intro'], function() {
	return gulp.watch(['./*.*', './data/*.*'], ['intro']);
});