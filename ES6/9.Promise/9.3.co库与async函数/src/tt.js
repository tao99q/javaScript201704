/**
 * Created by Weil on 16/3/24.
 */

'use strict';

function* func () {
  console.log('before', 1);
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('timeout' + 1);
      resolve(1);
    }, 1000)
  });

  console.log('before', 2);
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('timeout' + 2);
      resolve(2);
    }, 1000)
  });

  console.log('before', 3);
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('timeout' + 3);
      resolve(3);
    }, 1000)
  });
}

let funcGen = func();

/*for (let item of funcGen) {
  console.log(item);
}*/

//
funcGen.next().value.then((res) => {
  console.log('res: ' + res);
  funcGen.next().value.then((res) => {
    console.log('res: ' + res);
    funcGen.next().value.then((res) => {
      console.log('res: ' + res);
    });
  });
});

fetch({
  url: 'zf.js',
  data: {a: 1}
}).then()
  .catch();