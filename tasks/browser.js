import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

//创建一个叫browser的任务
gulp.task('browser',(cb)=>{
    //如果没有监听，直接回调
    if(!args.watch) return cb();
    //监听APP原始资源目录下的所有js ejs css文件。
    //第一个参数是目录路径，第二个是执行何种任务。
    //比如app下的js文件发生变化，则调用刚才写的scripts任务把更新反映在服务器上（将es6转成es5写入server文件），刷新浏览器。
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});

