// GUESS THE OUTPUT
// console.log(fn1()); // return "I am function 1"
// function fn1() {
//   console.log('I am function 1');
// }

// GUESS THE OUTPUT
// console.log(fn2()); // Error: Cannot access 'fn2' before initialization
// var fn2 = function fn2() {
//   console.log('I am function 2');
// };

// GUESS THE OUTPUT
// console.log(a);
// console.log(b);
// var a; // gives undefined
// var a = 4; // gives undefined
// let b; // gives reference error ? Error: Cannot access 'b' before initialization?

// GUESS THE OUTPUT
// function fn3() {
//   console.log(a);
// }
// let a;
// fn3(); // gives undefined

// GUESS THE OUTPUT
// var a = 40;
// for(let i = 0; i < 1; i++) {
//   var a = 30;
// }
// console.log(a)

// GUESS THE OUTPUT
// let a = 40;
// for(let i = 0; i < 1; i++) {
//   let a = 30;
//   console.log(a);
// }
// console.log(a)

// GUESS THE OUTPUT
// var a = 10;
// var a = 30;
// console.log(a);
// let a = 10;
// let a = 30; // Error: Identifier 'a' has already been declared

// GUESS THE OUTPUT
// for (let i = 0; i < 1; i++) {
//   console.log(a); // Cannot use a before initialisation
//   let a = 10;
// }

// CURRY:
// function parent(anotherFunction) {
//   return function curried(...args) {
//     console.log(anotherFunction.length);
//     console.log(args);
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// const curry = parent(sum);
// curry();

// GUESS THE OUTPUT
// (function() {
//   console.log(1);
//   setTimeout(function(){console.log(2)}, 1000);
//   setTimeout(function(){console.log(3)}, 0);
//   console.log(4);
// })();

// GUESS THE OUTPUT
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// GUESS THE OUTPUT
// var a = {},
//   b = { key: 'b' },
//   c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a);
// console.log(a[b]);

// GUESS THE OUTPUT
// function f1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function f2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
// console.log(f1());
// console.log(f2());

// GUESS THE OUTPUT
// var arr1 = 'john'.split(''); // [j, o, h, n]
// var arr2 = arr1.reverse(); // [n, h, o, j]
// var arr3 = 'jones'.split(''); // [j, o, n, e, s]
// arr2.push(arr3); // arr2 = [n, h, o, j, [j, o, n, e, s]]
// console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
// console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));
// console.log(["n", "h", "o", "j", ["j", "o", "n", "e", "s"]].slice(-1));

// GUESS THE OUTPUT
// function bark() {
//   console.log('Woof!');
// }
// bark.animal = 'dog';
// console.log(bark);

// GUESS THE OUTPUT
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// const member = new Person('Lydia', 'Hallie');
// console.log(member.getFullName())
// console.log(Person); - ignore
// console.log(Person.getFullName.bind(member)()); - ignore

// HOW WILL YOU DESTRUCTURE so that "testcopy" has the value of "test"
// const obj = {
//   a: 'Aman',
//   b: {
//     c: 'Chris',
//     d: {
//       test: 'Eram',
//     },
//   },
// };
// const {
//   b: {
//     d: { test: testcopy },
//   },
// } = obj;
// const {
//   b: {
//     d: { test },
//   },
// } = obj;
// console.log(test);
// console.log(testcopy); // Output: "Eram"
