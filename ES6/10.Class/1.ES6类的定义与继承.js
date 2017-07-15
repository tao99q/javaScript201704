/**
 * Created by Weil on 16/7/24.
 */
"use strict";

// 父类
class Parent {
  constructor (p) {
    console.log('parent constructor');
    this.p = p;
  }

  sayParent () {
    console.log('parent');
  }
}

// 子类 定义子类的时候不会实例化父类, 实例化子类实例的时候才会实例父类
class Child extends Parent {
  // 构造函数不写会默认加上,但是如果写了构造函数必须
  constructor (c) {
    console.log('child constructor');
    super('p');
    //let _self = super('p');
    //console.log(_self === this);
    this.c = 'c'; // 必须在super后用
  }

  sayChild () {
    console.log('child');
  }
}

debugger;
let instance = new Child();
instance.sayParent();
instance.sayChild();
console.dir(instance);

console.log(typeof Parent, typeof Child);