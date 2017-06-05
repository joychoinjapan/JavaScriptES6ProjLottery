/**
 * Created by baobaochu on 2017/5/29.
 */
/**
 *関数定義に置ける　4つの注意点
 * 1.return命令の直後に改行しない
 * 2.関数はデータ型の一種
 * ３.function命令は静的な構造を宣言する
 * 4.関数リテラル/functionコンストラクターは実行時に評価される
 * 　　＊関数リテラル/functionで関数を定義する場合には、「呼び出し元のコードよりも先に記述する」
 */

/**
 * 4.3変数はどの場所から参照できるか　スコープ
 *
 */
//4.3.1スクリプト全体から参照できる--グローバルスコープ
//定義された関数の中でのみ参照できるローカルスコープ


//変数scopeの有効範囲
{
    let scope01='グローバル';
    //ローカルスコープ　変数scope02の有効範囲
    function getValue() {
        let scope02='ローカル';
        return scope02;
    }
    console.log(getValue());
    //scope02 is not defined
    //console.log(scope01,scope02);
}

//4.3.2
//var 命令を使わず宣言された変数は全てグローバル変数をみなす
// {
//     scope = 'Global Variable';
//     function getValue() {
//         scope = 'Local Variable';
//         return scope;
//     }
//
//     console.log(getValue());
//     console.log(scope);
// }　

//4.3.5 即時関数　ES6では不要



// (function () {
//     var i=5;
//     console.log(i);
// }).call(this);
//  console.log(i);

//4.3.6
{
    if(true){
        let i=5;
        console.log(i);
    }
    //let命令で宣言された変数はプロっくの外で無効
    //console.log(i);
}