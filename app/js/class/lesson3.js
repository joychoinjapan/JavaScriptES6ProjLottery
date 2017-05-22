/**
 * Created by baobaochu on 2017/5/22.
 */
{
    let regex=new RegExp('xyz','i');
    let regex2=new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    //后面的修饰符会覆盖前面的正则表达式所用到的修饰符
    let regex3=new RegExp(/xyz/ig,'i');
    console.log(regex3.flags);
}

// y u修饰符

// g和y都是全局匹配
// 不同的是g修饰符是从上次匹配的位置开始寻找直到再次匹配。无论下一个字符是否匹配成功
// y修饰符是开始匹配的下一个字符也必须匹配成功。
{
    let s='bbb_bb_b';
    let a1=/b+/g;
    let a2=/b+/y;

    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));

    //判断正则对象是否开启y（sticky）匹配模式。
    console.log(a1.sticky,a2.sticky);
}

//u修饰符。unicode特征值
{
    //加u修饰符把后续部分转换成一个整体。所以匹配不会成功ß
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    //大括号包起来的部分是作为一个unicode字符，必须加u修饰符。否则不会识别。
    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));

    //注意这个字符不是吉祥的吉。大于两个字节。如果字符串中有的字符是大于两个字节的，一定要加修饰符，否则无法正确处理。
    console.log(`\u{20BB7}`);
    let s='𠮷';
    console.log('u-1',/^.$/.test(s));
    console.log('u-2',/^.$/u.test(s));

    let s2='𠮷𠮷';
    console.log('test-1',/𠮷{2}/.test(s2));
    console.log('test-2',/𠮷{2}/u.test(s2));

    let s3='𠮷𠮷𠮷';
    console.log('test-3',/𠮷{3}/.test(s3));
    console.log('test-4',/𠮷{3}/u.test(s3));

    //. 有四个无法处理。行分隔符 段分隔符 换行符 回车符。要加s修饰符。（还未实现）
}