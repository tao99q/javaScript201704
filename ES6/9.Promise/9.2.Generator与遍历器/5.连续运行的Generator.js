/**
 * Created by Weil on 16/6/25.
 */

function* genFunc(initValue) {
  let first = yield new Promise((resolve, reject) => {
    debugger;
    clearTime();
    setTimeout(resolve, 1000, 'first-' + initValue);
  });

  let second = yield new Promise((resolve, reject) => {
    debugger;
    clearTime();
    setTimeout(resolve, 500, 'second-' + first);
  });

  let third = yield new Promise((resolve, reject) => {
    debugger;
    clearTime();
    setTimeout(resolve, 700, 'third--' + second);
  });
}

let genHandler = genFunc('init');

genHandler.next().value.

  then((value) => {
    console.log(value);
    genHandler.next(value).value.

    then((value) => {
      console.log(value);
      genHandler.next(value).value.

      then((value) => {
        console.log(value);
      })
    })
  });

//genHandler.next().value.
//  then((value) => {
//    console.log(value);
//    //debugger;
//  });
//
//genHandler.next(2).value.
//  then((value) => {
//    console.log(value);
//    //debugger;
//  });
//
//genHandler.next(3).value.
//  then((value) => {
//    console.log(value);
//    //debugger;
//  });