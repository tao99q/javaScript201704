(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var obj = {
  o1: 'o1'
};
var arr = [1, 2];

//let num = 123;
//export { num }

var func = function func() {};

exports.default = {
  obj: obj,
  arr: arr
};
exports.obj = obj;
exports.arr = arr;

},{}],2:[function(require,module,exports){
'use strict';

var _Export = require('./Export');

var _Export2 = _interopRequireDefault(_Export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_Export2.default, _Export2.default === _Export2.default, 'FFFF');
//import F from './Export';
//console.log(F, '=====');

//console.log(Full, Full.o1);
//console.log(Full);

// console.log(obj, arr);
// console.log(d, 'ddddd');
// console.log(Full === d);

},{"./Export":1}]},{},[2]);
