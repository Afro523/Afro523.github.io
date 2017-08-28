var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minify = require('gulp-minify');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var partials_source = 'stylesheets/scss/components';

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("stylesheets/scss/*.scss", ['sass']);
		gulp.watch("stylesheets/scss/components/_variables.scss", ['sass']).on('change', browserSync.reload);
        gulp.watch("*.html").on('change', browserSync.reload);
		gulp.watch("scripts/*.js").on('change', browserSync.reload);
        gulp.watch("stylesheets/css/stars.css").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(["stylesheets/scss/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("stylesheets/css"))
        .pipe(browserSync.stream());
});

gulp.task('compressJS', function() {
    return gulp.src('scripts/*.js')
          .pipe(minify())
          .pipe(gulp.dest('minified'))
        });

  gulp.task('compressCss', function() {
    return gulp.src('stylesheets/css/*.css')
        .pipe(minifyCss())
        .pipe(rename(function (path){
          path.basename += "-min";
        }))
        .pipe(gulp.dest('minified'))
    });
gulp.task('default', ['serve']);
gulp.task('minify', ['compressJS', 'compressCss']);