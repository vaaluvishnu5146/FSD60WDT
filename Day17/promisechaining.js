const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 Error");
  }, 3000);
});
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 Error");
  }, 5000);
});
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 7000);
});

Promise.all([prom1, prom2, prom3])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
