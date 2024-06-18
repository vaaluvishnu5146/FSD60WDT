const x = new Promise((resolve, reject) => {
  reject("Simply waste!");
});
console.log(x);
x.then((response) => {
  console.log("Response", response);
})
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("Kadham kadham");
  });
