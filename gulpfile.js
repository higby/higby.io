const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const stripBom = require('gulp-stripbom');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return gulp
  .src(['src/assets/css/**/*.scss', 'src/assets/css/**/*.css'])
  .pipe(sass({ outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(stripBom())
  .pipe(gulp.dest('./src/components/includes/write/'))
}

function watchCSS() {
  gulp.watch(['src/assets/css/**/*.scss', 'src/assets/css/**/*.css'], gulp.parallel(css))
};

function js() {
  return gulp
  .src('src/assets/js/**/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify({toplevel: true}))
  .pipe(stripBom())
  .pipe(gulp.dest('./src/components/includes/write/'))
}

function watchJS() {
  gulp.watch('src/assets/js/**/*.js', gulp.parallel(js))
};

exports.default = gulp.parallel(css, js, watchCSS, watchJS);
exports.production = gulp.parallel(css, js);