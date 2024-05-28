// VANILLA JAVASCRIPT
// ECMA SCRIPT (ES)
// ES5 AND ES6

// var vs let vs const
var nama;
let age;
const email = 10; // constant

console.log(nama, age, email);

nama = "Vishnu"; // Initialize
age = 26; // Initialize

console.log(nama, age);

nama = "Vishnu Vardhan"; // Re-Initialize
age = 27; // Re-Initialize

console.log(nama, age);

function dummy() {
  const nama = "Roshan";
  console.log(nama);
}
dummy();

console.log(nama);
