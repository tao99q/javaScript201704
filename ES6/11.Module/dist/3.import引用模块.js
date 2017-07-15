(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _x$y$z$obj = {
  x: 'x',
  y: 'y',
  z: 'z',
  obj: { o: 'o' }
};
var x = _x$y$z$obj.x;
var y = _x$y$z$obj.y;
var z = _x$y$z$obj.z;
var obj = _x$y$z$obj.obj;
exports.x = x;
exports.y = y;
exports.z = z;
exports.obj = obj;

},{}],2:[function(require,module,exports){
'use strict';

var _Import = require('./Import');

console.log(_Import.x, _Import.y, _Import.z, _Import.obj);
console.log(_Import.x, _Import.obj);
console.log(_Import.obj === _Import.obj);

},{"./Import":1}]},{},[2]);
