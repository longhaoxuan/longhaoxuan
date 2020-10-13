# JS基础

[[toc]]

:::tip 写在前面
尽信书则不如无书，红宝书第第三版有很多翻译的有歧义，而且很多话说的很绕，第四版有很大改进，但也并非完美无缺，下面笔记也会有很多变更的地方，希望自己一个月之内通读完，然后进入下一本
:::

javascript包含，ECMAScript,DOM,BOM。支持uinicode字符标准。

:::tip DOM(Documennt Object Model)

- 针对于XML创建扩展用于HTML的API(Application Programming Interface)接口
- DOM视图 View
- DOM事件 Events
- DOM样式 Style
- DOM遍历和范围 Traversal and Range
- DOM加载和保存 Load and Save
- DOM验证 Validation
:::

:::tip BOM(Browser Object Model)

- 操作浏览器的接口　不同浏览器实现不同
- 弹出新窗口
- 提供浏览器详细信息 navigator
- 提供页面加载页面信息 Location
- 提供分辨率信息 screen
- Cookie
- XMLHttpRequest
- ie ActiveXObject
- window
:::

xhtml中引入script标签：

```xhtml
<script type="text/jacascript">
//<![CDATA[
xhtml内需要cData，面对不支持的xhtml的加注释hack
//]]>
</script>
```

## 基础的基础概述

### 数据类型（5简单（原始类型（primitive type））+1复杂） 

1. undefined： [变量初始化]
2. null： [空对象指针，对象初始化最好指定]
3. boolean(true,false)： [false:"",0,NaN,null,undefined]
4. number： [IEEE754格式规范：**浮点数值有问题**]，[0:八进制，0x：16进制]
5. string
6. symbol*新类型
7. object[详细](#object)

因为js变量是**松散**的，不需要太多的类型，变量仅是**占位符**。

#### Nuamber

number数值转换[Number(),parseInt(),parseFlot()]

1. null:0
2. undefined：NaN
3. obj：先valueOf(),后toString()

#### String

- 创建后不可改变，只能销毁在新建
- toString():null,undefined没有toString方法TypeError。
- String()：存在toString方法调用，null，undefined 返回字面量。
- 字面量模板（ES6）:`${}`

#### Symbol(ES6)

- 唯一不可改变。typeof 会返回symbol
- Symbol()初始化，可以传参，仅起到描述作用，不影响唯一性

### 操作符

::: tip 相等与全等
相等先转换在比较，全等不转换仅比较
:::

相等转换规则：

- null和undefined不转换，他俩却相等
- 先转数字，对象调valueOf方法。

```javascript
null == undefined //true
null === undefined //false
null == false // false
```

### 语句

- if
- do—while
- while
- for
- for-in 都会被遍历，但是没有顺序。
- **for-of**新：用于遍历可迭代的对象 //TODO:补全
- **for-await-of**：支持生成promise的可迭代异步对象。
- switch():case[使用的是全等操作，不会触发类型转换]
- with

大量使用with性能会下降，[此法欺骗](#词法欺骗-不推荐-会降低性能)

```js
// with 例
var qs=location.search.substring(1)
var hostName=location.hostname
var url=location.href

with(location){
  var qs=search.substring(1)
  var hostName=hostname
  var url=href
}
```

### 变量作用域和内存问题

原始值（primitive value）~~基本类型值~~：安值引用，基本类型不能添加属性（undefiend,Null,boolean,number,string，symbol)**别着急**

引用值（reference value）~~引用类型值~~:是[引用类型](#引用类型)的实例 **引用类型是数据结构**

- 不能直接操作内存，所以安引用访问的（不严谨，复制是）
- 复制引用类型，复制的是堆内存指针，复制的是引用。

::: warning 意淫
👆boolen，number，string是特殊引用类型，但是他们的实例是基本类型值

👇参数只能**按值**传递，书上说的，下面的例子是证明，但是我觉得是new的问题(nwe 开辟了新的内存地址，切断了)
:::

```JS
function setName(obj){
  obj.name="along"
  obj = new Object()
  obj.name = "song"
}
var person = new Object()

setName(person)  // 传入对象
console.log(person.name) // along
```

**typeof 检测原始值~~非objct，null还是好用的~~**numuer,undefined,boolean,string

**instanceof**根据原型链识别

```js
variable instanceof constructor
person instanceof Object
person instanceof Array
person instanceof RegExp
```

#### 首次谈及执行环境和作用域

- 执行环境（execution context):定义了『变量或函数有权访问的数据』决定了『』的行为，有一个关联的VO
- 变量对象（variable object）：『变量和函数』都在这个里面，无法访问，解析器可以
- 活动对象（activation Object）：ac最开始只包含arguments对象，**这里我理解为：执行到这里，这里的作用域链就变成了ac，ac=作用域链**

::: warning 意淫

- 说说自己的理解，老外的东西说的是贼绕，**"代码在一个环境执行时，会创建VO的一个作用于链"**，作用域链是VO组成的（**VO=作用域?**），那VO就是作用域！另一本书说 **作用域是存储变量的规则**

不同时期的产物，可能是同一个东西，不必太过纠结。
:::

### 变量声明

- var
  - 提升（hoisting）
- let
  - 块级作用域，重复声明报错syntaxError
  - 也会提升，因为‘暂时性死区’导致不能用（temporal dead zone）
- const
  - 一经声明不可改变，对象的键除外
  - 同样块级作用域
  - 如果非要对象不变使用Object.freeze(obj)
  - 会暗示为单一类型，编译器会将实例替换成实际值，减少查找，增加速度

```js
const a ={}
a.b = 3 //不会报错
a = {} // TypeError
```

#### 首次谈及垃圾清除

node[垃圾清除](https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/)

- 标记清除
- 引用计数
- const 和 let 会更早的让垃圾回收程序介入 优化性能

#### 首次谈及管理内存

因为出于安全，浏览器分配的内存比（桌面应用）的少，『chrome牛逼』。

- 解除引用：数据不用最好手动设置null
- 内存泄漏
  - 意外全局声明，函数内声明变量千万记得加let const或var
  - 定时器setTimeout回到函数引用了外部变量
  - 闭包

```js
// 来个泄露的例子吧
(function(){
var a  = b = 7
})()
console.log(b) // 7
console.log(a)  // 报错
```

## 基本引用类型

> 漂亮文章结构北改了大Function和Object都被提升到新的章节了，原来这张叫基本引用类型，现在一分为三，后续还有集合引用类型，函数

- Date[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
- RegRxp // TODO:正则小本本要写笔记

### 基本包装类型（Boolean,Number,String）

- 执行机制：
  1. 创建String类的实例，隐式调用new String()
  2. 在实例上调用指定方法
  3. 销毁实例
- 引用值和基本包装类型的区别是：生命周期不一样，只存在代码执行的瞬间，执行后立即销毁
- 不能为基本类型添加属性和方法
- 可以显式声明

```js
var s1 = "sdadf"
s1.color = "red" // undefiend
// 来了
console.log(typeof s1) // string
s1 = new String("sdfasf")
console.log(typeof s1) // object
```

### 单体内置对象

另外两个内置对象

1. Global
   不存在的，兜底对象，
2. Math
   随机值：num = Math.floor(Math.random()*可能值的总数+第一个肯能值)

### Object对象

- 数据和功能的集合
- Object[详细文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Object（）每个实力都具有的方法**：
| 方法 | 描述 |
| ------ | --------- |
| constructor | 保存创建当前对象的函数|
| hasOwnProperty(propertyName) | 检查给定的属性(propertyName)在当前实例中是否存在，不算原型。|
| isPertotypeOf(object) | 检测传入的对象(object),是否是当前对象的原型。|
| propertyIsEnumberable(propertyName) | 检测给定的属性(propertyName)能否for in。|
| toLocaleString() | 返回对象的字符串表示，与执行环境相关。|
| toString() | 返回对象的字符串表示|
| toValueOf() | 通常和toString()相同，字符串，数值或布尔值。|

**Object 构造函数的方法**：

| 方法 | 描述 |
| --------- | --------------------------- |
| Object.assign()|  通过复制一个或多个对象来创建一个新的对象。|
| Object.create() | 使用指定的原型对象和属性创建一个新对象。|
| Object.defineProperty() | 给对象添加一个属性并指定该属性的配置。 |
| Object.defineProperties() | 给对象添加多个属性并分别指定它们的配置。 |
| Object.entries() | 返回给定对象自身可枚举属性的 [key, value] 数组。 |
| Object.freeze() | 冻结对象：其他代码不能删除或更改任何属性。 |
| Object.getOwnPropertyDescriptor() | 返回对象指定的属性配置。 |
| Object.getOwnPropertyNames() | 返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。 |
| Object.getOwnPropertySymbols() | 返回一个数组，它包含了指定对象自身所有的符号属性。 |
| Object.getPrototypeOf() | 返回指定对象的原型对象。 |
| Object.is() | 比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。 |
| Object.isExtensible() | 判断对象是否可扩展。 |
| Object.isFrozen() | 判断对象是否已经冻结。 |
| Object.isSealed() | 判断对象是否已经密封。 |
| Object.keys() | 返回一个包含所有给定对象自身可枚举属性名称的数组。 |
| Object.preventExtensions() | 防止对象的任何扩展。 |
| Object.seal() | 防止其他代码删除对象的属性。 |
| Object.setPrototypeOf() | 设置对象的原型（即内部 [[Prototype]] 属性）。 |
| Object.values() | 返回给定对象自身可枚举值的数组。

### 2.Array

### 3.Date类型

### 4.RegExp正则匹配

### 5.Function

### 请求响应

### 事件

### xml

## promise

```javascript
new 立即执行，then
Class myp{
  This.val 初始结果空间
  resolve(XE)
  resolve(val){
    This.val=val 保存结果
  }
  Then(full(val))(
  Full(Val)结果传个then执行
)
}
```

## 你不知道的js（上）

### 作用域

#### 编译原理

js “动态或解释性语言，实际上编译行语言”

大部分编译语言代码执行前（编译）三步：


1. 分词/词法分析
2. 解析/语法分析（抽象语法树AST）
3. 代码生成（根据AST生成指令）

js会比这复杂，

#### 理解作用域

**引擎**：从头到尾负责【编译】及【执行】过程

**编译器**：语法分析及代码生成

**作用域**：负责收集维护 所有声明变量 组成的一系列查询，确定当前执行的代码对 变量的访问权限。

**编译器-->>作用域（var a 将填入作用域）**

**引擎-->>（询问当前【作用域】）**

**无：作用域向上查找**

**有：直接执行**

LHS：赋值

RHS(非左查找): 查找

```javascript
function foo(a){
  var b = a           //b=[LHS],a[RHS]
  return a + b         //a,b[RHS]
}
var c = foo(2)  // c=[LHS],foo()[RHS],a=2[LHS]
```

#### 作用域嵌套

逐级向上查找，

#### 异常

RHS:(未声明)ReferenceError

LHS:

非严格模式：帮你声明

严格模式：ReferenceError

作用域存在：typeError，undefined

### 词法作用域

气泡

#### 词法欺骗(不推荐，会降低性能)

**eval（修改词法作用域，严格模式被限制）**

```javascript
function foo(str){
  eval(str)  
  console.log(b)
}
var b = 3
foo("var b = 4")//4
```

**with（创建新的词法作用域，严格模式完全不能用）**

```javascript
//test_1
var obj = {
  a:1,
  b:2,
  c:3
}
//正常
obj.a = 3
...
//with
with(obj){
  a = 3;
  b = 4;
  c = 5;
}
//test_2
function foo(obj){
  with(obj){
    a = 2;
  }
}
var o1 = {
  a:3
}
var o2 = {
  b:3
}
foo(o1) // o1.a=2
foo(o2) // o2.a undefined,  a = 2 会被泄露到全局作用域
```

### 函数作用域和块作用域

#### 函数中的作用域

外部不能访问函数内作用域

#### 隐藏内部实现

任意代码片段，函数声明对其进行包装，将其隐藏

最小特权原则（最小暴露原则）

规避冲突

#### 函数作用域

问题


1. 首先要生声明一个【具名】函数foo()（污染全局作用域）

1. 必须调用函数foo()

#### IIFE（立即执行函数）【immediately invoked function expression】

```plain
(function(@param){
  。。。
})(@param)
看个人喜好
(function(){
  
}())
```
undefined保存
```plain
(function(undefined){
  a === undefined
})()
```
**匿名函数的问题**

1. 不方便调试
2. 递归的时候只能使用过期的argument.callee
3. 降低可读性
### 块作用域


1. let 不会提升，运行前声明不“存在”
```plain
if(foo){
  let a  = 2
  console.log(a)
}
//显式
if(foo){
  {
    let a = 2
    console.log(a)
  }
}
```
```plain
for(i = 0;i<3;i++){
  setTimeout(function(){
    console.log(i)
    },10000)
} // 333
//
for(let i = 0;i<3;i++){
  setTimeout(function(){
    console.log(i)
    },10000)
} // 012
```

1. const
### 提升

```plain
a = 2 
var a 
console.log(a)//2
==========
var a
a = 2
console.log(a)
```
函数优先

```javascript
foo()     //typeError
bar()     //ReferenceError
var foo = function bar(){
  var a = 2
}
=====
var foo
foo()
bar()
foo = function{
  var bar = ...self...
}
```

### 作用域闭包














## webpack 前端模块化打包工具

1

```plain
npm install webpack --dev
```
### 模块化


1. 全局变量泛滥
2. 命名冲突
3. 依赖关系管理

**初期**

```plain
//立即执行函数
(function(window){
  window.jQurey = window.$ = jQurey
})(window)
```
**现代化(高内聚，低耦合）**

1. commonJS
2. RequireJS(AMD)/SeaJS(CMD)
```plain
require(['math'],function(math){
  math.add(2,3)
})
```
3. ES6 module
```plain
import math from 'math'
```
#### webpack

**npm->loader->source map(排错)->plagin**

webpack常用配置包括：


1. devtool、
2. entry、
3. output、
4. module、
5. resolve、
6. plugins、
7. externals等
### loader

[https://zhuanlan.zhihu.com/p/28245984](https://zhuanlan.zhihu.com/p/28245984)

loader是一个导出为function的node模块。可以将匹配到的文件进行一次转换，同时loader可以链式传递。

### 梳理

dev 开发环境


1. devServer
2. sourceMap
3. 接口代理，proxy
4. pro 生产环境


1. treeShaking（清除未用模块）
2. 代码压缩
3. 提取公共代码

共同点

同样的入口，

部分代码相同的

**方案**


1. webpack.prod.js
2. webpack.dev.js
3. webpack.base.js

**webpack-merge**

打包优化


1. 入口配置，entry多入口（jqurey全局使用）
2. 提取公共代码，splithunks
3. 动态加载，按需加载

代码包分析工具 webpack-bundle-analyzer







## vue

### 声明式渲染

```plain
{{  }}
v-if = "ture|flase"
v-for = "item in items"
v-model
```

## vue-cli

```plain
npm install -g @vue/cli
vue create my-project
```
### vue目录结构

#### public

模板文件 单页面文件

#### src目录


1. assets/ 静态文件
2. components/ 组件模块
3. router/ 路由
4. store/ 状态管理、数据仓库
5. views/ 视图
6. App.vue Vue跟组件
7. main.js 入口文件
8. .gitignone git忽略文件
#### vue.config.js文件

自己生成，调整vue webpakg 配置

```javascript
    module.exports = {
        configureWebpack:{
            plugins:[new htmlWebpackPlugin()]
        }
    }
```
### readme.md与常用命令

npm install              使用

npm run serve            启动hot-reloads

npm run build            项目打包

npm run lint             lint代码检测

输出webpack相关配置

npx vue-cli-service inspack --mode production(or development) >> webpack.production.js



## vue-vuex

```javascript
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // 状态数据
    count:10
  },
  getters:{
    // 计算属性
  },
  mutations: {
    // 唯一改变state 得方式
  },
  actions: {
    //进行异步处理
  },
  modules: {
    // 模块化
  }
});
```






## koa

### koa-static 静态文件

```javascript
const statics = requeire('koa-stacit')
const staicsPath =  './static'
app.use(statics(
  path.join(__dirname,staicsPath)
))
```











## 闭包（closure）

> 闭包是函数和声明该函数的词法环境的组合
> 闭包就是能够读取其他函数内部变量的函数。
[闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

### 闭包的作用

- 实现共有变量
 累加器
- 可以做缓存
- 可以是实现封装，属性私有化
- 模块开发防止污染全局变量

## 立即执行函数

> 执行后立即销毁
> 实际上表达式都可以被执行
> eater
> Person

```js
    (function(){}()); //W3c
    (function(){})();
```

## 函数声明转表达式

```js
+ function text() {};
- function tect() {};
! function tect() {};
```











