var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  eslint = require('gulp-eslint'),
  livereload = require('gulp-livereload');


gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee ejs',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop',
  'watch'
]);


gulp.task('lint', function(){

  return gulp.src(['app/**/*.js','config/**/*.js','public/js/*.js'])
    .pipe(eslint({
      configFile:".eslintrc"
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});



gulp.task("watch",function(){
  gulp.watch(['app/**/*.js','config/**/*.js','public/js/*.js'], ['lint']);
});
