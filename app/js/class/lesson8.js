/**
 * Created by baobaochu on 2017/5/24.
 */
//参数默认值 rest参数 扩展运算符 箭头函数 this绑定 尾调用


{
    //参数默认值
    function test(x,y='world',z='oh') {
        console.log('默认值',x,y,z);
    }
    test('hello');
    test('hello','kitty','you');
}
{
    //作用域。取得是函数传入进去的那个。
    //test2函数的运行过程
    //x=kill,y=x,最终都是kill
    //test3函数的运行过程
    //c=kill,y=x，最终c是kill，y是test
    let x='test';
    function test2(x,y=x) {
        console.log('作用域',x,y);
    }
    test2('kill');
    function test3(c,y=x) {
        console.log('作用域',c,y);
    }
    test3('kill');
}

//rest参数，把输入的参数全部转换成数组
{
    function test3(...arg) {
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}
//扩展运算符.把数组拆成离散的值。与rest参数相反
{
    console.log(...[1,2,4]);
}
//箭头函数
{
    //v => v*2 左边是参数，右边是返回值
    //arrow为函数名
    let arrow = v => v*2;
    let arrow2=()=>5;
    console.log('arrow',arrow(3));
    console.log('nocanshu',arrow2());
}

{
    //尾调用,是一个函数编程的概念.当函数发生嵌套时建议使用。
    //尾调用就是在函数的最后一行返回另一个函数。
    function tail(x) {
        console.log('tail',x);
    }

    function fx(x) {
        return tail(x);
    }
    fx(123);

}