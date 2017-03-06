var gulp       = require('gulp');  
var sass       = require('gulp-sass');  
var watch      = require('gulp-watch');

gulp.task('sass', function() {  
  return gulp.src('./sass-src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./sass-src/*.scss', ['sass'])
});
