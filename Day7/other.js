/**
 * find() in array
 */
var points = [10, 2, 3, 10, 7, 9, 4];
console.log(points.find((element) => element === 8)); // undefined
console.log(
  points.find((element) => {
    console.log("ITERATING", element);
    return element === 10;
  })
); // 10
console.log(
  points.find((element) => {
    console.log("ITERATING", element);
    return element === 3;
  })
); // 3

/**
 * some()
 */
console.log(
  points.some((element) => {
    console.log(element);
    return element === 8;
  })
); // false
console.log(
  points.some((element) => {
    console.log(element);
    return element === 10;
  })
); // true
console.log(
  points.some((element) => {
    console.log(element);
    return element === 3;
  })
); // true

/**
 * findIndex()
 */
console.log(
  "INDEX ===>",
  points.findIndex((element) => element === 3)
); // 0 or -1

/**
 * findLastIndex()
 */
console.log(
  "LAST INDEX ===>",
  points.findLastIndex((element) => element === 10)
); // 3 or -1
