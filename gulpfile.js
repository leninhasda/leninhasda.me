var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var autoprefixer    = require('gulp-autoprefixer'),
    minifycss       = require('gulp-minify-css'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify');
var gzip    = require('gulp-gzip');

var appAssets = __dirname + '/app/assets';
var lessSource  = appAssets + '/less/*.less',
    cssDest    = __dirname + '/public/static/css';


gulp.task('default', function() {
    console.log("I have configured a gulpfile");
});

gulp.task('convert-less', function () {
  gulp.src(lessSource)
    .pipe(less())
    .pipe(autoprefixer('last 2 version'))
    // .pipe(gulp.dest(lessDest))
    .pipe(concat('custom.css'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(minifycss())
    // .pipe(gzip())
    .pipe(gulp.dest(cssDest));
});

var bowerDir    = __dirname + '/bower_components';
gulp.task('process-vendor-css',function(){
    gulp.src([
        bowerDir + '/materialize/dist/css/materialize.min.css',
        bowerDir + '/font-awesome/css/font-awesome.min.css'
    ])
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('vendor.css'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(minifycss())
    // .pipe(gzip())
    .pipe(gulp.dest(cssDest));
});

var jsDest = __dirname + '/public/static/js';
gulp.task('process-vendor-js',function(){
    gulp.src([
        bowerDir + '/angular/angular.js',
        bowerDir + '/angular-route/angular-route.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(uglify())
    // .pipe(gzip())
    .pipe(gulp.dest(jsDest));
});

gulp.task('process-js',function(){
    gulp.src([
        appAssets + '/js/app.js'
        // bowerDir + '/angular-route/angular-route.js'
    ])
    // .pipe(concat('vendor.js'))
    .pipe(rename({suffix: '.min'} ))
    .pipe(uglify())
    // .pipe(gzip())
    .pipe(gulp.dest(jsDest));
});

var fontsSrc = __dirname + '/public/static/fonts';
var fontsDest = __dirname + '/public/static/fonts';
gulp.task('copy-font', function(){
    gulp.src([
        bowerDir + '/materialize/dist/fonts/**/*',
        bowerDir + '/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest(fontsDest));
});

var imgSrc = __dirname + '/app/assets/img/*'
var imgDest = __dirname + '/public/static/img';
gulp.task('copy-img', function(){
    gulp.src([
        imgSrc
    ])
    .pipe(gulp.dest(imgDest));
});

var fileSrc;
var fileDest = __dirname + '/public';
gulp.task('copy-files', function(){
    gulp.src([
        __dirname + '/client/html/**/*.html'
    ])
    .pipe(gulp.dest(fileDest));
});


gulp.task('watcher', function(){
    gulp.watch('client/**/*',
        ['copy-files', 'copy-img', 'copy-font', 'process-js', 'process-vendor-js', 'process-vendor-css', 'convert-less']
    );
});



gulp.task('process-header-scripts', function() {
  gulp.src([
        __dirname+'/../public/bower_components/ng-file-upload/angular-file-upload-shim.min.js',
        __dirname+'/../public/bower_components/angular/angular.min.js',
        __dirname+'/../public/bower_components/angular-sanitize/angular-sanitize.min.js',
        __dirname+'/../public/bower_components/angular-translate/angular-translate.min.js',
        __dirname+'/../public/bower_components/angular-route/angular-route.min.js',
        __dirname+'/../public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    ])
  .pipe(concat('external-header.js'))
  .pipe(gulp.dest(__dirname+'/../public/production/js/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(__dirname+'/../public/production/js/'))
  .pipe(gzip())
  .pipe(gulp.dest(__dirname+'/../public/production/js/'));
});


gulp.task('process-footer-scripts', function() {
  gulp.src([
        __dirname+'/../public/bower_components/angular-dialog-service/dialogs.min.js',
        __dirname+'/../public/bower_components/d3/d3.min.js',
        __dirname+'/../public/bower_components/nvd3/nv.d3.min.js',
        __dirname+'/../public/bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js',
        __dirname+'/../public/bower_components/angular-easyfb/angular-easyfb.min.js',
        __dirname+'/../public/bower_components/ng-table/ng-table.js',
        __dirname+'/../public/bower_components/moment/moment.js',
        __dirname+'/../public/bower_components/ng-tags-input/ng-tags-input.min.js',
        __dirname+'/../public/bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
        __dirname+'/../public/bower_components/ngstorage/ngStorage.min.js',
        __dirname+'/../public/bower_components/angular-socket-io/socket.min.js',
        __dirname+'/../public/bower_components/ng-file-upload/angular-file-upload.min.js',
    ])
  .pipe(concat('external-footer.js'))
  .pipe(gulp.dest(__dirname+'/../public/production/js/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(__dirname+'/../public/production/js/'))
  .pipe(gzip())
  .pipe(gulp.dest(__dirname+'/../public/production/js/'));
});

gulp.task('path',function(){
    console.log(__dirname);
});

gulp.task('compress-js', function() {
    gulp.src([
        __dirname+'/../public/bower_components/angular-dialog-service/dialogs.min.js',
        __dirname+'/../public/bower_components/d3/d3.min.js',
    ])
    .pipe(gzip())
    .pipe(gulp.dest('./public/scripts'));
});