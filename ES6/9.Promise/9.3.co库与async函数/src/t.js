/**
 * Created by Weil on 16/6/25.
 */

function* genFunc () {
  yield 1;
  yield 'str';
  yield {};
}

let gen = genFunc();

console.dir(gen);

let iter = gen[Symbol.iterator]();
//debugger;

for (let item of gen) {
  console.log(item);
}

let a = [1, 2, 3];
//console.log(a[Symbol.iterator]().next());

let aiter = a[Symbol.iterator]();
console.log(aiter == aiter[Symbol.iterator]());

let aEntries = a.entries();
console.log(aEntries === aEntries[Symbol.iterator]());

//console.log(a[Symbol.iterator]() === a[Symbol.iterator]()[Symbol.iterator]());

//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//
//console.log(gen);

//let a = [1, 2, 3];
//console.log(a[Symbol.iterator]().next());

let obj = {
  a: 1,
  b: 2
};