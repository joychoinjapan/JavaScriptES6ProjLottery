/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	var msg2 = 'hello';
	console.log(msg2);

	var message = 'hello joy';
	console.log(message);

	var Tax = 1.08;
	var price = 5;
	var price02 = 500;
	console.log(price * Tax);
	console.log(price02 * Tax);

	console.log('He\'s　hero!');
	console.log('hello!\n頑張って');

	var name = '鈴木';
	var str = '\u3053\u3093\u306B\u3061\u306F \u3001' + name + '\u3055\u3093\u3002\n\u4ECA\u65E5\u3082\u826F\u3044\u5929\u6C17\u3067\u3059\u306D\uFF01';
	console.log(str);

	var data = ['s', '1', '23', 'hello'];
	console.log(data[0]);

	var obj = { x: 1, y: 2, z: 3 };
	console.log(obj.x);
	console.log(obj['z']);

	/***
	 * 2.4 演算子
	 *
	 */

	//加算演算子（+）
	console.log(10 + 1);
	console.log('10' + 1);
	var today = new Date();
	console.log(1234 + today);

	//小数点を含む計算。0.2は二進数で変換すると無限少数になる。
	console.log(0.2 * 3 === 0.6);
	//正確に計算するために一旦整数にして、また少数にする
	console.log(0.2 * 10 * 3 / 10 === 0.6);

	/**
	 * 分割代入（配列）
	 *
	 */

	var data02 = [56, 40, 26, 82, 19, 17, 73, 99];
	var x0 = data02[0],
	    x1 = data02[1],
	    x2 = data02[2],
	    x3 = data02[3],
	    x4 = data02[4],
	    x5 = data02[5],
	    x6 = data02[6],
	    x7 = data02[7];

	console.log(x0);
	console.log(x6);

	/**
	 * rest演算子
	 * ...
	 */
	var data03 = [56, 40, 26, 82, 19, 17, 73, 99];
	var y0 = data03[0],
	    y1 = data03[1],
	    y2 = data03[2],
	    other = data03.slice(3);

	console.log(y0);
	console.log(other);

	/**
	 * 変数の入れ替え
	 *
	 */
	{
	    var _x = 1;
	    var y = 2;
	    var _ref = [y, _x];
	    _x = _ref[0];
	    y = _ref[1];

	    console.log(_x, y);
	}
	/**
	 * 分割代入　オブジェクト
	 *
	 */
	{
	    var book = { title: 'gogo', publish: 'joy', price: 2000 };

	    var _book$price = book.price,
	        _price = _book$price === undefined ? 1000 : _book$price,
	        title = book.title,
	        _book$memo = book.memo,
	        memo = _book$memo === undefined ? 'none' : _book$memo;

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
	    var _book = { title: 'gogo', publish: 'joy', price: 2000, other: { keywd: 'Java SE', log: 'logo.jpg' } };
	    var _title = _book.title,
	        _other = _book.other,
	        keywd = _book.other.keywd;

	    console.log(_title);
	    console.log(_other);
	    console.log(keywd);
	    console.log(_book);
	}
	/**
	 * 変数の別名を指定
	 */
	{
	    var _book2 = { title: 'gogo', publish: 'joy', price: 2000 };
	    var _name = _book2.title,
	        company = _book2.publish;

	    console.log(_name);
	    console.log(company);
	    console.log(_book2);
	}
	/**
	 * 比較演算子
	 * ===値等しくデータ型等しい
	 * !==値等しくないまたはデータ型等しくない*/

	/**
	 * 条件演算子?:
	 */

	{
	    var x = 80;
	    console.log(x >= 70 ? '合格' : '不合格');
	}
	/**
	 * ショートカット演算の使い所
	 *
	 */
	{
	    var _msg = "";
	    console.log(_msg || 'こんにちは、世界!');
	    var _msg = undefined;
	    console.log(_msg || 'こんにちは、世界');
	    _msg = _msg === undefined ? 'hello' : _msg;
	    console.log(_msg);
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
	    var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
	    console.log(delete ary[0]);
	    console.log(ary);

	    var _obj = { x: 1, y: 2 };
	    console.log(delete _obj.x);
	    console.log(_obj.x);

	    var obj2 = { x: 1, y: 2 };
	    console.log('delete', delete obj2.x);
	    console.log(obj2);

	    //明示的に宣言された変数を削除することはできない。
	    // let data2=1;
	    // console.log(delete data2);
	}

	//typeof 演算子
	{
	    var num = 1;
	    console.log(typeof num === 'undefined' ? 'undefined' : _typeof(num));

	    var flag = true;
	    console.log(typeof flag === 'undefined' ? 'undefined' : _typeof(flag));

	    var _obj2 = { x: 1, y: 2 };
	    console.log(typeof _obj2 === 'undefined' ? 'undefined' : _typeof(_obj2));

	    var _ary = ['Javascript'];
	    console.log(typeof _ary === 'undefined' ? 'undefined' : _typeof(_ary));
	}
	/**
	 *2.5制御構文
	 * 2.5.1条件によって処理を分岐する if
	 *2.5.2 switch case
	 */
	{
	    var _x2 = 1;
	    var _y = 2;
	    if (_x2 === 1) if (_y === 1) console.log('変数xyは共に１です');else console.log('変数xは１ではありません');
	}
	{
	    //何も返さない
	    var _x3 = 1;
	    var _y2 = 2;
	    if (_x3 === 1) {
	        if (_y2 === 1) {
	            console.log('変数xyは共に１です');
	        }
	    } else {
	        console.log('変数xは１ではありません');
	    }
	}
	//swich式とcase値は「===」演算子で比較する。以下の例では実行しない
	{
	    var _x4 = '0';
	    switch (_x4) {
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
	    for (var i = 1, j = 1; i < 5; i++, j++) {
	        console.log('i*jは' + i * j);
	    }
	}
	/**
	 * 連想配列の要素を順に処理する for...in命令
	 *
	 */
	{
	    var _data = { apple: 150, orange: 100, banana: 120 };
	    for (var key in _data) {
	        console.log(key + '=' + _data[key]);
	    }
	}
	{
	    var _data2 = ['apple', 'orange', 'banana'];
	    for (var _key in _data2) {
	        console.log(_key + ':' + _data2[_key]);
	    }
	}
	{
	    var _data3 = ['apple', 'orange', 'banana'];
	    for (var _i = 0, len = _data3.length; _i < len; _i++) {
	        console.log(_data3[_i]);
	    }
	}
	/**
	 *配列などを順に処理するfor...of命令
	 */
	{
	    var _data4 = ['apple', 'orange', 'data'];
	    Array.prototype.hoge = function () {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _data4[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var value = _step.value;

	            console.log(value);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	/**
	 * 2.5.9　例外を処理する　try...catch...finally 命令
	 * 例外処理はオーバヘッドが大きく、ループ処理のとき、try...catchブロックをループの外に配置できないか
	 *を検討
	 *
	 */
	{
	    var _i2 = 1;
	    try {
	        _i2 = _i2 * t;
	        console.log(_i2);
	    } catch (e) {
	        console.log(e.message);
	    } finally {
	        console.log('処理は完了しました。');
	    }
	}
	//明示的に例外を発生させる例
	{
	    var _x5 = 1;
	    var _y3 = 0;
	    try {
	        if (_y3 === 0) {
	            throw new Error('0で除算しようとしました');
	        }
	        var z = _x5 / _y3;
	    } catch (e) {
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

/***/ })
/******/ ]);