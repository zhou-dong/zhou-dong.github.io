var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

gulp.task('browserify', function(){
	browserify('./src/js/pages/index.js')
		.transform("babelify", {presets: ["es2015", "react"]})	
		.transform('reactify')
		.bundle()
		.pipe(source('index.js'))
		.pipe(gulp.dest('./js'));
});

gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('.'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('./css'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('./js'));
	gulp.src('src/img/*.*')
		.pipe(gulp.dest('./img'));
	gulp.src('src/fonts/*.*')
		.pipe(gulp.dest('./fonts'));
});

gulp.task('default', ['browserify', 'copy'], function(){
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});