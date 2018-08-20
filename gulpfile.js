var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var partials_source = 'stylesheets/scss/components';

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    gulp.src(['stylesheets/scss/*.scss'])
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./minified'))
        .pipe(browserSync.reload({stream: true}))
    gulp.src(['stylesheets/css/*.css'])
        .pipe(minifyCss())
        .pipe(gulp.dest('./minified'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    return gulp.src('scripts/*.js')
          .pipe(gulp.dest('./minified'))
          .pipe(rename({suffix:'.min'}))
          .pipe(uglify())
          .pipe(gulp.dest('./minified'))
          .pipe(browserSync.reload({stream: true}));
        });

gulp.task('default', function(){
    browserSync.init(['minified/*.js'], {
        server: "./"
    });

    //Sass events
    gulp.watch("stylesheets/scss/*.scss", ['sass']);
    gulp.watch("scripts/*.js", ['js']);
    gulp.watch("*.html").on('change', browserSync.reload);
})
