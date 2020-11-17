# JS函数式编程

函数式不能属于任何对象，没有this，

1. 函数是一等公民。可赋值给其他变量，也可作为参数传入，也可返回
2. 只用”表达式"，不用"语句"
3. 没有”副作用"：不改变输入值，
4. 不修改状态
5. 引用透明（函数运行只靠参数且相同的输入总是获得相同的输出）
6. 不可改变量。在函数式编程中，我们通常理解的变量在函数式编程中也被函数代替了：在函数式编程中变量仅仅代表某个表达式。这里所说的’变量’是不能被修改的。所有的变量只能被赋一次初值 

## 纯函数

特点：没有副作用，固定输入固定输出（可做缓存），没有对外变量的引用
优点：降低复杂度，可以缓存（lodash库）
相关：幂等和纯度，幂等多次后还是同样的结果

```js
var min = 18
var checkage = age => age>min; // 不纯，因为用了外部变量

//纯函数
var checkage = age => age>18 // 写死了，降低了灵活性，所以需要柯里化
```

## 偏应用函数

特点：传递一个一部分参数调用它，返回一个函数处理剩下的参数

```js
// 带⼀个函数参数 和 该函数的部分参数
const partial = (f, ...args) =>
 (...moreArgs) =>
 f(...args, …moreArgs)

const add3 = (a, b, c) => a + b + c
// 偏应⽤ `2` 和 `3` 到 `add3` 给你⼀个单参数的函数
const fivePlus = partial(add3, 2, 3) //(...morArgs)=>add3(2,3,.moreArgs)
fivePlus(4) // 变成了纯函数，只能传一个值 神奇不

//bind实现
const add1More = add3.bind(null, 2, 3) // (c) => 2 + 3 + c
```

### 柯里化

- 隶属于偏应用函数，是一种实现方式， 偏应用函数的子集,柯里化是有从左到右的执行逻辑
- 柯里化(curried) 通过偏应用函数实现。它把一个多参数的函数转换为一个嵌套一元函数的过程
- 创建一个已经设置号的[一个或多个参数]的函数

bind实现
优点：预加载，缓存
缺点：一堆括号

```js
// 前面的例子改写下
var checkage = min=>(age => age>min);
var checkage18 = checkage(18)
checkage(20)
```

- 事实上柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一已经记住了这些参数的新函数，某种意义上讲，这是一种对参数的“缓存”，是一种非常高效的编写函数的方法：

```js
function add(x,y){
    return x+y
}
// 柯里化后❤
function addX(y){
    return function(x){
        return x+y
    }
}
addX(2)(3)
```

### 函数组合

- 函数组合为了解决 h(g(f(x)))
储存中间按逻辑

```js
const compose = (f, g) => (x => f(g(x)));
var first = arr => arr[0];
var reverse = arr => arr.reverse();
var last = compose(first, reverse);
last([1,2,3,4,5]);
```

### Point Free

- 减少不必要的命名，让代码保持简洁和通用。

```js
var toUpperCase = word => word.toUpperCase();
var split = x => (str => str.split(x));
var f = compose(split(' '), toUpperCase);
f("abcd efgh");
```

## 声明式和命名式

优点：纯函数完全不用考虑
缺点：不纯函数会产生副作用

```js
//命令式
let CEOs = [];
for(var i = 0; i < companies.length; i++)
 CEOs.push(companies[i].CEO)
}
//声明式
let CEOs = companies.map(c => c.CEO);
```

## 惰性函数

ajax封装

## 高阶函数

函数单参数，传入函数返回函数，复用达到跟高的抽象

```js
var add=function (x,y) {
 return x+y;
}
function math(func,array){
 return func(array[0],array[1]);
}
math(add,[1,2]);
```

## 尾调用优化

防止栈溢出，

```js
//斐波那惬 递归
function sum(n) {
 if (n===1) return 1;
 return n+sum(n-1);
}
//尾递归   单纯的减少了栈存储 创建帧依然创建
function sum(x,total) {
 if (x===1) {
  return x+total;
 }
 return sum(x-1,x+total);
}
```

 浏览器开启尾递归（骚操作）

尾递归调用：最后一步掉用自身

## 闭包

保存函数的词法作用域，(拿到了不该属于自己的函数)

## 范畴与容器

包含“值”和“函数”（变形关系）
函数式是范畴论的运算方法
$(...)

## 函子（functor）的实现

```js
var Container = function(x) {
 this.__value=x;
}
//一般约定，函子有个of方法
Container = x => new Container(x);
//一般约定
Container.prototype.map = function(f) {
 return Container.of(f(this.__value))
};
```
