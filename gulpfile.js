var gulp       = require('gulp');  
var less       = require('gulp-less');  
var watch      = require('gulp-watch');

gulp.task('less', function() {  
  return gulp.src('node_modules/bootstrap/less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('views'));
});

gulp.task('watch', function(){
	gulp.watch('node_modules/bootstrap/less/*.less', ['less'])
});
