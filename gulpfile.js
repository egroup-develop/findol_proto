var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browser = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('default', ['server'], function(){
  gulp.watch(['./src/html/*.html', './src/images/*', './src/javascripts/*', './src/stylesheets/*'], ['uglify']);
});

gulp.task('uglify', function(){
  gulp.src('./src/html/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/html'))
    .pipe(browser.reload({stream: true}));
  gulp.src('./src/images/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/images'))
    .pipe(browser.reload({stream: true}));
  gulp.src('./src/javascripts/*')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/javascripts'))
    .pipe(browser.reload({stream: true}));
  gulp.src('./src/stylesheets/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(browser.reload({stream: true}));
});

gulp.task('server', function(){
  browser({
    server: {
      baseDir: "./dist/html/"
    }
  });
});
