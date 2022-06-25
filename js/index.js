// console.log("A");

// setTimeout(() => {
//   console.log("b");
// }, 2000);

// setTimeout(() => {
//   console.log("c");
// }, 1000);

// setTimeout(() => {
//   console.log("e");
// }, 0);

// 2 loại bất đồng bộ : micro(promise) và macro (settimeout)
// Promise.resolve("hieu").then((res) => console.log(res));

// console.log("d");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("data");
//     reject("error");
//   }, 1000);
// });

// promise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function test1() {
//   console.log("a");

//   function test2() {
//     console.log("b");
//   }
//   test2();
// }

// function test3() {
//   console.log("c");
// }

// test1();
// test3();

// => a, d,e,c,b

// closure : function return về 1 function

// garbage collection

var a = 5;
a = 10;

function test() {
  let fullName = "hieu";
  return function () {
    console.log(fullName);
  };
}

[...arr];

const showName = test();
showName();
