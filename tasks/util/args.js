/*引入处理命令行参数的npm包yargs，因为需要程序去自动识别命令*/
import yargs from 'yargs';

// 定义一些基本参数

const args=yargs

// 区分开发环境和线上环境
// option是指的输入的命令行里的参数，识别是否带production，watch，verbose等参数

    //区分线上还是开发环境，选项是布尔类型，默认值为false（开发环境）
    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    //控制监听开发环境下的文件是否变化，修改后需要自动编译。默认值为false(否)
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    //要不要详细输出命令行执行日志
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })

    //处理映射参数。强制生成资源映射
    .option('sourcemaps',{
        describe:'force the creation of sourcemaps'
    })

    //设置服务器端口，字符串类型默认值8080
    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })

    //表示输入的命令行以字符串进行解析
    .argv
export default args;




