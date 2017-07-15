'use strict';

/**
 * Created by Weil on 16/6/21.
 */

'use strict';

// 有点像一个函数内部有多个函数,是一个状态机.
// Generator 生成器
// yield 生成

// 三种状态 hello js end
function* genFunc() {
  console.log(123);
  yield 'Hello';
  yield 'Generator';
  yield '!';

  //return 'end';
}

// Generator 返回的不是返回值,也不是第一个生成的内容,而是一个迭代器
// 迭代器是一个可遍历的对象
let genHandler = genFunc();

//console.log(genHandler.next());
//console.log(genHandler.next());
//console.log(genHandler.next());
//console.log(genHandler.next());
//console.log(genHandler.next());

//for (let item of genHandler) {
//  console.log(item, '通过for of循环运行遍历器');
//}

console.log([...genHandler], '通过...运行遍历器');