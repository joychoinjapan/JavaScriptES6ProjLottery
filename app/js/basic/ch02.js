/**
 * Created by baobaochu on 2017/5/24.
 */
/**
 * Created by baobaochu on 2017/5/24.
 *2.2
 * 変数の宣言
 * var let
 * let 命令は変数の重複を許可しない
 *
 * 定数の宣言
 * const
 *再代入できない
 *
 * 記法：
 * 変数/関数名=>camelCase　lastName
 * 定数=> アンダースコア記法 last_Name
 * クラス=>Pascal記法 LastName
 *
 * 2.3
 * 基本型:number string boolean symbol null/undefined
 * 参照型:array object function
 * リテラル：データ型に格納できる値そのもの
 *
 * 数値リテラル
 *      整数リテラル
 *          10進数リテラル：100 3 0
 *          16進数リテラル：0xFFffFF 0xCC55CC
 *          8進数リテラル：0o600 0o644 0o777
 *          2進数リテラル：0b11 0b101
 *      浮動小数点リテラル
 *          1.5 3.14e5
 *
 *文字列リテラル
 * '' ""で囲む
 *
 * エスケープシーケンス
 *
 * テンプレート文字列（文字列への変数の埋め込み　複数行にまたがる文字列）
 * 注意：｀｀で文字列を囲む
 * 配列リテラル
 * オブジェクトリテラル
 *関数リテラル
 *
 *未定義値undefined
 * null
 *
 *
 *
 *
 */


var msg2='hello';
console.log(msg2);

let message='hello joy';
console.log(message);

const Tax=1.08;
let price=5;
let price02=500;
console.log(price*Tax);
console.log(price02*Tax);

console.log('He\'s　hero!');
console.log('hello!\n頑張って');

let name='鈴木';
let str=`こんにちは 、${name}さん。
今日も良い天気ですね！`;
console.log(str);

let data=['s','1','23','hello'];
console.log(data[0]);

let obj={x:1,y:2,z:3};
console.log(obj.x);
console.log(obj['z']);

/***
 * 2.4 演算子
 *
 */

//加算演算子（+）
console.log(10+1);
console.log('10'+1);
var today=new Date();
console.log(1234+today);

//小数点を含む計算。0.2は二進数で変換すると無限少数になる。
console.log(0.2*3===0.6);
//正確に計算するために一旦整数にして、また少数にする
console.log((0.2*10)*3/10===0.6);

/**
 * 分割代入（配列）
 *
 */

let data02=[56,40,26,82,19,17,73,99];
let [x0,x1,x2,x3,x4,x5,x6,x7]=data02;
console.log(x0);
console.log(x6);

/**
 * rest演算子
 * ...
 */
let data03=[56,40,26,82,19,17,73,99];
let [y0,y1,y2,...other]=data03;
console.log(y0);
console.log(other);

/**
 * 変数の入れ替え
 *
 */
{
    let x=1;
    let y=2;
    [x,y]=[y,x];
    console.log(x,y);
}
/**
 * 分割代入　オブジェクト
 *
 */
{
    let book={title:'gogo',publish:'joy',price:2000};
    let{price=1000,title,memo='none'}=book;
    console.log(book.title);
    console.log(book.price);
    console.log(book.memo);
    console.log(book);
    console.log(memo);
}
/**
 * 入れ子となったオブジェクトを分解する
 *
 */
{
    let book={title:'gogo',publish:'joy',price:2000,other:{keywd:'Java SE',log:'logo.jpg'}};
    let{title,other,other:{keywd}}=book;
    console.log(title);
    console.log(other);
    console.log(keywd);
    console.log(book);
}
/**
 * 変数の別名を指定
 */
{
    let book={title:'gogo',publish:'joy',price:2000};
    let {title:name,publish:company}=book;
    console.log(name);
    console.log(company);
    console.log(book);
}
/**
 * 比較演算子
 * ===値等しくデータ型等しい
 * !==値等しくないまたはデータ型等しくない*/

/**
 * 条件演算子?:
 */

{
    var x=80;
    console.log((x>=70)?'合格':'不合格')
}
/**
 * ショートカット演算の使い所
 *
 */
{
    var msg="";
    console.log(msg||'こんにちは、世界!');
    let msg=undefined;
    console.log(msg||'こんにちは、世界');
    msg=(msg===undefined?'hello':msg);
    console.log(msg);
}
/**
 *その他の演算子
 *カンマ
 * delete
 * instanceof
 * new
 * typeof
 * void
 */

//　delete 演算子
{
let ary=['JavaScript','Ajax','ASP.NET'];
console.log(delete ary[0]);
console.log(ary);

let obj={x:1,y:2};
console.log(delete obj.x);
console.log(obj.x);

let obj2={x:1,y:2};
console.log('delete',delete obj2.x);
console.log(obj2);

//明示的に宣言された変数を削除することはできない。
// let data2=1;
// console.log(delete data2);
}

//typeof 演算子
{
    let num=1;
    console.log(typeof num);

    let flag=true;
    console.log(typeof flag);

    let obj={x:1,y:2};
    console.log(typeof obj);

    let ary=['Javascript'];
    console.log(typeof ary);　
}
/**
 *2.5制御構文
 * 2.5.1条件によって処理を分岐する if
 *2.5.2 switch case
 */
{
    let x=1;
    let y=2;
    if(x===1)
        if(y===1)console.log('変数xyは共に１です');
    else
        console.log('変数xは１ではありません');
}
{
    //何も返さない
    let x=1;
    let y=2;
    if(x===1){
        if(y===1){
            console.log('変数xyは共に１です');
        }
    }else {
        console.log('変数xは１ではありません');
    }
}
//swich式とcase値は「===」演算子で比較する。以下の例では実行しない
{
    let x='0';
    switch (x){
        case 0:
        //中略
    }
}
/**
 * 条件式によってループを制御 while/do....while
 *　2.5.5指定回数だけループを処理する-for-
 *
 */
//カンマ演算子
{
for(var i=1,j=1;i<5;i++,j++){
    console.log('i*jは'+i*j);
}

}
/**
 * 連想配列の要素を順に処理する for...in命令
 *
 */
{
    let data={apple:150,orange:100,banana:120};
    for(let key in data){
        console.log(key+'='+data[key]);
    }
}
{
    let data=['apple','orange','banana'];
    for(let key in data){
        console.log(key+':'+data[key]);
    }
}
{
    let data=['apple','orange','banana'];
    for(let i=0,len=data.length;i<len;i++){
        console.log(data[i]);
    }
}
/**
 *配列などを順に処理するfor...of命令
 */
{
    let data=['apple','orange','data'];
    Array.prototype.hoge=function (){}
    for( let value of data){
        console.log(value);
    }
}
/**
 * 2.5.9　例外を処理する　try...catch...finally 命令
 * 例外処理はオーバヘッドが大きく、ループ処理のとき、try...catchブロックをループの外に配置できないか
 *を検討
 *
 */
{
    let i=1;
    try{
        i=i*t;
        console.log(i);
    }catch(e){
        console.log(e.message);
    }finally{
        console.log('処理は完了しました。');
    }
}
//明示的に例外を発生させる例
{
    let x=1;
    let y=0;
    try{
        if(y===0){throw new Error('0で除算しようとしました')}
        var z=x/y;
    }catch (e){
        console.log(e.message);
    }
}
/**
 * strict モード
 */
{
    'use strict';
}
{
    // function hoge() {
    //     'use strict';
    // }
}