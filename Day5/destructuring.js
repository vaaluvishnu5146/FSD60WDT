/**
 * Array and Object de-structuring
 */
var [a, b, c] = ["Vishnu", "Vardhan", 26];
console.log(a, b, c);

var { firstName, lastName, ages } = {
  firstName: "Vishnu",
  lastName: "Vardhan",
  ages: 26,
};

console.log(firstName, lastName, ages);
