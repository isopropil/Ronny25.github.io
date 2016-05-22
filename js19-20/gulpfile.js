'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

// Styles
gulp.task('styles', function () {
  return gulp.src('production/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("style.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('final/css'));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('production/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('final/js'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('production/styles/*.scss', ['styles']);
    gulp.watch('production/js/*.js', ['scripts']);
});
