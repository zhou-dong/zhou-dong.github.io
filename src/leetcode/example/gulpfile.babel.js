var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

gulp.task('browserify', function(){
	browserify('./example.js')
		.transform("babelify", {presets: ["es2015", "react"]})	
		.transform('reactify')
		.bundle()
		.pipe(source('example.js'))
		.pipe(gulp.dest('../../../js'));
});

gulp.task('copy', function(){
	gulp.src('example.html')
		.pipe(gulp.dest('../../../leetcode'));
});

gulp.task('default', ['browserify', 'copy'], function(){
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});