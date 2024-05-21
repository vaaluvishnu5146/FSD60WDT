var arr = [1, 4, 2, 6, 10];
var max = -1;

for (var x = 0; x < arr.length; x++) {
  if (arr[x] > max) max = arr[x];
}

console.log(max); // 10
