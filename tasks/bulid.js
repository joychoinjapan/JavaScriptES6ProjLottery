
import gulp from 'gulp';
//处理包的顺序问题
import gulpSequence from 'gulp-sequence';

//顺序为清空->编译资源（css,pages)->编译完成后执行脚本scripts,数组['browser','serve']严格按照顺序，server放在最后面执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
