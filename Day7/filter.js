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
