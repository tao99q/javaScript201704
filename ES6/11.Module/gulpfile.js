var gulp = require('gulp');
var browserify = require('browserify'); // 打包工具
var babelify = require('babelify'); // 转换成es6
var watchify = require('watchify'); // 加快打包速度
var source = require('vinyl-source-stream'); // 将常规流转换为包含 Stream 的 vinyl 对象
var buffer = require('vinyl-buffer'); // 将 vinyl 对象内容中的 Stream 转换为 Buffer
var rename = require('gulp-rename'); // 重命名文件
var es = require('event-stream'); // 合并多个task用
var plumber = require('gulp-plumber'); // 错误处理 browserify 无法使用
var glob = require('glob'); // 获取匹配的文件
var browserSync = require('browser-sync'); // 自动刷新 2.0后不用create了也可以呢
var notify = require("gulp-notify"); // 调用Mac系统通知

// 静态服务器配置
gulp.task('browsersync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    startPath: '/Module.html',
    port: '9393'
  });
});

// 打包并且进行babel转码
gulp.task('browserify', function () {
    // 匹配多个入口文口
    glob('./src/**/app.js', function (err, files) {
      if(err) console.error('有错误啦~');

      var tasks = files.map(function (entry) {
        return browserify({entries: [entry]})
          .transform('babelify', {presets: ["es2015", "stage-0"]})
          .bundle()
          .on('error', function (error) {
            var args = Array.prototype.slice.call(arguments);
            notify.onError(function (error) {
              return {
                title: "失败了,唔~",
                message: error.message,
                sound: false
              };
            }).apply(this, args);
            this.emit('end');
          })
          .pipe(source(entry))
          .pipe(rename(function (path) {
            path.basename = path.dirname.replace('src', '').replace('/', '') || '0.app'; // 不要用一个处理过的变量 好坑啊...
            path.dirname = '';
          }))
          .pipe(gulp.dest('./dist'))
          .pipe(browserSync.stream());
      });

      es.merge(tasks).on('end', () => {
        browserSync.reload();
        return null;
      });
    });
});

gulp.task('watch', function(){
    gulp.watch(['./src/**/*.js'], ['browserify']);
    gulp.watch(['./Module.html'], browserSync.reload);
});

gulp.task('default', ['browsersync', 'browserify', 'watch']);

