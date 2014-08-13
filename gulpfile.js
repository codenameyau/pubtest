/*!
 * PubTest.js - gulpfile.js
 * MIT License (c) 2014
 * codenameyau.github.io
 *
 * Description:
 * Client-side tests with modern browser console
 */
'use strict';

// Load dependecies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rimraf = require('rimraf');

// Task: clean 'build'
gulp.task('clean', function(cb) {
  rimraf('build/', cb);
});

// Task: uglify js in 'src'
gulp.task('uglify', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'));
});

// Task: Run and generate 'build/'
gulp.task('default', ['clean', 'uglify']);
