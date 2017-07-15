# ES6 Generator

## 什么是Generator

`Generator`也类似一个状态机，内部有多个状态。

在`Generator`内部，每一个`yield`就代表一个状态。

## 定义Generator

`Generator`函数由`function*`定义。

```javascript
function* genFunc () {
	yield 1;
	yield 'str';
	yield {};
}
```

## Generator函数的调用

`Generator`函数运行后会返回一个遍历器对象，而不是普通函数的返回值。

遍历器对象会有一个next方法，这个方法没运行一次，遍历器内部的指针都会向后移动一次。

在`Generator`的遍历器执行后，会返回一个对象，对象里面有两个值value和done。
value是yield后面表达式的值(也就是内部的状态)，done是一个布尔值，表示这个遍历器是否执行完毕。

```javascript
let gen = genFunc();

gen.next(); // Object {value: 1, done: false}
gen.next(); // Object {value: "str", done: false}
gen.next(); // Object {value: "str", done: false}
gen.next(); // Object {value: undefined, done: true}

```




