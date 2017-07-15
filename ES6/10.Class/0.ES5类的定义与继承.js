/**
 * Created by Weil on 16/7/24.
 */

// 父类
function Parent (p) {
  console.log('parent constructor');
  this.p = p;
}
Parent.prototype.sayParent = function () {
  console.log('parent');
};

// 子类
function Child (c) {
  console.log('child constructor');
  this.c = c;
}

Child.prototype = new Parent('p');
Child.prototype.constructor = Child;
Child.prototype.sayChild = function () {
  console.log('child');
};

// 子类实例
debugger;
var instance = new Child('c');
instance.sayChild();
instance.sayParent();
console.log(instance.c, instance.p);
console.dir(instance);