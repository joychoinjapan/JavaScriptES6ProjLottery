/**
 * Created by baobaochu on 2017/5/27.
 */
/** Proxy/Reflect
 *  Proxy和Reflect的概念
 *  Proxy和Reflect的使用场景
 */
{

    let obj={
       time:'2017-03-11',
       name:'net',
        _r:123
    };
    //创造代理
    let monitor=new Proxy(obj,{

        //拦截对象属性的读取.当想读取time属性，而用户无法直接读取obj中的time，所以需要通过proxy提供方法代理读取。
        get(target,key){
            //将值的2018替换成2018。通过代理能够替换。
            return target[key].replace('2017','2018')
        },

        // 拦截对象设置属性
        //target指的是obj对象，key指的是修改的属性，value指的是值
        set(target,key,value){
            if(key==='time'){
                return target[key]=value;
            }else {
                return target[key];
            }

        },

        //拦截查找obj对象中是否有哪个属性 （key in object）
        //只暴露name属性，其他的都不暴露
        has(target,key){
            if(key==='name'){
                return target[key]
            }else {
                return false;
            }
        },

        //通过代理拦截删除操作
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else {
                return target[key];
            }
        },
    // 拦截object.keys Object.getOwnPropertySymbols,Object.getOwnPropertyNames()
        //如果是time就过滤掉。
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time');
        }


    });

    //用户操作moniter，通过proxy传递给obj
    //从代理对象monitor中读取time属性

    console.log('get',monitor.time);

    monitor.time='2019';
    console.log('set',monitor.time);

    //因为代理中不允许修改name属性所以无法修改。
    monitor.name='akira';
    console.log('set name',monitor.name);

    //通过代理欺骗用户
    console.log('has','name' in monitor,'time' in monitor);


    //除了带下划线属性，拦截其他删除obj中的属性的操作。
    // delete monitor.time;
    // console.log('delete',monitor);
    // delete monitor._r;
    // console.log('delete',monitor);


    //显示该obj还有什么属性
    console.log('ownKeys',Object.keys(monitor));
}


/**
 *  reflect  介绍
 *  反射机制
 *  直接使用反射对象中的方法。
 *
 */
{

    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    };

    console.log('Reflect-get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','mukewang');
    console.log(obj);
    console.log('has',Reflect.has(obj,'name'));
}
/**
 * 
 * 应用实例；业务解耦的校验模块
 *
 */
{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
               if(target.hasOwnProperty(key)){
                let va=this._validator[key];
                if(!!va(value)){
                    return Reflect.set(target,key,value,proxy)
                }else {
                    throw Error(`不能设置${key}到${value}`)
                }
               } else {
                   throw Error(`${key}不存在`)
               }
        }
        })
    }


    //设置各种限制条件的判断器。
    const personValidators={
        //设置各种限制
        name(val){
            return typeof val==='string'
        },
        age(val){
            return typeof val==='number'&&val>18
        }
    };


    //对类进行实例话。
    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;

            //返回的是个代理
            return validator(this,personValidators)
        }
    }

    const person=new Person('lilei',30);
    console.info(person);
    person.name=48;

        

}