function logger(message) {
  console.log(message);
}

function isEven(a = 0, fn = () => {}) {
  if (a % 2 === 0) {
    fn(`Given ${a} value is Even`);
    return true;
  }
  fn(`Given ${a} value is Odd`);
  return false;
}

console.log(isEven(11, logger));

var scores = [1, 2, 3, 4, 6];
scores.forEach(function (element, index) {
  console.log(element, index);
});
console.log("What is subtract?", subtractNumbers);
// subtractNumbers(20, 10);
var subtractNumbers = (a, b) => a - b;
console.log(subtractNumbers(20, 10));

// ARROW FUNCTION
var greet = (message) => {
  console.log(message);
};

greet("Vishnu");

/* 
1. PRINT ODD NUMBERS IN THE ARRAY
IIFE 
*/
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (data = []) {
  data.forEach((element) => {
    if (element % 2 !== 0) {
      console.log(element);
    }
  });
  for (var x = 0; x < data.length; x++) {
    if (data[x] % 2 !== 0) {
      console.log(data[x]);
    }
  }
})(nums);

/* 
	ARROW FUNCTION
 */
var findAndPrintOdd = (data = []) => {
  for (var x = 0; x < data.length; x++) {
    if (data[x] % 2 !== 0) {
      console.log(data[x]);
    }
  }
};

findAndPrintOdd(nums);

var nama = "rajini";
console.log(nama);
function dummy() {
  var nama = "Kamalhasan";
  console.log(nama);
}
dummy();
console.log(nama);
