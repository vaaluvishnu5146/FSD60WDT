/**
 * Using forEach calculate totalPoints
 */
var points = [10, 2, 3, 10, 7, 9, 4];
var sum = 0;
points.forEach((element) => {
  sum = sum + element;
});
console.log(sum);

/**
 * Using reducer() calculate totalPoints
 */
var points = [10, 2, 3, 10, 7, 9, 4];
var totalPoints = points.reduce((prev, curr) => prev + curr);
console.log(totalPoints);
