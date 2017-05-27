/**
 * Created by baobaochu on 2017/5/25.
 */
/**
 * Symbol的概念
 * 申明一种唯一的数据
 *
 */

{
    //声明
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);
    //生成一个独一无二的值，区别在于有个字符串k值。引用
    // 先检查是否注册过，如果没有注册过，会调用生成.
    // 如果注册过，直接引用
    let a3=Symbol.for('a3');
    let a4=Symbol.for('a3');
    console.log(a3===a4);
    console.log(a1);

}
//Symbol的使用方法
{
    let a1=Symbol.for('abc');
    let b1=Symbol.for('ddd');
    let obj={
        [a1]:'123',
        [b1]:333,
        'abc':345,
        'c':456
    };
    console.log('obj',obj);


//用循环拿不到Symbol属性

    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }
    //API拿symbol属性。Object.getOwnPropertySymbols(obj)出来的是数组
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    });
    //使用reflect对象的ownkeys方法.获取所有属性
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownKeys',item,obj[item]);
    })

}
