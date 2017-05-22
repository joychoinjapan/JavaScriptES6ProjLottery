import gulp from 'gulp';
import gulpif from 'gulp-if';
//启动脚本作为服务器的功能
import liveserver from 'gulp-live-server';
import args from './util/args';

//创建一个叫serve的任务，cb为回调函数
gulp.task('serve',(cb)=>{
    //如果不处于监听状态，返回回调函数
    if(!args.watch) return cb();
    //如果处于监听状态，我们要创建一个服务器，用liveserver.new这个命令
    //--harmony指的是要在当前命令下执行这个默认服务器脚本，脚本在server/bin/www
    var server=liveserver.new(['--harmony','server/bin/www']);
    //把服务器启动
    server.start();

    //服务器下面所有文件发生改变时，要让浏览器刷新所有资源。
    //第一个参数是个数组，表示监听server哪些路径和目录
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
        //监听完之后要通知服务器是否改变。
        server.notify.apply(server,[file]);

    })

    //监听需要重启服务的文件。比如路由和借口变化时
    //第一个参数是个数组，表示接口或服务入口文件改变时让服务重启
    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        //调用start api重启服务。
        server.start.bind(server)()
    });
})