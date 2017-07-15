/**
 * Created by Weil on 16/6/19.
 */

// demo1
//let p1 = Promise.resolve('success1');
//p1.then((value) => {
//  console.log(value);
//  debugger;
//});
//
//let pp = new Promise((resolve, reject) => {
//  resolve('success1');
//});


// demo2
//let p2Ins = new Promise((resolve, reject) => {
//  setTimeout(resolve, 1000, 'success2');
//});
//let p2 = Promise.resolve(p2Ins);
//p2.then((value) => {
//  console.log(value);
//  debugger;
//});


// demo3
//let thenableObj = {};
//thenableObj.then = (resolve, reject) => {
//  setTimeout(resolve, 1000, 'success3')
//};
//let p3 = Promise.resolve(thenableObj);
//p3.then((value) => {
//  console.log(value);
//  debugger;
//});

// demo4
/*let p4 = Promise.resolve();
p4.then((value) => {
  console.log(value);
  debugger;
});*/


