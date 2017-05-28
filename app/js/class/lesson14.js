/**
 * Created by baobaochu on 2017/5/28.
 */
{
    //定义类的基本方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    let v_parent=new Parent('vikcy');
    console.log('构造函数和实际例子',v_parent);
}

{
    //继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{

    }
    console.log('继承',new Child());

}

//参数传递
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{
        constructor(name='jack',year='20'){
            super(name);
            //新定义构造函数属性放在super之后
            this.type='child';
            this.year=year;

        }
    }

    let ch=new Child();
    console.log(ch);
    let ch2=new Child('marry',15);
    console.log(ch2);
}
//getter setter
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        //注意下面的是属性不是方法
        get longName(){
            return 'mk '+this.name;
        }

        set longName(name){
            this.name=name;
        }
    }

    let v=new Parent();
    console.log(v.longName);
    v.longName='joy';
    console.log(v.longName);


}

//静态方法
{
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        //注意下面的是属性不是方法
        get longName(){
            return 'mk '+this.name;
        }

        set longName(name){
            this.name=name;
        }

        //静态方法通过类调用
        static tell(){
            console.log('hello');
        }


    }
    Parent.tell();

}

//静态属性
{
    class Parent {
        constructor(name = 'mukewang') {
            this.name = name;
        }

        //静态方法通过类调用
        static tell(){
            console.log('hello');
        }

    }
    //静态属性.直接在类上定义
    Parent.type='test';
    console.log('静态属性',Parent.type);

}