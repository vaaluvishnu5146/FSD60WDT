async function prom1(num = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 == 0) {
        resolve("Even Number!!");
      } else {
        reject("Odd Number!!!");
      }
    }, 5000);
  });
}

// prom1()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

async function result() {
  try {
    const response = await prom1(9);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

result();

// async function dummy() {
//   return "Hello";
// }
// console.log(dummy());
