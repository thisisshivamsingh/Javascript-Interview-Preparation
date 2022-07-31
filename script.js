// Undefined //

// let x;
// console.log(x);
// console.log(typeof x);

// let x = 9;
// console.log(x);
// console.log(typeof x);

// let x = undefined;
// console.log(x);

// Null //

// let x = null;
// let y;
// console.log(x == y);
// console.log(x === y);

/////////////////////////////////////////////////

// Function Scope Vs Block Scope

// let x = 10;
// function a() {
//   x = x + 5;
// }
// function b() {
//   console.log(x);
// }
// a();
// b();

// console.log(y);
// var x;

// console.log(x);
// var x = 9;

// let x = 9;
// {
//   let x = 8;
//   console.log(x);
// }
// console.log(x);

// console.log(x);
// let x;

/////////////////////////////////////////////////

// What is automatic semicolon insertion

// console.log("Hi")
// console.log("Test");

// let a = 4 *
// 5
// console.log(a)

// function test() {
//   return
//   {
//     a: 5
//   }
// }
// const obj = test();
//  console.log(obj);

// function test() {
//   return {
//     a: 5,
//   }
// }
// const obj = test();
// console.log(obj);

/////////////////////////////////////////////////

// Difference between Rest and Spread Operator?

// Rest Operator

// function sum(...nums) {
//   console.log(nums);
// }
// sum(4, 5);
// sum(5, 6, 7, 8);

// function sum(...a, b) {}
// sum(4, 5);
// sum(5, 6, 7, 8);

// function sum(a, ...b) {}
// sum(4, 5);
// sum(5, 6, 7, 8);

// arguments

// function sum() {
//   console.log(arguments);
// }
// sum(4, 5);
// sum(5, 6, 7, 8);

// const sum = () => {
//   console.log(arguments);
// };
// sum(4, 5);
// sum(5, 6, 7, 8);

// Spread Operator

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1, 6, 7, 8];
// console.log(arr2);

// let arr1 = [4, 78, 90, 34, 459];
// console.log(Math.max(...arr1));

/////////////////////////////////////////////////

// When do you get Infinity or -Infinity as Output?

// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

// console.log(9e4);
// console.log(-9e4);

// console.log(9e400);
// console.log(-9e400);

// console.log(Number.MAX_VALUE * 2);
// console.log(-Number.MAX_VALUE * 2);

// console.log(1 / 0);

/////////////////////////////////////////////////

// When do you NaN as Output?

// let a = 5;
// let b = "value";
// // let b = 4;
// // console.log(a * b);
// console.log(NaN == NaN);
// if (!isNaN(a * b)) {
//   console.log("Valid");
// } else {
//   console.log("Invalid");
// }

// let a = 5;
// let b = "value";
// console.log(isFinite(a * b));
// console.log(isFinite(5 * 4));
// console.log(isFinite(Number.MAX_VALUE * 4));
// console.log(isFinite(Infinity));

/////////////////////////////////////////////////

// Explain must know points of arrow function

// function test() {
//   //
// }
// test();

// const test = function () {
//   //
// };
// test();

// const test = (a, b) => {
//   //
// };
// test();

// const sum = a => {
//     console.log(a);
// };
// sum(5);

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(5, 6));

// const sum = (a, b) => a + b;
// console.log(sum(5, 6));

// (function () {
//   console.log("IIFE");
// })();

// (() => {
//   console.log("IIAF");
// })();

// function test() {
//   console.log(this);
// }
// test();

// const test = () => {
//   console.log(this);
// };
// test();

// const obj = {
//   test() {
//     console.log(this);
//   },
// };
// obj.test();

// const obj = {
//   test: () => {
//     console.log(this);
//   },
// };
// obj.test();

// function test() {
//   console.log(arguments);
// }
// test(4, 6, 8);

// const test = () => {
//   console.log(arguments);
// };
// test(4, 6, 8);

// const test = (...a) => {
//   console.log(a);
// };
// test(4, 6, 8);

// const test = () => {
//   console.log("Hi");
// };
// const obj = new test();

/////////////////////////////////////////////////

// How does a "closure" work in Javascript?

// function outer() {
//   function inner() {
//     console.log("Inner called...");
//   }
//   inner();
// }
// outer();

// function outer() {
//   return function () {
//     console.log("Inner called...");
//   };
// }
// const cl = outer();
// cl();

// const outer = () => {
//   return () => {
//     console.log("Inner called...");
//   };
// };
// const cl = outer();
// cl();

// const addCounter = () => {
//   let counter = 0;
//   counter++;
//   return counter;
// };
// console.log(addCounter());
// console.log(addCounter());
// console.log(addCounter());

// const addCounter = () => {
//   let counter = 0;
//   counter++;
//   return counter;
// };
// console.log(addCounter());
// console.log(addCounter());
// console.log(addCounter());

// const addCounter = () => {
//   let counter = 0;
//   return () => {
//     counter++;
//     return counter;
//   };
// };
// const cl = addCounter();
// console.log(cl());
// console.log(cl());
// console.log(cl());

/////////////////////////////////////////////////

// How can sum(5)(6) return 11?

// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// // const cl = sum(5);
// // const ans = cl(6);
// // console.log(ans);

// const cl = sum(5)(6);
// const ans = cl(6);
// console.log(ans);

// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// const ans = sum(5)(6);
// console.log(ans);

// const sum = a => b => a + b;

// const ans = sum(5)(6);
// console.log(ans);

// const PriceCalc = (price) => {
//   return (dPer) => {
//     return price * dPer;
//   };
// };
// // getPrice();
// const discountAmount = PriceCalc(300);
// console.log(discountAmount(0.5));
// console.log(discountAmount(0.3));
// console.log(discountAmount(0.2));

/////////////////////////////////////////////////

// Iterables and Iterators

// let arr = [4, 5, 6, 7];
// for (let i of arr) {
//   console.log(i);
// }

// let arr = [4, 5, 6, 7];
// let itr = arr[Symbol.iterator]();
// // console.log(itr);
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// let obj = {
//   start: 10,
//   end: 15,
//   [Symbol.iterator]() {
//     return {
//       next() {
//         if (obj.start <= obj.end) {
//           return { value: obj.start++, done: false };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for (let i of obj) {
//   console.log(i);
// }

// let obj = {
//   start: 10,
//   end: 15,
//   [Symbol.iterator]() {
//     return this;
//   },
//   next() {
//     if (obj.start <= obj.end) {
//       return { value: obj.start++, done: false };
//     } else {
//       return { done: true };
//     }
//   },
// };

// for (let i of obj) {
//   console.log(i);
// }

/////////////////////////////////////////////////

// Generators

// const getFunction = function* () {
//   console.log("Hello");
//   yield "YieldValue";
//   console.log("World");
//   yield;
//   console.log("And Galaxy");
// };
// const gObj = getFunction();
// // console.log(gObj);
// const o = gObj.next();
// console.log(o);
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());

// for (let o of gObj) {
//   console.log(o);
// }

// const gObj = [...getFunction()];
// console.log(gObj);

// let arr = ["Apple", "Banana", "Oranges"];
// let lArr = arr.map((element) => {
//   return element.length;
// });
// console.log(lArr);

// let arr = [25, 16, 144, 36];
// let lArr = arr.map((elem) => Math.sqrt(elem));
// console.log(lArr);

// let products = [
//   { pCode: 1, pName: "Apple" },
//   { pCode: 2, pName: "Banana" },
//   { pCode: 3, pName: "Grapes" },
//   { pCode: 4, pName: "Oranges" },
// ];
// let pNames = products.map((elem) => elem.pName);
// console.log(pNames);

// let arr = [2, 3, 6, 5];
// let result = arr.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 10);
// console.log(result);

// const employees = [
//   { eNo: 1001, salary: 3000 },
//   { eNo: 1002, salary: 2200 },
//   { eNo: 1003, salary: 3400 },
//   { eNo: 1004, salary: 6000 },
// ];
// employees.sort(function (a, b) {
//   if (a.salary < b.salary) {
//     return -1;
//   }
//   if (a.salary > b.salary) {
//     return 1;
//   }
//   if (a.salary === b.salary) {
//     return 0;
//   }
// });
// console.log(employees);

// let str = 'I\'m not new to JS';
// console.log(str)

// const user = prompt("Enter a Alphabet");
// const vowels = ["a", "e", "i", "o", "u"];
// if (vowels.includes(user.toLowerCase())) {
//   alert(`${user} is a vowel`);
// } else {
//   alert(`${user} is a consonant`);
// }

// let ch;
// function getVal() {
//   ch = prompt("Enter character :");
//   ch = ch.toLowerCase();
//   if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//     console.log("Is vowel");
//   } else {
//     console.log("Is consonant");
//   }
// }
// getVal();

// const proto = Object.defineProperty({}, "pCode", {
//   writable: false,
//   configurable: true,
//   value: 2001,
// });
// const obj = Object.create(proto);
// obj.pCode = 3001;
// console.log(obj.pCode);

// class House {
//   constructor(nDoors, nWindow) {
//     this.nDoors = nDoors;
//     this.nWindow = nWindow;
//   }
//   showData() {
//     console.log(this.nDoors, this.nWindow);
//   }
// }
// const obj = new House(5, 10);
// const obj1 = new House(7, 12);
// obj.showData();
// obj1.showData();

// class Child extends String {
//   noc(str) {
//     console.log(str.length);
//   }
// }
// const obj = new Child("Test string");
// console.log(obj.toLowerCase());
// obj.noc("new string here");

// class Parent {
//   constructor(a) {
//     this.a = a;
//     console.log("Parent");
//   }
//   pMethod() {
//     console.log("P Method", this.a);
//   }
// }
// class Child extends Parent {}
// const obj = new Child(12);
// obj.pMethod();

// class Vehicle {
//   get model() {
//     console.log("Getter executed");
//     return "";
//   }
//   set model(v) {
//     console.log("Setter executed");
//   }
// }

// const obj = new Vehicle();
// obj.model = "SUV";
// console.log(obj.model);

// class Vehicle {
//   #_model = "";
//   get model() {
//     return this.#_model;
//   }
//   set model(v) {
//     if (v.length < 3) {
//       this.#_model = "M" + v;
//     } else {
//       this.#_model = v;
//     }
//   }
// }
// const obj = new Vehicle();
// obj.model = "UV";
// console.log(obj.model);
