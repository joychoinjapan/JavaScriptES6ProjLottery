/**
 * Created by baobaochu on 2017/5/24.
 */
//对象扩展：简介表示法 属性表达式 扩展运算符 Object新增方法
{
    //简介表示法
    let o=1;
    let k=2;
    let es5={
        k:k,
        o:o
    };
    let es6={
        o,k
    };
    console.log(es5,es6);

    let es5_method={
        hello:function () {
            console.log('hello');
        }
    };

    let es6_method={
        hello(){
            console.log('hello');
        }
    };

    console.log(es5_method.hello(),es6_method.hello());

}

//属性表示法,实现变量依赖

{
    let a='b';
    let es5_obj={
        a:'c'
    }
    let es6_obj={
        [a]:'c'
    }

    console.log(es5_obj,es6_obj);
}

//新增API
{
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
    console.log('数组',Object.is([],[]));
    //合并一个对象。浅复制。
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
    //entries
    let test={
        k:123,o:456
    }
    for(let [key,value] of Object.entries(test)){
        console.log([key,value])
    }
}

//扩展运算符,babel支持不好
