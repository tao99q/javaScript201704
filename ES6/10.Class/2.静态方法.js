/**
 * Created by Weil on 16/7/24.
 */
"use strict";

// 父类
class Parent {
  constructor (p) {
    this.p = p;
  }

  static parentStatic () {
    console.log('parentStatic');
  }

  sayParent () {
    console.log('parent');
  }
}

// 子类
class Child extends Parent {
  constructor (c) {
    super('p');
    this.c = 'c';
  }

  static childStatic () {
    console.log('childStatic');
  }

  sayChild () {
    console.log('child');
  }
}

let instance = new Child();
Child.childStatic();
Child.parentStatic();

// 子类能够继承父类的静态方法就是因为这条原型链的继承
console.log(Child.__proto__ === Parent);
console.dir(Child);

console.log('实例上并没有静态方法', instance.childStatic, instance.parentStatic);
console.dir(instance);

console.log('\n通过原型链的机制可以让实例获取到类的静态方法');
instance.__proto__.constructor.childStatic();
instance.__proto__.__proto__.constructor.parentStatic();

// 如何让ES5也能够实现类似静态方法的功能呢
console.log('\n如何让ES5也能够实现类似静态方法的功能呢');
function P () {

}
P.pStatic = function () {
  console.log('p in pStatic');
};

function C () {

}
C.cStatic = function () {
  console.log('c in cStatic');
};

C.prototype = new P();
C.prototype.constructor = C;
Object.setPrototypeOf(C, P); // C.__proto__ = P;
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
C.pStatic();
C.cStatic();































