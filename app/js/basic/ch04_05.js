/**
 * Created by baobaochu on 2017/5/29.
 */
/**
 * 4.5ES2015における引数の記法
 *
 */
{
    function getTriangle(base=1,height=1) {
        return base*height/2;

    }
    console.log(getTriangle(5));
}
{
    function multi(a,b=a) {
        return a*b;
    }
    console.log(multi(10,5));
    console.log(multi(3));

}

//4.5.2可変長引数の関数を定義
{
    function sum(...nums) {
        let result=0;
        for(let num of nums){
            if(typeof num !=='number'){
                throw new Error('指定値が数値ではありません'+num);
            }
            result+=num;
        }
        return result;
    }

    //引数を配列に入れる

    let array=[1,2,3,4,5];

    try{
        //...演算子による引数の展開
        console.log(sum(...array));
    }catch (e){
        window.alert(e.message);
    }
}

//4.5.5 名前付き引数でコードを読みやすくする

{
    function getTriangle({base=1,height=1}) {
        return base*height/2;
    }

    console.log(getTriangle({base:5,height:4}));
}

//オブジエクトから特定のプロパティだけを取り出す
{
    function show({address,name}) {
        console.log(address,name);

    }
    let member={
        mid:'Y0001',
        name:'山田太郎',
        address:'t_yamada@example.com'
    };
    show(member);
}