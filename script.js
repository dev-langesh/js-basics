let a = 1;

let arr = [1, 2, 3, 4, 5];

const obj = {
  name: "langesh",
  age: 19,
  arr: [2, 3, 4],

  class: {
    no: 302,
    block: "B",
  },
};

console.log(typeof a);

// loops

for (let i = 0; i < 3; i++) {
  console.log("hello");
}

for (let element in arr) {
  console.log(element);
}

for (let element of arr) {
  console.log(element);
}

let j = 0;

while (j < 2) {
  console.log("while");
  j++;
}

// functions
function fun() {
  console.log("have fun");
}

fun();

function welcome(name) {
  console.log(name);
}

welcome("langesh");

// arrow functions

let arrow = (a, b) => {
  console.log(a, b);
};

arrow(10, 20);

// anonymunction

let b;

(() => {
  console.log("anonymous");
})();

// callback function

function callback() {
  console.log("callback");
}

function caller(cb) {
  // some buildin features

  cb();
}

caller(callback);

// array functions

// foreach

function accessElement(a) {
  console.log(a);
}

arr.forEach(accessElement);

// map

function cb(a) {
  return a;
}

const arr1 = arr.map(cb);

console.log(arr1);
