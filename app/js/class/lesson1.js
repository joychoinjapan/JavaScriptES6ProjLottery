function test() {
    //块作用域。大括号就是块作用域。作用域之内申明的变量。
    // 只在作用域之内有效。在块作用域之外就无效。
    for(let i=1;i<3;i++){
        console.log(i)
    }
    //es6中默认开启严格模式。因为作用域之外没有申明，所以导致错误
    // console.log(i)

    // 使用let不能重复定义变量，以下用法错误。
    // let a=1;
    // let a=2;
}

function last() {
    //使用const申明的常量无法修改.申明的时候必须赋值。
    //使用const申明的对象（引用类型），返回的是指针。指针不变，对象可以改变。
    const PI=3.1415926;
    const k={a:1}
    console.log(PI,k);
    k.b=3;
    console.log(PI,k);
}

test();
last();