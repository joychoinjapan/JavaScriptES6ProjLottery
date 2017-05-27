/**
 * Created by baobaochu on 2017/5/27.
 */
//Map与Array的对比，Set与Array对比

//Map与Array的对比
{
    //数据解构横向对比。
    let map=new Map();
    let array=[];

    //增
    map.set('t',1);
    array.push({t:1});

    console.info('map-array',map,array);

    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.info('map-array',map_exist,array_exist);

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.info('map-array-modify',map,array);

    //删除
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    //index指的是要删除的位置，1表示要删除的个数
    array.splice(index,1);
    console.info('map-array',map,array);
}

//set和Array的对比
{
    let set=new Set;
    let array=[];


    // 增
    let obj={t:1};
    set.add(obj);
    array.push({t:1});
    console.info('set-array',set,array);


    // 查
    let set_exist=set.has(obj);
    let array_exist=array.find(item=>item.t);
    console.info('set-array',set_exist,array_exist);


    // 改
    set.forEach(item=>item.t?item.t=2:'2');
    array.forEach(item=>item.t?item.t=2:'2');
    console.info('set-array-modify',set,array);


    // 删／都比较麻烦
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array',set,array);
}

//Map与Object的对比，Set与Object对比
{
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};

    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;

    console.info('map-set-obj',obj,map,set);

    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    });

    //改
    map.set('t',2);
    item.t=2;//注意set的修改的成本和方式，改的是变量
    obj['t']=2;
    console.info(
        map,
        set,
        obj,
    )

    //删
    map.delete('t');
    set.delete(item);//注意set的删除的成本和方式，改的是变量
    delete obj['t'];
    console.info(
        map,
        set,
        obj,
    )
}

//优先使用map 数据唯一性用set 放弃数组和obj