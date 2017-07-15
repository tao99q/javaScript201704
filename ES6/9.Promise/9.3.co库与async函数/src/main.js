/**
 * Created by Weil on 16/6/25.
 */

import co from '../libs/co.js';

function* genFunc(initValue) {
  let first = yield new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first-' + initValue);
  });

  let second = yield new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'second-' + first);
  });

  let third = yield new Promise((resolve, reject) => {
    setTimeout(resolve, 700, 'third--' + second);
  });

  return 'third--' + second;
}

co(genFunc(1))
  .then((value) => {
    console.log(value, '---结果已经返回了');
  });

//let genHandler = genFunc(1);
//
//genHandler.next().value.
//then((value) => {
//  console.log(value);
//  genHandler.next(value).value.
//  then((value) => {
//    console.log(value);
//    genHandler.next(value).value.
//    then((value) => {
//      console.log(value);
//    })
//  })
//});