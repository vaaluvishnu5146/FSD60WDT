// V2
var arr = [1, 4, 0, 2, 6]; // 0
var min = arr[0];

for (var x = 1; x < arr.length; x++) {
  if (min > arr[x]) min = arr[x];
}

console.log(min); // 0
