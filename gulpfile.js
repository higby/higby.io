const gulp = require('gulp');
const uglify = require('gulp-uglify');
const stripBom = require('gulp-stripbom');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return gulp
  .src(['src/assets/styles/**/*.scss', 'src/assets/styles/**/*.css'])
  .pipe(sass({ outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(stripBom())
  .pipe(gulp.dest('./src/components/includes/write/'))
}

function watchCSS() {
  gulp.watch(['src/assets/styles/**/*.scss', 'src/assets/styles/**/*.css'], gulp.parallel(css))
};

function js() {
  return gulp
  .src('src/assets/scripts/**/*.js')
  .pipe(uglify({toplevel: true}))
  .pipe(stripBom())
  .pipe(gulp.dest('./src/components/includes/write/'))
}

function watchJS() {
  gulp.watch('src/assets/scripts/**/*.js', gulp.parallel(js))
};

exports.default = gulp.parallel(css, js, watchCSS, watchJS);
exports.production = gulp.parallel(css, js);