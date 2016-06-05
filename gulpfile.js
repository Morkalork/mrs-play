var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('client-js', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('dist/js/client'));
});

gulp.task('server-js', () => {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/server/server.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('server.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    // Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .on('error', console.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/server'));
});

gulp.task('style', () => {
  return gulp.src('./src/style/**/*.less')
    .pipe(gulp.dest('dist/style'));
});

gulp.task('default', ['html', 'style', 'client-js', 'server-js']);