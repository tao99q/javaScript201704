/**
 * Created by Weil on 16/6/19.
 */
let promiseInstance = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is resolve!');
    //reject('This is reject!');
  }, 1000);
});

promiseInstance
  .then((value) => {
    debugger;
    console.log(value);
  })
  .catch((err) => {
    debugger;
    console.log(err);
  });

//promiseInstance
//  .then((value) => {
//    debugger;
//    console.log(value);
//  });
//
//promiseInstance
//  .catch((err) => {
//    debugger;
//    console.log(err);
//  });