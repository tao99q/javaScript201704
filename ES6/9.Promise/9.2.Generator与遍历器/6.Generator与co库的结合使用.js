/**
 * Created by Weil on 16/6/25.
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
// 迭代器都会实现一个迭代协议

// 迭代器协议会返回一个带有next方法的对象
// 执行next方法会返回一个{value: 'value', done: Boolean}

//let arr = ['i', 's', 'a', 'r', 'r', 'a', 'y'];
let arr = [1, 2];
//arr.length = 5;

arr[Symbol.iterator] = function (prevObj) {
  let arr = this;
  let currentIndex = 0;

  //return {
  //  next: function () {
  //    return {
  //      value: arr[currentIndex++],
  //      done: currentIndex > arr.length ? true : false
  //    }
  //  },
  //  [Symbol.iterator]: arguments.callee.bind(this)
  //}

  if (prevObj) {
    return prevObj;
  }

  let resObj = {
    next: function () {
      return {
        value: arr[currentIndex++],
        done: currentIndex > arr.length ? true : false
      }
    }
  };

  resObj[Symbol.iterator] = arguments.callee.bind(this, resObj);

  return resObj;
};

//arr[Symbol.iterator] = function* () {
//  yield 4;
//  yield 5;
//  yield 6;
//};

//for (let item of arr) {
//  console.log(item);
//}

//console.log([...arr]);

// i++ test
//let i = 0;
//let obj = {
//  a: i++,
//  b: i
//};
//console.log(obj);

//console.log(arr[Symbol.iterator]().next());
//console.log(arr[Symbol.iterator]().next());
//console.log(arr[Symbol.iterator]().next());

let arrIter = arr[Symbol.iterator]();
//let arrIter = arr[Symbol.iterator]()[Symbol.iterator]();

console.log(arrIter === arrIter[Symbol.iterator]());

//console.log(arrIter.next());
//console.log(arrIter.next());
//console.log(arrIter.next());
//
//console.log(arrIter === arrIter[Symbol.iterator]());
//console.log(arr[Symbol.iterator]() === arrIter[Symbol.iterator]());




//let arr2 = [1, 3, 5];

//console.log(arr2[Symbol.iterator]().next());
//console.log(arr2[Symbol.iterator]().next());
//console.log(arr2[Symbol.iterator]().next());

//let arr2Iter = arr2[Symbol.iterator]();
//
//console.log(arr2Iter.next());
//console.log(arr2Iter.next());
//console.log(arr2Iter.next());
//
//console.log(arr2Iter === arr2Iter[Symbol.iterator]());
//console.log(arr2[Symbol.iterator]() === arr2Iter[Symbol.iterator]());
















