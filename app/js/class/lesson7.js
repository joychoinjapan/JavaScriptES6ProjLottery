/**
 * Created by baobaochu on 2017/5/23.
 */
/**
 * 数组拓展
 * 数组新增特性：
 * Array.from
 * Array.of
 * copyWithin
 * find/findIndex
 * fill
 * entries/keys/values
 * includes
 */

{
    //Array.of 把一组数据变量转变为数组
    let arr1=Array.of(3,5,6,7,9,11);
    console.log('arr1=',arr1);
    let arr2=Array.of();
    console.log('arr2=',arr2);
}

{
    //新建一个变量，取页面上所有的p元素

    //这是一个取到页面上所有p元素的集合
    let p=document.querySelectorAll('p');
    //将集合转义成数组，还有映射的作用
    let pArr=Array.from(p);
    console.log(pArr);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });
    //把数组里的所有数组遍历，然后乘以二输出
    console.log(Array.from([1,3,5],function (item) {
        return item*2;
    }))
}

{
    //把数组里的所用元素换为指定元素。下标为1,2，3的被替换
    console.log('fill-7',[1,'a',undefined].fill(7));
    console.log('fill-pos',['a','b','c','d','e'].fill(7,1,4));
}
{
    //遍历一个数组，返回所有下标
    for(let index of [2,'ad',8.8].keys()){
        console.log('keys',index);
    }
    //遍历数组和数值。需要引入补丁
    for(let values of[2,'ad',8.8].values()){
        console.log('values',values);
    }
    for(let[index,value] of[2,'ad',8.8].entries()){
        console.log('index',index,'value',value);
    }
}
{
    // 参数1：要替换的位置0
    // 参数2：用于替换的数组的参数位置3
    // 参数3：截止位置（不包含）3-5(实际上是3，4)
    console.log([1,2,3,4,5,6].copyWithin(0,3,5));
}
{
    // 查找数组中数值大于3的，找到第一个满足的就结束了。
    console.log([1,2,3,4,5,6].find(function (item) {
        return item>3;
    }))
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item>3;
    }))
}
{
    //查找数组中是否包含1
    console.log('number',[1,2,NaN].includes(1));
}