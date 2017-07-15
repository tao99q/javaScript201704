import Full, { obj, arr } from './Export'
console.log('---');
console.log(Full, obj, arr);
console.log(Full.obj, Full.arr);
console.log('---');

import React, { Component } from 'react';
console.log(React, Component);

class Parent {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  add () {
    console.log('Util: ', this.x + this.y);
  }
}

class Child extends Parent {
  constructor (a) {
    super(7, 8);
    this.a = a;
  }

  say () {
    console.log(super.prop);
    //debugger;
    console.log('say');
  }
}

let c = new Child(123);

c.say();