/**
 * Using forEach iterate over array and double the elements and create new array
 */
var scores = [1, 2, 3, 4, 5];
var scoresCopy = [];

scores.forEach((element) => {
  scoresCopy.push(element * 10);
});

/**
 * Using Map() to iterate over array and double the elements and create new array
 */
var scoresCopy = scores.map((element) => console.log(element * 10));
console.log(scoresCopy); // [ud, ud, ud, ud, ud]
