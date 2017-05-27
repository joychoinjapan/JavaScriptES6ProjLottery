/**
 * Created by baobaochu on 2017/5/25.
 */
/**
 * 3.0　オブジェクト
 *
 */

/**
 *3.1　オブジェクトをインスタンス化
 * 構文
 * var 変数名＝new オブジェクト名([引数])
 * プロパティ、メソッドの呼び出し
 * 変数名.プロパティ名[=設定値]
 * 変数名.メソッド名([引数[,...]])；
 *
 *
 * 静的プロパティ/静的メソッドの呼び出し
 *　オブジェクト名.プロパティ名[＝設定値];
 * オブジェクト名.メソッド名（[引数[,...]]）;
 *
 *
 * 組み込みオブジェクト
 * コアJavaScript:　Array Date String RegExp Number Error...
 * ブラウザーオブジェクト：Window Navigator Location History
 * DOM オブジェクト
 *
 * #基本データ型をnew演算子を使ってインスタンス化するのは、原則として避けるべき
 *
 * ラッパオブジェクト
 * 基本型である文字列、数値、論理値を扱うためのオブジェクト
 * JavaScriptでは、基本データ型と、オブジェクトとしての体裁をもつラッパオブジェクトを自動的に相互変換する。
 */

/**
 *3.2基本データを扱うためのオブジェクト
 *  3.2.1 String
 *      検索する
 *          indexOf
 *          lastIndexOf
 *          startsWith
 *          endsWith
 *          includes
 *     部分文字列
 *          charAt
 *          slice
 *          substring
 *          substr
 *          split
 *     正規表現
 *          match
 *          replace
 *          search
 *     大文字小文字交換
 *          toLowerCase()
 *          toUpperCase()
 *     コード変換
 *          charCodeAt(n)
 *          fromCharCode
 *          codePointAt
 *     その他
 *          concat
 *          repeat
 *          trim
 *          length
 */

{
    let str1='にわにはにわとりがいる';
    //文字列から指定部分文字列を先頭から検索。返すのは始めて検索したindex。ないときは−１
    console.log(str1.indexOf('にわ'));
    //文字列から指定部分文字列を4文字目から右へ検索。返すのは始めて検索したindex
    console.log(str1.indexOf('にわ',3));
    //文字列から指定部分文字列を末尾から検索。返すのは始めて検索したindex
    console.log(str1.lastIndexOf('にわ'));
    //文字列から指定部分文字列を6文字目から左へ検索。返すのは始めて検索したindex
    console.log(str1.lastIndexOf('にわ',5));
    console.log(str1.indexOf('gogo'));

    console.log(str1.startsWith('にわ'));
    console.log(str1.endsWith('にわ'));
    console.log(str1.includes('にわ'));


    let str2='Wingsプロジェクト';
    let str3='叱られて';
    let str4='    wings';
    console.log(str2.charAt(4));
    console.log(str2.slice(5,8));
    console.log(str2.substr(5,3));
    console.log(str2.split('s'));
    console.log(str1.split('わ',3));
    console.log(str2.charCodeAt(0),str2);
    console.log(String.fromCharCode(87,105,110,103));
    console.log(str3.codePointAt(0));
    console.log(String.fromCodePoint(134047));
    console.log(str2.concat('有限会社'));
    console.log(str2.repeat(2));
    console.log(str4.trim());
    console.log(str2.length);

    //substring とsliceの異同
    //start>end,substringは引数を入れ替える。sliceはしない。
    //start,end<0;substringは０とみなし。sliceは負数を後方からの文字数をみなし


    //サロゲートペア文字の長さ　叱るは三文字です



}
/**
 * Numberオブジェクト
 *
 */
{
    //数値形式を変換
    let num1=8;
    console.log(num1.toString(16));
    console.log(num1.toString(8));

    let num2=123.45678;
    console.log(num2.toExponential(2));
    console.log(num2.toFixed(3));
    //注意会四舍五入
    console.log(num2.toFixed(1));
    console.log(num2.toPrecision(10));
    console.log(num2.toPrecision(6));

    //文字列を数値に変換
    let n='123xxx';
    console.log(Number(n));
    console.log(Number.parseFloat(n));
    console.log(Number.parseInt(n));

    let d=new Date();
    console.log(Number(d));
    console.log(Number.parseFloat(d));
    console.log(Number.parseInt(d));

    let h='0x10';
    console.log(Number(h));
    console.log(Number.parseFloat(h));
    console.log(Number.parseInt(h));

    //二進数を識別するのはNumber()です
    let b='0b11';
    console.log(Number(b));
    console.log(Number.parseFloat(b));
    console.log(Number.parseInt(b));

    let e='1.01e+2';
    console.log(Number(e));
    console.log(Number.parseFloat(e));
    console.log(Number.parseInt(e));

    //算術演算子による文字列と数値の変換
    console.log(123+'',typeof(123+''));
    //+演算子は利用不可
    console.log('123'-0,typeof('123'-0));
    console.log('123'+0,typeof('123'+0));

    //論理型の変換 !を利用


}
