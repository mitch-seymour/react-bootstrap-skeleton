'use strict';

var
    gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    buffer = require('vinyl-buffer'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    paths = {};

paths.scripts = ['assets/js/**/*.js', 'assets/js/**/*.jsx']
paths.styles  = ['assets/css/**/*.css', 'assets/css/**/*.scss']

gulp.task('serve', ['scripts'], function(){
    
    /*
    browserSync.init(null, {
        proxy: "localhost:3000"
    });
    */
    
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
    
});


// css/sass tasks
gulp.task('styles', function () {
    
    return gulp.src('assets/**/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(rename('app.bundle.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
    
});

// javascript/jsx tasks
gulp.task('scripts', function () {
    
    var b = browserify({
        entries: 'assets/js/app.jsx',
        extensions: ['.coffee', '.js', '.jsx'],
        transform: ['reactify', 'babelify'],
        debug: true
    });
    
    return b.bundle()
        .pipe(source('app.bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
          // Add transformation tasks to the pipeline here.
          //.pipe(jshint())
          //.pipe(jshint.reporter('jshint-stylish'))
          .pipe(gulp.dest('public/js'))
          .pipe(rename('app.bundle.min.js'))
          .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'));
});


gulp.task('default', ['serve']);