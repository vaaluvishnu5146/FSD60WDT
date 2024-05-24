var arr = [1, 2, 3, 4, 5];

// 1. For Loop:
// for (var x = 0; x < arr.length; x += 2) {
//   console.log(arr[x]);
// }

// 2. forEach
// var sum = 0;
// arr.forEach(function (element, index) {
//   sum = sum + element;
// });
// console.log(sum);

// 3. for...in
// var data = {
//   name: "Vishnu",
//   age: 25,
// };

// for (var x in data) {
//   console.log(data[x]);
// }

// 4. for...of
// for (var x of arr) {
//   console.log(x);
// }

// Object
var data = {
  name: "Vishnu",
  age: 25,
  address: {
    addressOne: "",
  },
};

// 1. forin
// 2. Object.keys(), Object.values()
// console.log(data); // {}
// console.log(Object.keys(data)); // ['name', 'age']
// console.log(Object.values(data)); // ['Vishnu', 25]
console.log(Object.entries(data));
