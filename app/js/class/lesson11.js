/**
 * Created by baobaochu on 2017/5/27.
 */
{
    let list=new Set();
    list.add(5);
    list.add(7);
    console.log(list.size);
}
//另一种定义方式
{
    let arr=[1,2,3,4,5];
    let list=new Set(arr);
    console.log(list.size);
}
{
    let list=new Set([3,5,6,0]);
    list.add(3);
    console.log(list.size);

    let arr=[1,2,3,1,2,'2'];
    let list2=new Set(arr);
    console.log(list2);
    //不会做数据类型的转换
}
{
    let arr=['add','delete','clear','clear','has'];
    let list=new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log(list);
}
//遍历
{
    let arr=['add','delete','clear','clear','has'];
    let list=new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);
    }

    for(let value of list.values()){
        console.log('values',value);
    }

    list.forEach(function (item) {
        console.log(item);
    })
}

//weakset
//与set区别。
//支持数据类：必须是对象；对象必须是弱引用。引用的地址
//没有size,没有clear方法，不能遍历
{
    let weakList=new WeakSet();
    let arg={};
    weakList.add(arg);
    console.log('weakList',weakList);

}
//map
{
    let map=new Map();
    let keyArray=['1','2','3'];
    let valueArray=['a','b','c'];

    map.set(keyArray[0],valueArray[0]);
    console.log(map);
}
{
    let map=new Map([['a',123],['b',456]]);
    console.log(map);
    console.log(map.size);
    console.log(map.get(('a')));
    console.log(map.delete('a'));
    console.log(map);
    map.clear();
    console.log(map);
}
{
    //weakmap的k值必须是对象和weakset一样
    let weakmap=new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap);


}