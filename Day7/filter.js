/**
 * Using forEach()
 */
var arr = ["a", 1, "b", 10, true, "Hello"];
var filteredArray = [];

arr.forEach((element) => {
  if (typeof element === "string") {
    filteredArray.push(element);
  }
});

console.log("FILTERED ARRAY ===>", filteredArray);

/**
 * Using filter()
 */
var arr = ["a", 1, "b", 10, true, "Hello", false];
var filteredArray = arr.filter((element) => typeof element === "boolean");
console.log(filteredArray);

var toys = ["r", "r", "r", "r", "b", "b", "b", "y", "y", "y"];
var filteredToys = toys.filter((element) => element === "b" || element === "y");
console.log(filteredToys);

var input = ["a", 1, "b", 10, true, "Hello", 10, 10];
var filtered = input.filter(
  (element) => typeof element === "number" && element === 10
);
console.log(filtered);
