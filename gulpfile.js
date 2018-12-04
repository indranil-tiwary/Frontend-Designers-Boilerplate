var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Styles.scss containing all @imports to css
gulp.task('sass', function () {
  gulp.src('scss/styles.scss')
    .pipe(sass({
      includePaths: ['scss']
    }))
    .pipe(gulp.dest('css'));
});

// BrowserSync to observe change in css and js
gulp.task('browser-sync', function () {
  browserSync.init(["css/*.css", "js/*.js"], {
    server: {
      baseDir: "./"
    }
  });
});

// Watch - Tie up of BrowserSync and SASS
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.html").on("change", reload);
});