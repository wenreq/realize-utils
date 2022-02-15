/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _src_array_index_js__WEBPACK_IMPORTED_MODULE_0__.chunk)\n/* harmony export */ });\n/* harmony import */ var _src_array_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/array/index.js */ \"./src/array/index.js\");\n\n\n//# sourceURL=webpack://utils/./index.js?");

/***/ }),

/***/ "./src/array/index.js":
/*!****************************!*\
  !*** ./src/array/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/* harmony import */ var _internal_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/slice.js */ \"./src/internal/slice.js\");\n/* harmony import */ var _utils_toFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/toFinite */ \"./src/utils/toFinite.js\");\n\r\n\r\n/**\r\n * 将数组（ array） 拆分成多个 size 长度的区块， 并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块， 那么最后剩余的元素将组成一个区块。\r\n * \r\n * @date 2022-02-15\r\n * @category Array\r\n * @param {array} array 需要处理的数组\r\n * @param {number} size=1 每个数组区块的长度\r\n * @returns {array} 返回数组区块的新数组，相当于一个二维数组\r\n */\r\nfunction chunk(array, size = 1) {\r\n  size = Math.max((0,_utils_toFinite__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(size), 0)\r\n  const length = array == null ? 0 : array.length\r\n  if (!length || size < 1) { \r\n    return []\r\n  }\r\n  let index = 0\r\n  let resultIndex = 0\r\n  // Math.ceil 大于或等于给定数字的最小整数。\r\n  const result = new Array(Math.ceil(length / size))\r\n\r\n  while (index < length) {\r\n    result[resultIndex++] = (0,_internal_slice_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array, index, (index += size))\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://utils/./src/array/index.js?");

/***/ }),

/***/ "./src/internal/getTag.js":
/*!********************************!*\
  !*** ./src/internal/getTag.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toString = Object.prototype.toString\r\n\r\n/**\r\n * 获取' value '的' toStringTag '\r\n * @date 2022-02-15\r\n * @param {*} value 要查询的值\r\n * @returns {string} 返回 ' toStringTag '\r\n */\r\nfunction getTag(value) { \r\n  if (value == null) {\r\n    return value === undefined ? '[object Undefined]' : '[object Null]'\r\n  }\r\n  return toString.call(value)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);\n\n//# sourceURL=webpack://utils/./src/internal/getTag.js?");

/***/ }),

/***/ "./src/internal/slice.js":
/*!*******************************!*\
  !*** ./src/internal/slice.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * 创建' array '中从' start '到' end '的切片，但不包括' end '。  \r\n * @category Array\r\n * @param {Array} array 要切片的数组\r\n * @param {number} [start=0] 一开始的位置。 一个负数的索引将被视为从结束的偏移量。  \r\n * @param {number} [end=array.length] 最后的位置。 一个负数的索引将被视为从结束的偏移量。  \r\n * @returns {Array} 返回' array '的切片。\r\n * @example\r\n *\r\n * var array = [1, 2, 3, 4]\r\n *\r\n * utils.slice(array, 2) // => [3, 4]\r\n */\r\nfunction slice(array, start, end) {\r\n  let length = array == null ? 0 : array.length\r\n  if (!length) {\r\n    return []\r\n  }\r\n  start = start == null ? 0 : start\r\n  end = end === undefined ? length : end\r\n\r\n  if (start < 0) {\r\n    start = -start > length ? 0 : (length + start)\r\n  }\r\n  end = end > length ? length : end\r\n  if (end < 0) {\r\n    end += length\r\n  }\r\n  length = start > end ? 0 : ((end - start) >>> 0)\r\n  start >>>= 0\r\n\r\n  let index = -1\r\n  const result = new Array(length)\r\n  while (++index < length) {\r\n    result[index] = array[index + start]\r\n  }\r\n  return result\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice);\r\n\n\n//# sourceURL=webpack://utils/./src/internal/slice.js?");

/***/ }),

/***/ "./src/utils/isObject.js":
/*!*******************************!*\
  !*** ./src/utils/isObject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * 检测value是否是对象\r\n * @date 2022-02-15\r\n * @param {*} value 检测的值\r\n * @returns {boolean} value是对象返回true，否则返回false\r\n * \r\n * isObject({}) // => true\r\n * isObject([1, 2, 3]) // => true\r\n * isObject(Function) // => true\r\n * isObject(null) // => false\r\n */\r\nfunction isObject(value) { \r\n  const type = typeof value\r\n  return value != null && (type === 'object' || type === 'function')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);\n\n//# sourceURL=webpack://utils/./src/utils/isObject.js?");

/***/ }),

/***/ "./src/utils/isSymbol.js":
/*!*******************************!*\
  !*** ./src/utils/isSymbol.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _internal_getTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/getTag */ \"./src/internal/getTag.js\");\n\r\n\r\n/**\r\n * 检查 value 是否被归类为 Symbol 原语或对象。\r\n * @date 2022-02-15\r\n * @param {*} value 要检测的值\r\n * @returns {boolean} 是symbol类型返回true，否则返回false\r\n * \r\n * isSymbol(Symbol.iterator) // => true\r\n * isSymbol('abc') // => false\r\n */\r\nfunction isSymbol(value) {  \r\n  const type = typeof value\r\n  return type == 'symbol' || (type === 'object' && value != null && (0,_internal_getTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) == '[object Symbol]')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);\n\n//# sourceURL=webpack://utils/./src/utils/isSymbol.js?");

/***/ }),

/***/ "./src/utils/toFinite.js":
/*!*******************************!*\
  !*** ./src/utils/toFinite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_toNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/toNumber */ \"./src/utils/toNumber.js\");\n\r\n\r\nconst INFINITY = 1 / 0\r\nconst MAX_INTEGER = 1.7976931348623157e+308\r\n/**\r\n * 将value转换为有限数字\r\n * @date 2022-02-15\r\n * @param {*} value 要转换的值\r\n * @returns {number}  返回后的数字\r\n * \r\n * toFinite(3.2) // => 3.2\r\n * toFinite(Number.MIN_VALUE) // => 5e-324\r\n * toFinite(Infinity) // => 1.7976931348623157e+308\r\n * toFinite('3.2') // => 3.2\r\n */\r\nfunction toFinite(value) {\r\n  if (!value) {\r\n    return value === 0 ? value : 0\r\n  }\r\n  value = (0,_utils_toNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)\r\n  if (value === INFINITY || value === -INFINITY) {\r\n    const sign = (value < 0 ? -1 : 1)\r\n    return sign * MAX_INTEGER\r\n  }\r\n  return value === value ? value : 0\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFinite);\n\n//# sourceURL=webpack://utils/./src/utils/toFinite.js?");

/***/ }),

/***/ "./src/utils/toNumber.js":
/*!*******************************!*\
  !*** ./src/utils/toNumber.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ \"./src/utils/isObject.js\");\n/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ \"./src/utils/isSymbol.js\");\n\r\n\r\n\r\n// 用作各种数组常量的引用\r\nconst NAN = 0 / 0\r\n\r\n// 用于匹配前导和尾随空格\r\nconst reTrim = /^\\s+|\\s$/g\r\n\r\n// 用于检测坏的十六进制字符串值\r\nconst reIsBadHex = /^[-+]0x[0-9a-f]+$/i\r\n\r\n// 用于检测二进制字符串值\r\nconst reIsBinary = /^0b[01]+$/i\r\n\r\n// 用于检测八进制字符串值\r\nconst reIsOctal = /^0o[0-7]+$/i\r\n\r\n// parseInt\r\nconst freeParseInt = parseInt\r\n\r\n\r\nfunction toNumber(value) { \r\n  if (typeof value === 'number') { \r\n    return value\r\n  }\r\n  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value)) { \r\n    return NAN\r\n  }\r\n  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) { \r\n    const other = typeof value.valueOf === 'function' ? value.valueOf() : value\r\n    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(other) ? `${other}` : other\r\n  }\r\n  if (typeof value !== 'string') { \r\n    return value === 0 ? value : ~~value\r\n  }\r\n  value = value.replace(reTrim, '') // 匹配值的前后空格用空字符替换\r\n  const isBinary = reIsBinary.test(value) // 是否是二进制数\r\n  const isOctal = reIsOctal.test(value) // 是否是八进制数\r\n  const result = (isBinary || isOctal)\r\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\r\n    : (reIsBadHex.test(value) ? NAN : ~~value)\r\n  return result\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);\n\n//# sourceURL=webpack://utils/./src/utils/toNumber.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});