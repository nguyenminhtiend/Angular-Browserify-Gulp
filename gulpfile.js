"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('js', function () {
    browserify('./app/main.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.js', './app/**/*.js'], ['js']);
});

gulp.task('default', ['webserver', 'js', 'watch']);