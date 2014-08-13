/*!
 * PubTest.js - gulpfile.js
 * MIT License (c) 2014
 * codenameyau.github.io
 *
 * Description:
 * Client-side tests with modern browser console
 */

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
