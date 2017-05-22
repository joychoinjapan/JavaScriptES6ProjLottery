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

	var _templateObject = _taggedTemplateLiteral(['i am ', ', ', ''], ['i am ', ', ', '']),
	    _templateObject2 = _taggedTemplateLiteral(['Hi\n', ''], ['Hi\\n', '']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	/**
	 * Created by baobaochu on 2017/5/22.
	 */

	//字符串扩展使用方法

	//判断字符串中是否包含某些字符
	{
	    var str = 'string';
	    console.log('includes', str.includes('r'));
	}
	//判断以哪些字符起始
	{
	    var _str = 'string';
	    console.log('start', _str.startsWith('str'));
	    console.log('end', _str.endsWith('ng'));
	}

	//重复
	{
	    var _str2 = "abc";
	    console.log(_str2.repeat(2));
	}

	//模版字符串（非常重要）
	{
	    //新建两个数据项
	    var name = "list";
	    var info = "hello world";
	    //模版。把数据项放到${}中。
	    var m = 'i am ' + name + ',' + info;
	    console.log(m);
	}
	//es7草案

	{
	    //前补白。如果需要输出两个长度的字符串，则在字符串前方加上0
	    console.log('1'.padStart(2, '0'));
	    //后补白。如果需要输出两个长度的字符串，则在字符串后方加上0
	    console.log('1'.padEnd(2, '0'));

	    console.log('1'.padStart(3, '0'));
	    console.log('1'.padEnd(3, '02'));
	}

	//标签模版（比较难）
	{
	    //加了abc之后
	    var abc = function abc(s1, s2, s3) {
	        console.log(s1, s2, s3);
	        return s1 + s2 + s3;
	    };

	    var user = {
	        name: 'list',
	        info: 'hello world'
	    };
	    console.log(abc(_templateObject, user.name, user.info));
	}
	//raw可以忽略转义字符。实现不换行。斜杠不生效。相当于在斜杠前面加斜杠。
	{
	    console.log(String.raw(_templateObject2, 1 + 2));
	    console.log('Hi\n' + (1 + 2));
	}

/***/ })
/******/ ]);