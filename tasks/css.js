import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//创建一个叫css的任务
gulp.task('css',()=>{
    //打开app文件夹下的所有css文件
    return gulp.src('app/**/*.css')
        //拷贝到server.purblic文件夹下
        .pipe(gulp.dest('server/public'))
        //监听是否热更新,正常项目需要有
        //.pipe(gulpif(args.watch(),livereload()))

})
