var fs = require('fs') ;
var gulp = require('gulp') ;
var ejs = require('gulp-ejs') ;
var rename = require('gulp-rename') ;

var domain = "https://zhou-dong.github.io/"

gulp.task('about', function(){
	var page = {url: domain + "/about/ahout.html", identifier: "identifier"} ;
	var head = {title : 'ABOUT 周动', keywords : '读书体验、人生思考',
		description: '周动的读书体验、人生经历、生活感想', author : '周动' };
	gulp.src('./about.ejs')
		.pipe(ejs({head: head, page: page}))
		.pipe(rename('../../about/about.html'))
		.pipe(gulp.dest('./'));
}) ;
