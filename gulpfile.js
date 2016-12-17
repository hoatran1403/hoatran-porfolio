var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browserSync'],function(){

});


gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  //watch for file changes
  gulp.watch(['src/**/*','index.html'],function(){
    //reload browser on file changes
    browserSync.reload();
  });
})
