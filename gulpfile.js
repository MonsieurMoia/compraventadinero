'use strict';

/**
 * Node Dependencies
 * remember to have dependencies installed with
 * npm install (dependency-name) --save
 */

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var browserify  = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var nodemon     = require('gulp-nodemon');


/**
 * Variables
 */

var sassPath  = "./build/sass/main.scss";
var jsPath  = "./build/js/main.js";
var outputDir = "./";


/**
 * Error Handling
 * Usage:
 * .on('error', handleError);
 * Use this line where you want to log if an error occurs
 */

function handleError(err){
  console.log(err.toString());
  this.emit('end');
}


/**
 * The Sass Task
 * compiles Sass Files from Sass Folder into Css
 */

gulp.task('sass', function(){
  var config = {};
  config.sourceComments = 'map';
  // config.outputStyle = 'compressed';

  return gulp.src(sassPath)
    .on('error', handleError)
    .pipe(sass(config))
    .on('error', handleError)
    .pipe(gulp.dest(outputDir + 'css/'))
    .pipe(reload({stream: true}));
});

/**
 * The JS Task
 * concatenates JS files and compiles them from the JS Folder
 */

 gulp.task('js', function(){
    return gulp.src(jsPath)
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest(outputDir + 'js/'));
 });

/**
 * The Serve Task
 * calls other Gulp tasks
 */

gulp.task('serve', ['sass','js'], function() {
	// browserSync.init(null, {
	// 	// proxy: "http://localhost:3000",
  //       files: ["./**/*.*","build/**/*.*"],
  //       browser: "google chrome",
  //       port: 5000
	// });

  gulp.watch('./build/sass/**/*.scss' , ['sass']);
  gulp.watch('./build/js/**/*.js' , ['js']);

});


/**
 * The Nodemon Task
 * Starts index.js and restarts it if the file is changed
 */

gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	});
});


/**
 * Default Gulp Task
 * This task will run when you call 'gulp' in the Command Line
 */

gulp.task('default', function(){
  browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["build/**/*.*"],
        browser: "google chrome",
        port: 7000
	});
  gulp.watch('./build/sass/**/*.scss' , ['sass']);
  gulp.watch('./build/js/**/*.js' , ['js']);


  var started = false;

	nodemon({
		script: 'index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('index.js')
			.pipe(browserSync())
	});
});
