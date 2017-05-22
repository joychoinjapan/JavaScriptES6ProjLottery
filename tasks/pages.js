import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//创建一个叫pages的任务
gulp.task('pages',()=>{
    //用src命令打开app下面的所有ejs文件。各个嵌套目录的都可以。
    return gulp.src('app/**/*.ejs')
        //原封不动的把文件拷贝道server目录下
        .pipe(gulp.dest('server'))
        //监听是不是热更新
        .pipe(gulpif(args.watch,livereload()))
})
