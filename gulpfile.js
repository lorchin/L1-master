var gulp = require ('gulp');
var less = require ('gulp-less');
var sourcemaps = require ('gulp-sourcemaps');
var autoprefixer = require ('gulp-autoprefixer');
var cleanCSS = require ('gulp-clean-css');
var concat = require ('gulp-concat');
var minify = require ('gulp-minify');
var rename = require ('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('styles', function(){
	gulp.src('./less/style.less')
	// .pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./build/css'))
	.pipe(rename('style.min.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function(){
	gulp.src([
		'./js/classie.js',
		'./js/selectFx.js',
		'./js/calc.js',
		'./js/main.js',
		'./js/slider.js'
	])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./build/js'))
		.pipe(minify())
        .pipe(gulp.dest('./build/js'));

	gulp.src(['node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.js'
	])
        .pipe(sourcemaps.init())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(minify())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', ['styles', 'scripts'], function() {
	browserSync.init({
		server: "./"
	});
		gulp.watch('less/**/*.less', ['styles']);
		gulp.watch('js/**/*.js', ['scripts']).on('change',browserSync.reload);
		gulp.watch('./*.html').on('change',browserSync.reload);

});

