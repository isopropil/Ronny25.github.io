'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');

gulp.task('default', function() {
  return gulp.src('js/src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js/dist'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('js/src/*.js', ['default']);
});
