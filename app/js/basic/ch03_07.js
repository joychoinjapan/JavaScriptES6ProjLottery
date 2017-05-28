/**
 * Created by baobaochu on 2017/5/29.
 */
//グローバルオブジエクト
/**
 *特殊値
 * NaN infinity undefined
 * チェック
 * isFinite isNaN
 * 変換
 * Boolean Number String parseFloat parseInt
 * エンコード
 * encodeURI
 * decodeURI
 * encodeURIComponent
 * decodeURIComponent
 * 解析
 * eval(exp)
 *
 *
 */
{
    console.log(isNaN('1'));//String型の数値が変換される
    console.log(isNaN('hoge'));

    console.log(Number.isNaN('hoge'));//もっと厳密
    console.log(Number.isNaN('1'));
}