var gulp = require ('gulp');
var less = require ('gulp-less');
var sourcemaps = require ('gulp-sourcemaps');
var autoprefixer = require ('gulp-autoprefixer');
var cleanCSS = require ('gulp-clean-css');
var concat = require ('gulp-concat');
var minify = require ('gulp-minify');
var rename = require ('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
	gulp.src ('less/style.less')
	.pipe(less())
	.pipe(gulp.dest('css'));
});

gulp.task('styles', function(){
	gulp.src('./less/style.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(gulp.dest('css'))
	.pipe(rename('style.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function(){
	gulp.src ([
		'./js/classie.js',
		'./js/selectFx.js',
		'./js/calc.js',
		'./js/main.js'
	])
		.pipe(sourcemaps.init())
		.pipe(concat('classie.js'))
		.pipe(concat('selectFx.js'))
		.pipe(concat('calc.js'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('/js'))
		.pipe(rename('classie.js'))
		.pipe(rename('selectFx.js'))
		.pipe(rename('calc.js'))
		.pipe(rename('main.js'))
		.pipe(minify())
		.pipe(gulp.dest('/js'))
});

gulp.task('watch', ['styles', 'scripts'], function() {
	browserSync.init({
		server: "./"
	});
		gulp.watch('less/**/*.less', ['less']).on('change',browserSync.reload);
		gulp.watch('./html').on('change',browserSync.reload);

});

