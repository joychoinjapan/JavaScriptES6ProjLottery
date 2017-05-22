/**
 * Created by baobaochu on 2017/5/22.
 */

//字符串扩展使用方法

//判断字符串中是否包含某些字符
{
    let str='string';
    console.log('includes',str.includes('r'));

}
//判断以哪些字符起始
{
    let str='string';
    console.log('start',str.startsWith('str'));
    console.log('end',str.endsWith('ng'));
}

//重复
{
    let str="abc";
    console.log(str.repeat(2));
}

//模版字符串（非常重要）
{
    //新建两个数据项
    let name="list";
    let info="hello world";
    //模版。把数据项放到${}中。
    let m=`i am ${name},${info}`;
    console.log(m);
}
//es7草案

{
    //前补白。如果需要输出两个长度的字符串，则在字符串前方加上0
    console.log('1'.padStart(2,'0'));
    //后补白。如果需要输出两个长度的字符串，则在字符串后方加上0
    console.log('1'.padEnd(2,'0'));

    console.log('1'.padStart(3,'0'));
    console.log('1'.padEnd(3,'02'));
}

//标签模版（比较难）
{
    let user={
        name:'list',
        info:'hello world'
    }
    console.log(abc`i am ${user.name}, ${user.info}`);
    //加了abc之后
    function abc(s1,s2,s3) {
        console.log(s1,s2,s3);
        return s1+s2+s3;
    }

}
//raw可以忽略转义字符。实现不换行。斜杠不生效。相当于在斜杠前面加斜杠。
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}