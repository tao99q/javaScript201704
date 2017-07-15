/**
 * Created by Weil on 16/6/27.
 */

// add , subtract , multiply and divide


// 定义 Util 类
function Util (x, y) {
  this.x = x;
  this.y = y;
}
Util.prototype = {
  constructor: Util,
  add: function () {
    console.log('Util: ', this.x + this.y);
  }
};

// 定义 SuperUtil 类
function SuperUtil (x, y) {
  this.x = x;
  this.y = y;
}
SuperUtil.prototype = new Util(8, 9);



let superUtil = new SuperUtil(1, 2);
//superUtil.x = 5;
//superUtil.y = 6;
//superUtil.add();

//console.log(superUtil instanceof SuperUtil);
//console.log(superUtil instanceof Util);

console.log(superUtil.__proto__ == SuperUtil.prototype);
console.log('SuperUtil.prototype:', SuperUtil.prototype);
console.log('SuperUtil.__proto__:', SuperUtil.__proto__);
console.log('Util.__proto__:', Util.__proto__);
console.log('Util.prototype:', Util.prototype);

console.log(SuperUtil.prototype.__proto__ == Util.prototype);
console.log(Util.prototype.__proto__ == Function.prototype.__proto__);
console.log(superUtil.__proto__.__proto__);
console.log(SuperUtil.__proto__ == Util);


// ***
console.log(Util.prototype.__proto__ == Object.__proto__);

console.log('-----');
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Object instanceof Function);

// Function 和 Object 都是构造函数 所有的函数都是继承自Function的 所有会有如下两个
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);

// Function.prototype 是 Object 的实例
console.log(Function.prototype.__proto__ === Object.prototype);
// 这个是等价替换的结果
console.log(Function.__proto__.__proto__ === Object.prototype);


// 实例对象的原型(__proto__) 会指向其构造函数的 prototype 属性
// 子类(是一个函数) 继承自 父类(也是一个函数)
// 子类的 prototype 属性 相当于 父类的实例对象
// 所以自类的 prototype.__proto__ 指向 父类的 prototype

console.log('----------');
function A () {
  this.x = 'x';
}

A.prototype.sayA = function () {
  console.log('A');
};

A.prototype.say = 'say';

let aa = new A();

console.log(Object.getOwnPropertyNames(aa));
console.log(Object.getOwnPropertyNames(aa.__proto__));
console.log(aa.__proto__ == A.prototype);

// 所以 new 的本质是将右侧的 prototype 赋值给左侧的 __proto__ 属性
// 同时将 右侧this的属性赋值到左侧

console.log('----------');

function Parent() {
  this.p = 'ppp';
}
function Child() {
  this.c = 'ccc';
}

function createSubProto(proto) {
  // fn 在这里就是临时类
  // proto 就是 Parent.prototype
  var fn = function() {};
  fn.prototype = proto;
  return new fn()
}

Child.prototype = createSubProto(Parent.prototype);
//Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
console.log(child instanceof Child);   // true
console.log(child instanceof Parent);  // true
console.log(child.p, child.c);












