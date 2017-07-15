/**
 * Created by Weil on 16/6/19.
 */

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'This is resolve!');
});

p1
  .then((value) => {
    //debugger;
    clearTime();
    //return Promise.resolve(1111);
    return 1111;
    //return new Promise((resolve, reject) => {
    //  resolve()
    //})
    //return Promise.resolve();
  })
  .then((value) => {
    debugger;
    clearTime();
    //return '2 then';
    return Promise.reject('2 error');
    //a+b
    //throw new Error("throw error");
  })
  .catch((error) => {
    debugger;
    clearTime();
    return 'catch 2';
  })
  .then((value) => {
    debugger;
    clearTime();
    return 'then 3';
  })
  //.catch((error) => {
  //  debugger;
  //  clearTime();
  //});

// 链式调用的例子

function ajaxPromise () {
  return new Promise((resolve, reject) => {
    // ...
    resolve(xhr.responseText);
  });
}

ajaxPromise
  .then((resStr) => {
    return JSON.parse(resStr);
  })
  .then((resObj) => {
    return resObj.body;
  })
  .catch((error) => {
    Promise.reject('数据解析失败!');
  });













