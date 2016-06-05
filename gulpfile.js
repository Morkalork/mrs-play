var gulp = require('gulp');
var less = require('gulp-less');
var rollup = require('gulp-rollup');
var babel = require('rollup-plugin-babel');

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('client-js', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('dist/js/client'));
});

gulp.task('server-js', () => {

  return gulp.src('./src/server/server.js', { read: false })
    .pipe(rollup({
      plugins: [babel({
        presets: ["es2015-rollup"],
        babelrc: false
      })]
    }))
    .pipe(gulp.dest('./dist/js/server'));
});

gulp.task('style', () => {
  return gulp.src('./src/style/**/*.less')
    .pipe(gulp.dest('dist/style'));
});

gulp.task('default', ['html', 'style', 'client-js', 'server-js']);