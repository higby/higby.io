const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const footer = require('gulp-footer');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return gulp
  .src(['src/assets/css/**/*.scss', 'src/assets/css/**/*.css'])
  .pipe(sass({ outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(footer('\n/*\n--------------------------------\n(c) 2021 Branden Higby\nReleased under the MIT license\nhttps://github.com/higby/higby.io/\n--------------------------------\n*/'))
  .pipe(gulp.dest('./build/css'))
}

function watchCSS() {
  gulp.watch(['src/assets/css/**/*.scss', 'src/assets/css/**/*.css'], gulp.parallel(css))
};

function js() {
  return gulp
  .src(['src/assets/js/core.js', 'src/assets/js/main.js'])
  .pipe(concat('main.js'))
  .pipe(uglify({toplevel: true}))
  .pipe(footer('\n/*\n--------------------------------\n(c) 2021 Branden Higby\nReleased under the MIT license\nhttps://github.com/higby/higby.io/\n--------------------------------\n*/'))
  .pipe(gulp.dest('./build/js'))
}

function watchJS() {
  gulp.watch('src/assets/js/main.js', gulp.parallel(js))
};

exports.default = gulp.parallel(css, js, watchCSS, watchJS);
exports.production = gulp.parallel(css, js);