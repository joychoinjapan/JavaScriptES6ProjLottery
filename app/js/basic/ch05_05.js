/**
 * Created by baobaochu on 2017/5/30.
 */
/**
 *
 * ES2015 オブジェクト指向構文
 */

//5.5.1 クラスを定義する　class命令
{
class Member{
    //コンストラクタ
   constructor(firstName,lastName){
       this.firstName=firstName;
       this.lastName=lastName;
   }

   //メソッド
   getName(){
       return this.lastName+this.firstName;
   }
}

let m=new Member('太郎','山田');
console.log(m.getName());
}

//プロパティを定義する

{
    class Member{
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }

        //firstNameプロパティ
        get firstName(){
            return this._firstName;
        }
        set firstName(value){
            this._firstName=value;
        }
        //lastNameプロパティ
        get lastName(){
            return this._lastName;
        }
        set lastName(value){
            this._lastName=value;
        }

        //メソッド
        getName(){
            return this._lastName+this.firstName;
        }
    }

    let m=new Member();
    m.lastName='chu';
    m.firstName='shuwei';
    console.log(m.getName());
}

//静的メソッドを定義
{
    class Area{
        static getTriangle(base,height){
            return base*height/2
        }
    }

    console.log(Area.getTriangle(20,10));
}

//既存のクラスを継承
{
    class Member{
        //コンストラクタ
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }

        //メソッド
        getName(){
            return this.lastName+this.firstName;
        }

        //Memeberオブジエクトを継承したBusinessMemberクラスを定義
    }

    class BusinessMember extends Member{
        work(){
            return this.getName()+'は働いています'
        }

    }

    let bm=new BusinessMember('shuwei','chu');
    console.log(bm.getName());
    console.log(bm.work());
}

//基底クラスのメソッド/コンストラクターを呼び出す　superキーワード
{
    class Member{
        //コンストラクタ
        constructor(firstName,lastName){
            this.firstName=firstName;
            this.lastName=lastName;
        }

        //メソッド
        getName(){
            return this.lastName+this.firstName;
        }

        //Memeberオブジエクトを継承したBusinessMemberクラスを定義
    }

    //Memberオブジエクトを継承したBusinessMemberクラスを定義
    class BusinessMember extends Member{
        //引数にclazzを追加
        constructor(firstName,lastName,clazz){
            //先頭の文で
            super(firstName,lastName);
            this.clazz=clazz;
        }

        //役職込みの名前を返すよう修正
        getName(){
            return super.getName()+'/役職:'+this.clazz;
        }


    }

    let bm=new BusinessMember('shuwei','chu','PM');
    console.log(bm.getName());
}

//5.5.2 オブジエクトリテラルの改善
{
    let member={
        name:'Chu Shuwei',
        birth:new Date(1990,5,12),
        toString(){
            return this.name+'/誕生日:'+this.birth.toLocaleDateString()
        }
    };

    console.log(member.toString());


}
//変数を同名のプロパテに割り当てる
{
    let name='ジョイ';
    let birth=new Date(1990,5,12);
    let member={name,birth};

    console.log(member);

}
//プロパテを動的に生成
{
    let i=0;
    let member={
        name:'山田太郎',
        birth:new Date(1990,5,25),
        ['memo'+ ++i]:'正規会員',
        ['memo'+ ++i]:'支部会長',
        ['memo'+ ++i]:'関東'
    };
    console.log(member);



}

/**
 * 5.5.4 列挙可能なオブジエクトを定義　イテレーター
 *
 */

{
    let data_ary=['one','two','three'];
    let data_str='あいうえお';
    let data_map=new Map([['MON','月曜'],['THE','火曜'],['WED','水曜']]);

    for(let d of data_ary){
        console.log(d);
    }
    for(let d of data_str){
        console.log(d);
    }
    for(let [key,value] of data_map){
        console.log(`${key}:${value}`);
    }
}

{
    let data_ary=['one','two','three'];
    let itr=data_ary[Symbol.iterator]();
    let d;
    while(d=itr.next()){
        //イテレータが終端に到達したか
        if(d.done){break;}
        console.log(d.done);
        //valueは次の要素の値
        console.log(d.value);
    }
}


//自作クラスへのイテレーターの実装
{
    class MyIterator{
        constructor (data){
            this.data=data;
        }
        [Symbol.iterator](){
            let current=0;
            let that=this;
            let len=that.data.length;
            return{
                next(){
                    return current<len?
                        {value:that.data[current++],done:false}:
                        {done:true};
                }
            }
        }
    }

    let itr=new MyIterator(['one','two','three']);
    for(let value of itr){
        console.log(value);
    }
}

/**
 *列挙可能なオブジエクトをより簡単に実装
 */

{
    function *myGenerator() {
        yield 'あいうえお';
        yield 'kakikukeko';
        yield 'sashisuseso';
    }
    for(let t of myGenerator()){
        console.log(t);
    }
}


