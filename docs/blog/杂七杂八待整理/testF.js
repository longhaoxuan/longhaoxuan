// console.log(a);
// console.log(yideng)
// console.log(typeof yideng(a));
// var flag = true;
// if (!flag) {
// 	var a = 1;
// }
// if (flag) {
// 	function yideng(a) {
// 		yideng = a;
// 		console.log("yideng1");
// 	}
// } else {
// 	function yideng(a) {
// 		yideng = a;
// 		console.log("yideng2");
// 	}
// }




/*
function fn(){
	console.log(this.length);
}

var yideng = {
	length:5,
	method:function(){
		"use strict";
		fn();
		arguments[0]()
	}
}
const result = yideng.method.bind(null);
result(fn,1);
*/




// -function yideng(a,b,c){						//－运算符使语句变成表达式　立即释放
// 	console.log(this.length);
// 	console.log(this.callee.length);
// }
// function fn(d){
// 	arguments[0](10,20,30,40,50);
// }
// fn(yideng,10,20,30);


/**
  * eval
  * Function
  * with
  * try 
**/
// function test(){
// 	var a = "yideng";
// 	return function(){
// 		eval("");								//当前作用域会被存储　解决window.eval
// 	}
// }
// test()();


// var test="outter";
// function init() {
// 	var test = "inner"
// 	var fn = new Function("console.log(test)");
// 	fn();
// }
// init();


// Object.prototype.a = 'a';
// Function.prototype.a = 'a1';
// function Person(){};
// var yideng = new Person();					//被new变成了object
// console.log(Person.a);
// console.log(yideng.a);
// console.log(1..a);							//万物皆对象
// // console.log(1.a);							//报错
// console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
// console.log(Function.__proto__.constructor);

// TODO
// function Car(color){
// 	this.color = color;
// 	this.paice;
// 	function show() {		
// 	}
// }
// Car.Car.prototype.method_name = function(first_argument) {
// 	// body...
// };

// //ES6 就是ES5的语法糖
// class Car{

// }



// // ES5元编程： `eval` 、 `new Function()`
// ES6元编程： `Proxy` 、`Reflect` 、`Symbols`

// // Symbols.


// #　异步
// ajax
// 事件绑定
// setTimeout
// async




var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
	var pusher = {
		value: "item"+i
	},tmp;
	if (i !== 2) {
		tmp = []
		pusher.children = tmp
	}
	arr.push(pusher);
	arr = tmp;
}
console.log(s[0]);

