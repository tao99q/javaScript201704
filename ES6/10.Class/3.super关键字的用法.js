/**
 * Created by Weil on 16/7/24.
 */
"use strict";

// 父类
class Parent {
  constructor (p) {
    // debugger;
    this.p = p;
  }

  static parentStatic () {
    console.log('parentStatic');
  }

  sayParent () {
    debugger;
    console.log(new.target);
    //debugger;
    console.log('parent');
  }
}
Parent.parentCount = 1;
Parent.prototype.parentStr = 'parentStr';

// 子类
class Child extends Parent {
  constructor (c) {
    // debugger;
    super('p'); // Parent('p');
    // debugger;
    this.c = c;
  }

  static childStatic () {
    // super === Parent === Child.__proto__
    debugger;
    console.log('childStatic');
    super.parentStatic();
    Child.__proto__.parentStatic();
    console.log(super.parentCount, Child.__proto__.parentCount);
  }

  sayChild () {
    // super 在子类的原型方法中,是父类的prototype
    // super === Parent.prototype
    debugger;
    console.log('child');
    console.log(super.parentStr);
    console.log(super.sayParent());
    debugger;
    console.log(instance.__proto__.parentStr);

    console.log(Child.prototype.__proto__.parentStr);
    console.log(super.p);
  }
}

// debugger;
let instance = new Child('c');

//instance.__proto__.x = 'x';
instance.sayChild();

// console.log('\n静态类中的super');
// Child.childStatic();


console.log('\n用一个对象去解释 super 和 实例的__proto__ 的关系');
let ParentObj = {
  sayParent () {
    console.log('say parent');
  }
};

let ChildObj = {
  sayChild () {
    // super === ParentObj === ChildObj.__proto__
    debugger;
    console.log('say child');
    ChildObj.__proto__.sayParent();
    super.sayParent();
  }
};

Object.setPrototypeOf(ChildObj, ParentObj); // ChildObj.__protp__ = ParentObj
ChildObj.sayChild();