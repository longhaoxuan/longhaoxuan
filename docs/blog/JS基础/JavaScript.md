# JS基础

[[toc]]

javascript包含，ECMAScript,DOM,BOM。支持uinicode字符标准。

xhtml中引入script标签：

```xhtml
<script type="text/jacascript">
//<![CDATA[
xhtml内需要cData，面对不支持的xhtml的加注释hack
//]]>
</script>
```

## 基础的的基础
### 数据类型（5简单+1复杂）原始类型（primitive type）

1. undefined： [变量初始化]
2. null： [空对象指针，对象初始化最好指定]
3. boolean(true,false)： [false:"",0,NaN,null,undefined]
4. number： [IEEE754格式规范：**浮点数值有问题**]，[0:八进制，0x：16进制]
5. string
6. symbol*新类型
7. object

因为js变量是**松散**的，不需要太多的类型，变量仅是**占位符**。

number数值转换[Number(),parseInt(),parseFlot()]

- null:0
- obj：先valueOf(),后toString()

String()和toString()

- string：存在toString方法调用，null，undefined 返回字面量。

**Object对象**

- 数据和功能的集合

Object（）每个实力都具有的方法:

- constructor:保存创建当前对象的函数
- hasOwnProperty(propertyName):检查给定的属性(propertyName)在当前实例中是否存在，不算原型。
- isPertotypeOf(object):检测传入的对象(object),是否是当前对象的原型。
- propertyIsEnumberable(propertyName):检测给定的属性(propertyName)能否for in。
- toLocaleString():返回对象的字符串表示，与执行环境相关。
- toString():返回对象的字符串表示
- toValueOf():通常和toString()相同，字符串，数值或布尔值。

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
```

### 语句

- if
- do—while
- while
- for
- for-in
  都会被遍历，但是没有顺序。
- switch():case[使用的是全等操作，不会触发类型转换]
- with

大量使用with性能会下降，[此法欺骗](#词法欺骗-不推荐-会降低性能)

```js
var qs=location.search.substring(1)
var hostName=location.hostname
var url=location.href

with(location){
  var qs=search.substring(1)
  var hostName=hostname
  var url=href
}
```

### 基本类型和引用类型

基本类型：安值引用，基本类型不能添加属性

引用类型：

- 不能直接操作内存，所以安引用访问的（不严谨，复制是）
- 复制引用类型，复制的是堆内存指针。
- 参数只能按值传递

### 数组操作

### 正则匹配

### 请求响应

### 事件

### xml

# promise

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






















