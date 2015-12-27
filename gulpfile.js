var gulp = require('gulp');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');


gulp.task('default', function() {
});

  gulp.task('compress', function() {
    return gulp.src('javascripts/*.js')
      .pipe(minify({
        ignoreFiles: ['-min.js']
      }))
      .pipe(gulp.dest('minified'))
});
  gulp.task('compress', function() {
    return gulp.src('stylesheets/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('minified'))

});
