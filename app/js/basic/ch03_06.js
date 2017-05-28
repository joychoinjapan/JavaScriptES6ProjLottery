/**
 * Created by baobaochu on 2017/5/29.
 */
/**
 * Objectオブジエクト
 */
/**
 *オブジエクトを基本型に変換する
 * toString 文字列を返す
 * valueOf 文字列以外を返す
 */
{
    let obj=new Object();
    console.log(obj.toString());
    console.log(obj.valueOf());

    let date=new Date();
    console.log(date.toString());
    console.log(typeof date.valueOf());

    let ary=['prototype.js','jQuery','Yahoo!UI'];
    console.log(ary.toString());
    console.log(ary.valueOf());

    let num=10;
    console.log(num.toString());
    console.log(typeof num.valueOf());

    let reg=/[0-9]{3}-[0-9]{4}/g;
    console.log(typeof reg.toString());
    console.log(typeof reg.valueOf());

}
/**
 *
 * オブジエクトをマージする
 *  assign
 *  assighを利用することで、既存のオブジエクトを結合できる
 */
{
    let pet={
        type:'スノーホワイトハムスター',
        name:'キラ',
        description:{
            birth:'2014-02-15'
        }
    };

    let pet2={
        name:'山田きら',
        color:'白',
        description:{
            food:'ひまわりのたね'
        }
    };

    let pet3={
        weight:42,
        photo:'http://www.wings.msn.to/omg/ham.jpg'
    };

    Object.assign(pet,pet2,pet3);
    console.log(pet);
    //同名のプロパティは、後のもので上書きされる



}