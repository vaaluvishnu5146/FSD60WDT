// function getTodos() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => {
//       console.log(error);
//     });
//   console.log("Hello all");
// }

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const result = await response.json();
  console.log(result);
  console.log("Hello all");
}
getTodos();
