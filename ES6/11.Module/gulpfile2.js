var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream'); // 将常规流转换为包含 Stream 的 vinyl 对象
var buffer = require('vinyl-buffer'); // 将 vinyl 对象内容中的 Stream 转换为 Buffer

// 只是babel转码 没有打包功能 该task没有运行
var babel = require('gulp-babel');
gulp.task('babel', function(){
  return gulp.src(['./src/*.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/'));
});

// 打包并且进行babel转码
gulp.task('browserify', function () {
  browserify({
    entries: ['./src/main.js']
  })
    .transform('babelify', {presets: ["es2015", "stage-0"]})
    .bundle()
    .on('error', function(err){
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function(){
  gulp.watch(['src/*.js'], ['browserify']);
});

gulp.task('default', ['watch']);

