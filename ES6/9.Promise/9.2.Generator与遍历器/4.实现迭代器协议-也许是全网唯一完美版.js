/**
 * Created by Weil on 16/6/25.
 */
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
// 迭代器都会实现一个迭代协议

// 迭代器协议会返回一个带有next方法的对象
// 执行next方法会返回一个{value: 'value', done: Boolean}


let baseArr = [1, 2, 3, 4, 5];

// 结果不会变的
console.log(baseArr[Symbol.iterator]().next());
console.log(baseArr[Symbol.iterator]().next());
console.log(baseArr[Symbol.iterator]().next());

// 结果会继续上一个
let baseArrIter = baseArr[Symbol.iterator]();
console.log(baseArrIter.next());
console.log(baseArrIter.next());
//baseArrIter = baseArrIter[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]();
console.log(baseArrIter.next());

// 看遍历器的对比
console.log(baseArrIter === baseArrIter[Symbol.iterator]());
console.log(baseArrIter === baseArrIter[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]());
console.log(baseArrIter === baseArr[Symbol.iterator]());



console.log('----------我是一个分割线----------');




let arr = ['i', 's', 'a', 'r', 'r', 'a', 'y'];
//let arr = [1, 2];
//arr.length = 5;

arr[Symbol.iterator] = function (prevIteratorObj) {
  let arr = this;
  let currentIndex = 0;

  if (prevIteratorObj) {
    return prevIteratorObj;
  }

  let iteratorObj = {
    next: function () {
      return {
        value: arr[currentIndex++],
        done: currentIndex > arr.length ? true : false
      }
    }
  };

  iteratorObj[Symbol.iterator] = arguments.callee.bind(this, iteratorObj);

  return iteratorObj;
};

//for (let item of arr) {
//  console.log(item);
//}

//console.log([...arr]);

// 结果会相同
//console.log(arr[Symbol.iterator]().next());
//console.log(arr[Symbol.iterator]().next());
//console.log(arr[Symbol.iterator]().next());

let arrIter = arr[Symbol.iterator]();
//let arrIter = arr[Symbol.iterator]()[Symbol.iterator]();

console.log(arrIter === arrIter[Symbol.iterator]());
console.log(arrIter === arrIter[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]());

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
















