/**
 * Created by baobaochu on 2017/5/29.
 */

/**
 * function命令で定義
 */
{
    //base height　は仮引数
    function getTrigngle(base,height) {
        return base*height/2;
    }

    //5,2　実引数
    console.log('三角形の面積:'+getTrigngle(5,2));
}
/**
 * functionコストラクター経由で定義 避けるべき
 */
{
    let getTriangle=new Function('base','height','return base*height/2;')
    console.log(getTriangle(5,2));
}
/**
 * 関数リテラル表現で定義
 * 名前のない関数をgetTriangle変数に格納
 */
{
    let getTriangle=function (base,height) {
        return base*height/2;
    };
    console.log(getTriangle(5,2));
}
/**
 * アロー関数で定義する
 */
{
    let getTriangle=(base,height)=>{
        return base*height/2;
    };

    let getTriangle2=(base,height)=>base*height/2;

    console.log(getTriangle(6,7));
    console.log(getTriangle2(4,5));

    //引数一つの場合（）は省略可能
    let getCircle=radius=>radius*radius*Math.PI;
    console.log(getCircle(4));

    //引数はない場合　（）は省略不可
    let show=()=>console.log('hello');
    show();

    //注意 オブジエクトを（）でくくる
    let func=()=>({hoge:'ほげ'});
    console.log(func());

}
