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
