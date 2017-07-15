
// 一
// 直接导出 当时定义 的属性
export let cnt = 10;
export function func () {}
export class Util {}

// 二
// 导出一个变量
let x = 'x';
export { x }

// 导出多个变量
let [a1, a2, a3] = [1, 2, 3];
export { a1, a2, a3 }

// 导出一个变量并更名
let _y = 'y';
export { _y as y };

// 导出多个变量并更名
let { o1: _o1, o2: _o2 } = {
  o1: 'o1',
  o2: 'o2'
};
export { _o1 as obj1, _o2 as obj2 }

// 同一个变量导出多次
let z = 'z';
export {
  z,
  z as z1,
  z as z2
}

// 三
// 重复导出后会后面的会覆盖前面的
let p1 = 'p1';
let p2 = 'p2';
export { p1 as p }
export { p2 as p }

// 四
// 输出的值是引用
let q = 'q';
export { q }
setTimeout(() => {q = 'new q'}, 10);

// 多个值的引用也是相同的
export { q as q1, q as q2 }

// 不能直接输出
//let no = 'no';
//export no;
























