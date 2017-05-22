
import gulp from 'gulp';
/**
 * gulpif gulp语句作if判断的包
 * concat gulp中处理文件拼接
 * webpack 打包
 * webpackstream 基于文件流处理的包
 * named 对文件重命名作标志的包
 * livereload 热更新，文件更新后浏览器自动刷新
 * plumber 处理文件信息流
 * rename 重命名
 * gulify 处理css js压缩
 * log colors 在命令行工具输出
 * args 对命令行参数进行解析
 */
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpwebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';


//用gulp.task命令创建脚本编译任务，任务名称起名为scripts
gulp.task('scripts',()=>{
    //函数内容：打开app／js／index.js这个目录
    return gulp.src(['app/js/index.js'])
        //处理常规错误逻辑
        .pipe(plumber({
            errorHandler:function () {

            }
        }))
        //对文件重新命名
        .pipe(named())
        //对js进行编译，用webpack的功能
        .pipe(gulpwebpack({
            //需要module模块和loader
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
            //pipe的第二个参数null，第三个参数错误处理
        }),null,(err,stats)=>{
            //对一个错误的处理
            log(`Finished'${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })

        //未压缩版本编译完成后把文件放到server/public/js路径中。因为server拿到编译完成的js后才能在整个服务中跑起来
        .pipe(gulp.dest('server/public/js'))

        //处理编译压缩的过程，重命名。
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))

        //重新压缩。要配置如何压缩。
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
        //压缩完之后，用dest命令存储到server/public/js
        .pipe(gulp.dest('server/public/js'))

        //监听文件。压缩文件后自动刷新。gulpif执行判断watch参数是否存在，如果有watch选项，则执行热更新。如果没有，不会监听也不会刷新
        .pipe(gulpif(args.watch,livereload()))
    })