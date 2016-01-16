var gulp = require('gulp');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");


gulp.task('default', function() {
});


  gulp.task('compressJS', function() {
    return gulp.src('javascripts/*.js')
          .pipe(minify())
          .pipe(gulp.dest('minified'))
        });

  gulp.task('compressCss', function() {
    return gulp.src('stylesheets/*.css')
        .pipe(minifyCss())
        .pipe(rename(function (path){
          path.basename += "-min";
        }))
        .pipe(gulp.dest('minified'))

});
