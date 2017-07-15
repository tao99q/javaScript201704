/**
 * Created by Weil on 16/6/25.
 */

// third-second-first-init
async function asyncFunc (initValue) {
  let first = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first-' + initValue);
  });

  console.log('first-' + initValue, '#111');
  //debugger;
  clearTime();

  let second = await new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'second-' + first);
  });

  console.log('second-' + first, '#222');
  //debugger;
  clearTime();

  let third = await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'third-' + second);
  });

  console.log('third-' + second, '#333');
  //debugger;
  clearTime();
  return third;
}

asyncFunc('init')
  .then((value) => {
    debugger;
    console.log('asyncFuncRes: ', value);
  })
  .catch((error) => {
    debugger;
    console.log('asyncError: ', error);
  });


//function* genFunc(initValue) {
//  let first = yield new Promise((resolve, reject) => {
//    setTimeout(resolve, 1000, 'first-' + initValue);
//  });
//
//  let second = yield new Promise((resolve, reject) => {
//    setTimeout(resolve, 500, 'second-' + first);
//  });
//
//  let third = yield new Promise((resolve, reject) => {
//    setTimeout(resolve, 700, 'third--' + second);
//  });
//
//  return 'third--' + second;
//}
//
//co(genFunc(1))
//  .then((value) => {
//    console.log(value, '---结果已经返回了');
//  });
