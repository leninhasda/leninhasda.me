var gulp        = require('gulp'),
    // del         = require('del'),
    rev         = require('gulp-rev'),
    // lr          = require('gulp-livereload'),
    // useref      = require('gulp-useref'),
    // filter      = require('gulp-filter'),
    uglify      = require('gulp-uglify'),
    // manifest    = require('gulp-manifest'),
    // filesize    = require('gulp-filesize'),
    minifyCss   = require('gulp-minify-css'),
    revReplace  = require('gulp-rev-replace'),
    // opn         = require('opn'),
    // chalk       = require('chalk'),
    // connect     = require('connect'),
    // serveStatic = require('serve-static')
    concat		= require('gulp-concat')
    // less		= require('gulp-less'),
    ;

// Config Variables
var src   = '',
    build = 'build';

/*gulp.task('buildCSS', function () {
  return gulp.src(src + '*.css')
    .pipe(minifyCss())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(build));
    .pipe(uglify())
});*/

gulp.task('build', ['buildCSS', 'buildJS', 'buildHTML']);

gulp.task('buildCSS', function () {
	var mcss = src + 'bower_components/materialize/dist/css/materialize.min.css'
	;

	return gulp.src([mcss])
		.pipe(minifyCss())
		.pipe(concat('style.css'))
		.pipe(gulp.dest(build));
});

gulp.task('buildJS', function () {
	var jqjs = src + 'bower_components/jquery/dist/jquery.min.js',
		mjs = src + 'bower_components/materialize/dist/js/materialize.min.js'
	;
	
	return gulp.src([jqjs, mjs])
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(build));
});

gulp.task('buildHTML', function(){
	var html = src + '*.html';

	return gulp.src([html])
		.pipe(gulp.dest(build));
});

/*gulp.task('watch', ['server'], function () {
  var server = lr();
  gulp.watch(src + '/**').on('change', function (file) {
    server.changed(file.path);
  });
});*/

gulp.task('default', ['build']);