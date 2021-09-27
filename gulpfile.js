const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return gulp
    .src('src/assets/css/main.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .on('error', sass.logError)
    .pipe(gulp.dest('./build/css'))
}

function watchCSS() {
  gulp.watch('src/assets/css/main.scss', gulp.parallel(css))
};

function js() {
  return gulp
  .src(['src/assets/js/core.js', 'src/assets/js/main.js'])
  .pipe(concat('main.js'))
  .pipe(uglify({toplevel: true}))
  .pipe(gulp.dest('./build/js'))
}

function watchJS() {
  gulp.watch('src/assets/js/main.js', gulp.parallel(js))
};

exports.default = gulp.parallel(css, js, watchCSS, watchJS);
exports.production = gulp.parallel(css, js);