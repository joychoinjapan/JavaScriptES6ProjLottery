//解构赋值
//数组解构赋值。写块作用域的原因是为了阻隔变量。
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);
}

//数组解构赋值
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    //解构赋值特性
    console.log(a,b,rest);
}
//对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log("a="+a,"b="+b);
}

{
    let a,b,c,rest;
    //如果解构赋值没有在结构上成功配对，则输出为undefined
    [a,b,c=3]=[1,2];
    console.log(a,b,c);
}
//场景
{
    //变量交换
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}

{
    //通过这种方法能够同时从函数中获取多个变量。
    function f() {
        return [1,2]

    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}
{   //能够忽略不需要的值，把需要的进行赋值
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log("a="+a,"b="+b);

}

{
    //把第一个元素取出来，把其他的给一数组
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b]=f();
    console.log("a="+a,"b="+b);

}

{
    //把第一个元素取出来，把其他的给一数组
    function f() {
        return [1,2,3,4,5,6,7,8]
    }
    let a,b,c;
    [a,,,...b]=f();
    console.log("a="+a,"b="+b);
}

//对象解构赋值
{
    let o={p:42,q:true,x:'get'};
    let {p,q,x}=o;
    console.log(p,q,x);
}

{
    let{a=10,b=5}={a:3};
    console.log(a,b);
}
//前端后段服务通信jason
{
    let metaData={
        title:'abcs',
        test:[{
            title:'test',
            desc:'description'
        }]
    }

    let {title:es3Title,test:[{title:cn4Title}]}=metaData;
    console.log(es3Title,cn4Title);
}
