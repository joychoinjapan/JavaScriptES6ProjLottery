/**
 * Created by baobaochu on 2017/5/22.
 */
//1.Unicode 表示法 2.遍历接口 3.模版字符串 4.新增方法
//需要安装补丁 babel-polyfill(大概现在不要了)


{
    console.log('a',`\u0061`);
    //大于两个字节的编码，前四个20BB为一个字符，后面一个7为一个字符
    console.log('s','\u20BB7');
    //解决方案,用{},处理大于两个字节的字符。𠮷不是吉祥的吉。
    console.log('s',`\u{20BB7}`);

}

{
    let s='𠮷';

    //es5的做法,对unicode处理不到位
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('at0',s.charCodeAt(0),);
    console.log('at1',s.charCodeAt(1));

    //es6的做法
    let s1='𠮷a';
    let s2='我们的祖国';
    console.log('length',s1.length);
    console.log('length',s2.length);
    //新方法,取第一个字符。
    console.log('code0',s1.codePointAt(0));
    console.log('code1',s2.codePointAt(0));

    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s2.codePointAt(0).toString(16));

    console.log('code0',s1.codePointAt(1));
    console.log('code0',s1.codePointAt(2));

}
{   //es5中的方法
    console.log(String.fromCharCode("0x20bb7"));
    //es6中的方法,能处理超过两个字节的unicode的字符
    console.log(String.fromCodePoint("0x20bb7"));
}

// 遍历字符串接口
{
    //es5的用法
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    //es6的用法,使用频率比较高。
    for(let code of str){
        console.log('es6',code);
    }
}