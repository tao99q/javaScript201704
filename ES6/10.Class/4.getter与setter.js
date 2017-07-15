/**
 * Created by Weil on 16/7/24.
 */
"use strict";

// ES3中最基本的 getter 和 setter
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
var objES3 = {};
Object.defineProperty(objES3, 'x', {value: 'x'});
Object.defineProperty(objES3, 'y', {
  get: function () {
    if (this._y === undefined) {
      return 'y is not init';
    } else {
      return this._y + '_fromGet';
    }
  },
  set: function (value) {
    this._y = value + '_isSet';
  }
});
console.log('ES3');
console.log(objES3.x, '---' ,objES3.y);
objES3.y = 'init';
console.log(objES3.y);

// ES5中最基本的 getter 和 setter
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
var objES5 = {};
Object.defineProperties(objES5, {
  x: {
    value: 'x'
  },
  y: {
    set: function (value) {
      this._y = value + '_isSet';
    },
    get: function () {
      if (this._y === undefined) {
        return 'y is not init';
      } else {
        return this._y + '_fromGet';
      }
    }
  }
});
console.log('ES5');
console.log(objES5.x, '---' ,objES5.y);
objES5.y = 'init';
console.log(objES5.y);

$(function () {

});

// ES6中最基本的 getter 和 setter
let objES6 = {
  x: 'x',
  get y () {
    if (this._y === undefined) {
      return 'y is not init';
    } else {
      return this._y;
    }
  },
  set y (value) {
    this._y = 'y_isSet';
  }
};
console.log('ES6');
console.log(objES6.x, '---' ,objES6.y);
objES6.y = 'init';
console.log(objES6.y);

class OneClass {
  constructor () {
    this._prop = '_prop';
    OneClass._static_prop = '_static_prop';
  }

  static get x () {
    return this._static_prop + '_fromGet';
  }

  static set x (value) {
    this._static_prop = value + '_isSet';
  }

  get x () {
    return this._prop + '_fromGet';
  }

  set x (value) {
    this._prop = value + '_isSet';
  }
}

let one = new OneClass();
console.log(OneClass.x);
console.log(one.x);