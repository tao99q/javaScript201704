/**
 * Created by Weil on 16/6/25.
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
// 迭代器都会实现一个迭代协议

function* genFunc() {
  yield 'Hello';
  yield 'Generator';
  yield '!';
}

let genHandler = genFunc();

console.log(genHandler[Symbol.iterator], typeof genHandler[Symbol.iterator]);

let genIter = genHandler[Symbol.iterator]();
console.log(genHandler === genIter, 'Generator Iter');

let a = [1, 2 ,4];
let aIter = a[Symbol.iterator]();
//let aIter = a[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]()[Symbol.iterator]();

//console.log([...aIter]);

//for (let item of a) {
//  console.log(item);
//}
//
//for (let item of aIter) {
//  console.log(item);
//}

console.log(aIter === aIter[Symbol.iterator](), 'Array Iter');

let obj = {};
console.log(obj[Symbol.iterator], 'Object Iter');


