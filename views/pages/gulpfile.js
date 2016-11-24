var fs = require('fs') ;
var gulp = require('gulp') ;
var ejs = require('gulp-ejs') ;
var rename = require('gulp-rename') ;

gulp.task('ejs', function(){

	var head = {
		title : 'about',
		keywords : 'keywords',
		description: 'description',
		author : 'dong zhou'
	}

	var template = './about.ejs' ;


	gulp.src(template)
		.pipe(ejs({
			title : 'about',
			keywords : 'keywords',
			description: 'description',
			author : 'dong zhou'
		}))
		.pipe(rename('about.html'))
		.pipe(gulp.dest('./'));
}) ;
