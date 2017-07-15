/**
 * Created by Weil on 16/6/19.
 */

// demo1
let p1 = Promise.reject('fail1');
p1.catch((error) => {
  console.log(error);
  debugger;
});


