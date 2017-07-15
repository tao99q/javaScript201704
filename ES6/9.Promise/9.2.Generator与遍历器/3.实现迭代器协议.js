/**
 * Created by Weil on 16/6/25.
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
// 迭代器都会实现一个迭代协议

// 迭代器协议会返回一个带有next方法的对象
// 执行next方法会返回一个{value: 'value', done: Boolean}

let arr = ['i', 's', 'a', 'r', 'r', 'a', 'y'];
//let arr = [1, 2];
//arr.length = 5;

arr[Symbol.iterator] = function (prevObj) {
  let arr = this;
  let currentIndex = 0;

  return {
    next: function () {
      return {
        value: arr[currentIndex++],
        done: currentIndex > arr.length ? true : false
      }
    },
    [Symbol.iterator]: arguments.callee.bind(this)
  }
};

//arr[Symbol.iterator] = function* () {
//  yield 'is';
//  yield 'yield';
//  yield 'hehe';
//};


for (let item of arr) {
  console.log(item);
}

//console.log([...arr]);


// i++ test
//let i = 0;
//let obj = {
//  a: i++,
//  b: i
//};
//console.log(obj);














