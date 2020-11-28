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

### 自动化单元测试

```sh
 karma 自动化runner 继承PhantomJs 无刷新
 npm install -g karma
 npm install karma-cli --save-dev
 npm install karma-chrome-launcher --save-dev
 npm install karma-phantomjs-launcher --save-dev
 npm install karma-mocha --save-dev                //自动化测试库
 npm install karma-chai
```

### 单例测试，执行和覆盖率测试

```sh
        npm install karma
        npm install karma-cli
        npm install phantomjs                         //断言库
        npm install karma-chrome-launcher             //启动器
        npm install karma-mocha                       //自动话测试库
        npm install phantomjs                         //无界面浏览器
```

### 服务测试

[supertest](https://github.com/visionmedia/supertest)
[koa](https://koa.bootcss.com/)

```sh
    npm install koa                               //
    npm insatll mocha                             //测试库
    npm insatll mochawesome                       //生成报表的
    npm insatll supertest                         //
```

### e2e

## 性能测试

## 安全测试

## 功能测试
