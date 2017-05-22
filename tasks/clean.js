import gulp from 'gulp';
//引入作删除动作的包
import del from 'del';
import args from './util/args';

//创建clean命令，删除server/public 和server/views的文件
gulp.task('clean',()=>{
    return del(['server/public','server/views'])
});

