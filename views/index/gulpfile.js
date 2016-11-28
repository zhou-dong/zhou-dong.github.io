var fs = require('fs');
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var browserify = require('browserify');
var reactify = require('reactify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a stream

var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

gulp.task('index', function() {
	gulp.src('./index.ejs')
	.pipe(ejs(config))
	.pipe(rename('../index.html'))
	.pipe(gulp.dest('../')) ;
});

gulp.task('copy', function() {
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



gulp.task('default', ['index'], function() {
	return gulp.watch('*.*', ['index']);
});