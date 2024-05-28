/**
 * Spread and Rest Operator
 */

// 1. Spread Operator (...)
// How to copy an array inside another array
var arr = [1, 2, 3, 4, 5];
var arrCopy = [];

for (let x = 0; x < arr.length; x++) {
  arrCopy.push(arr[x]);
}

console.log(arr, arrCopy);

// How to you spread operator to copy arr or obj inside another var
var arr = [1, 2, 3, 4, 5];
var arrCopy = [...arr];

console.log(arr, arrCopy);

// How to copy value of object inside another object
var data = {
  name: "Vishnu",
  email: "test@test.com",
};

var dataCopy = {
  ...data,
};

console.log(data, dataCopy);

// Rest operator in Array
// (...)
function dummy(...x) {
  console.log(a, x);
}

dummy(1, 2, 3, 4, 5);
