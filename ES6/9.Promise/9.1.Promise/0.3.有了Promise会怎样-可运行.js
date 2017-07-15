/**
 * Created by Weil on 16/6/25.
 */

function ajaxPromise1 (value) {
  console.log('1-out');
  return new Promise((resolve, reject) => {
    console.log('1-in');
    setTimeout(resolve, 1000, 'success1-' + value);
  })
}

function ajaxPromise2 (value) {
  console.log('2-out');
  return new Promise((resolve, reject) => {
    console.log('2-in');
    setTimeout(reject, 400, 'success2-' + value);
  })
}

function ajaxPromise3 (value) {
  console.log('3-out');
  return new Promise((resolve, reject) => {
    console.log('3-in');
    setTimeout(resolve, 600, 'success3-' + value);
  })
}

function ajaxPromise4 (value) {
  console.log('4-out');
  return new Promise((resolve, reject) => {
    console.log('4-in');
    setTimeout(resolve, 500, 'success4-' + value);
  })
}

//function ajaxPromiseFinal (initValue = 'noInitValue') {
//  return new Promise((resolve, reject) => {
//    ajaxPromise1(initValue)
//      .then((value) => {
//        debugger;
//        clearTime();
//        return ajaxPromise2(value);
//      })
//      .then((value) => {
//        debugger;
//        clearTime();
//        return ajaxPromise3(value);
//      })
//      .then((value) => {
//        debugger;
//        clearTime();
//        return ajaxPromise4(value);
//      })
//      .then((value) => {
//        debugger;
//        clearTime();
//        resolve(value)
//      })
//      .catch((error) => {
//        reject(error);
//      });
//  })
//}

function ajaxPromiseFinal (initValue) {
  return Promise.resolve(initValue)
    .then(ajaxPromise1)
    .then(ajaxPromise2)
    .then(ajaxPromise3)
    .then(ajaxPromise4)
    .then(value => value)
    .catch(err => Promise.reject(err));
}


ajaxPromiseFinal('init')
  .then((value) => {
    debugger;
  })
  .catch((error) => {
    debugger;
  });
