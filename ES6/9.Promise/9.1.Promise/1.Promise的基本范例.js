/**
 * Created by Weil on 16/6/19.
 */

// new 一个Promise对象,后续可以对这个Promise对象进行相应的操作
//let promiseInstance = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve('This is resolve!');
//  }, 1000);
//});
//
//promiseInstance
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((err) => {
//    console.error(err);
//  });

// 函数的返回值是一个Promise实例,调用函数后可以对返回值的Promise对象进行相应的操作
function ajaxPromise (queryUrl) {
  return new Promise((reslove, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', queryUrl, true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          debugger;
          reslove(xhr.responseText);
        } else {
          reject('error');
        }
      }
    }
  });
}

//debugger;
//clearTime();

let ajaxResPromise = ajaxPromise('https://api.github.com/');

//debugger;
//clearTime();

//Promise.prototype.then
//Promise.prototype.catch
ajaxResPromise
  .then((value) => {
    debugger;
    console.log(value);
  })
  .catch((err) => {
    debugger;
    console.error(err);
  });

// 1.Promise内部的resolve方法运行导致Promise实例的状态发生改变
// 2.状态从pending变到resolve
// 3.当状态从pending变到resolve的时候,Promise实例的then方法会被Promise运行













