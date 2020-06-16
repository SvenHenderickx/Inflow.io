'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('css/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css/css'));
});
 
gulp.task('watch', function () {
  	gulp.watch('css/sass/**/*.scss', gulp.series('sass'));
});