'use strict';

// quick

//function* func() {
//  yield 'hello';
//  yield 'js';
//}

if(module.hot)
  module.hot.accept();

//window.onbeforeload

import m from './m.js'

console.log(m);

var a = 10;

console.log('hhhhu0');

async function aaa () {
  let a = await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'aaaa');
  });
  console.log('a:', a);
  clearTime();

  let b = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'bbbb');
  });
  console.log('b:', b);
  clearTime();

  console.log(a + b);

  //return new Promise((resolve, reject) => {
  //  resolve(a + b);
  //});
}

let aaaHandler = aaa();
console.log(aaaHandler);

aaaHandler
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });


function* func() {
  yield 'hello';
  yield 'js';
}

let b = 2;
//
let funcGen = func();
console.log(funcGen);
console.log(funcGen.next());
console.log(funcGen.next());
console.log(funcGen.next());
console.log(funcGen.next());
console.log(funcGen.next());
console.log(funcGen);

//let obj = {};
//obj[Symbol.iterator] = func;
//
//console.log([...obj]);

//let s = Symbol();
//
//console.log(typeof s);
//
//let p = new Promise((resolve, reject) => {
//  setTimeout(resolve, 1000, '123')
//});


















