/**
 * Version = 2.0.0
 */
var arr = [1, 4, 2, 6, 10];
var max = arr[0];

for (var x = 1; x < arr.length; x++) {
  if (arr[x] > max) max = arr[x];
}

console.log(max); // 10
