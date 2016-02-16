'use strict';

let gulp = require('gulp');
let webpack = require('gulp-webpack');
let browserSync = require('browser-sync').create() ;
let watch = require('gulp-watch');
let shell = require('gulp-shell');
let sass = require('gulp-sass');

gulp.task('browser-sync', () => {
  browserSync.init({
    files: ['./public/**/*.scss', './public/**/*.js', './public/**/*.html']
  });
});

gulp.task('sass', () => {
  gulp.src('public/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/css'))
});

gulp.task('sass:watch', () => {
  gulp.watch('./public/src/scss/**/*.scss', ['sass']);
});

gulp.task('webpack', () => {
  return gulp.src('public/src/app.js')
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015']
          }
        }, {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest('./public/dist/js/'));
});

gulp.task('default', ['webpack', 'sass', 'sass:watch', 'browser-sync']);
