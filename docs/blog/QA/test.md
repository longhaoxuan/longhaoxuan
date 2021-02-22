# 测试的那些事儿

## 单元测试

- 目的:单元测试能够让开发者明确知道代码结果
- 原则:单一职责、接口抽象、层次分离
- 断言库:保证最小单元是否正常运行检测方法
  
- 测试风格:
  - 测试驱动开发(Test_driven Development,TDD)、TDD:关注所有的功能是否被实现(每一个功能都必须有对应一个测试用例，suite配合test利用assert('aa'===name))
  - (Behavior Driven Development ,BDD)行为驱动开发均是敏捷开发方法论 ，BDD关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面测试用例集 should describe配合it利用自然语言expect(1).toEqueal (fn())
- 单元测试框架
  - better-assert (TDD断言库)
  - should.js(BDD断言库)
  - expect.js(BDD断言库)
  - chai.js(TDD BDD双模)
  - Jasmine.js(BDD断言库)

### 单元测试运行流程

```md
   before -> beforeEach -> it -> after ->afterEach
   每一个测试用例通过describe进行设置
   1.before 单个测试用例 (it)开始前
   2.beforeEach 每一个测试用例开始前
   3.it定义测试用例，并利用断言库进行设置chai如:expect(x).to.eaqual(true)
   4 异步mocha 专业术语叫mock
```

### 单例测试，执行和覆盖率测试

```sh
  npm install karma                               // 单测
  npm install karma-cli
  npm install karma-jasmine                       //断言库
  npm install karma-chrome-launcher             //启动器
  npm install karma-mocha                       //自动话测试库
  npm install phantomjs                         //无头浏览器
  yarn add karma-coverage                       // 代码覆盖插件
```

## 服务测试

[supertest](https://github.com/visionmedia/supertest)
[koa](https://koa.bootcss.com/)

<!-- TODO：服务测试 -->

```sh
    npm install koa                               //
    npm insatll mocha                             //测试库
    npm insatll mochawesome                       //生成报表的
    npm insatll supertest                         // 
```

## e2e

端对端测试

- [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) 需要浏览器驱动

```js
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.baidu.com/');
    await driver.findElement(By.name('wb')).sendKeys('一个人的老大', Key.RETURN);
    await driver.wait(until.titleIs('一个人的老大_百度搜索'), 1000000);
  } finally {
    await driver.quit();
  }
})();
```

- puppeteer 新的无头浏览器
- [rize](https://www.npmjs.com/package/rize)  配合puppeteer使用，新势力

```js
const Rize = require('rize');
const rize = new Rize();

rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
  .assertSee('Node.jsxxx')
  .end(); // 别忘了调用 `end` 方法来退出浏览器！
```

- nightwatch 旧时代的皇者
- vue-cli： vue
- cypress： 仅支持chrome
- f2erest： 阿里旗下，win宏操作

## UI测试

- backstop

## 性能测试

## 安全测试

## 功能测试

-------------
这笔记记的人都傻了

## karmna

> Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server, and generates the test runner HTML file you probably already know from your favourite testing framework. So for testing purposes you can use pretty much anything you like. There are already plugins for most of the common testing frameworks

[karma](https://www.npmjs.com/package/karma) 不是测试框架，也不是断言库，只是一个服务启动器，可以用任意测试框架

1. mocha
2. Jasmine
3. QUint
4. Jspm

karma-coverage 代码测试覆盖率报告

## jasmine

[jasmine](https://jasmine.github.io/index.html) behavior-drven 行为驱动 

```js
// karma-jasmine
describe("描述", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
```

## mocha

> Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun
> Mocha 是一个功能丰富的js测试框架，可以运行在node和浏览器，可异步测试简单而有趣。

