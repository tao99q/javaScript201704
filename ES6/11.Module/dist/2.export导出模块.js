(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.func = func;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 一
// 直接导出 当时定义 的属性
var cnt = exports.cnt = 10;
function func() {}

var Util = exports.Util = function Util() {
  _classCallCheck(this, Util);
};

// 二
// 导出一个变量


var x = 'x';
exports.x = x;

// 导出多个变量

var a1 = 1;
var a2 = 2;
var a3 = 3;
exports.a1 = a1;
exports.a2 = a2;
exports.a3 = a3;

// 导出一个变量并更名

var _y = 'y';
exports.y = _y;

// 导出多个变量并更名

var _o1$o = {
  o1: 'o1',
  o2: 'o2'
};
var _o1 = _o1$o.o1;
var _o2 = _o1$o.o2;
exports.obj1 = _o1;
exports.obj2 = _o2;

// 同一个变量导出多次

var z = 'z';
exports.z = z;
exports.z1 = z;
exports.z2 = z;

// 三
// 重复导出后会后面的会覆盖前面的

var p1 = 'p1';
var p2 = 'p2';
exports.p = p1;
exports.p = p2;

// 四
// 输出的值是引用

var q = 'q';
exports.q = q;

setTimeout(function () {
  exports.q2 = exports.q1 = exports.q = q = 'new q';
}, 10);

// 多个值的引用也是相同的
exports.q1 = q;
exports.q2 = q;

// 不能直接输出
//let no = 'no';
//export no;

},{}],2:[function(require,module,exports){
'use strict';

var _Export = require('./Export');

var _Export2 = _interopRequireDefault(_Export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_Export2.default);

console.log(_Export.cnt, _Export.func, _Export.Util, _Export.x, _Export.a1, _Export.a2, _Export.a3, _Export.y, _Export.obj1, _Export.obj2, _Export.p, _Export.q, _Export.q1, _Export.q2, _Export.z, _Export.z1, _Export.z2);

//q = 123;
console.log(_Export.q, '=======-==--=-==-');
// console.log(q, q1, q2, '--');
setTimeout(function () {
  console.log(_Export.q);
  // console.log(q, q1, q2, '===');
}, 1000);

// cnt = 11; // 写了这句话会编译不通过

},{"./Export":1}]},{},[2]);
