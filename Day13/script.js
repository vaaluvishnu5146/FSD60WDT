// const body = document.querySelector("body");
// const heading1 = document.createElement("h1");
// const para = document.createElement("p");
// heading1.innerText = "Hello all";
// heading1.setAttribute("class", "heading");
// heading1.setAttribute("id", "pageHeading");
// para.innerText = "Welcome to DOM Manupulation";
// para.setAttribute("class", "para");
// body.appendChild(heading1);
// body.appendChild(para);

// const divOne = document.getElementById("one");
// divOne.innerText = "Vijay";
// const divOne = document.getElementsByClassName("square");
// console.log(divOne);
// const allDivs = document.querySelectorAll("div.square2");
// console.log(allDivs);

// const heading = document.querySelector("h1");
// heading.innerText = "Vishnu Vardhan";

// const heading = document.getElementById("id1");

// setTimeout(() => {
//   heading.innerText = "Thalapathy";
// }, 5000);

// console.log(heading);

// function createSquare(color = "red") {
//   const square = document.createElement("div");
//   square.setAttribute(
//     "style",
//     `width: 100px; height: 100px; background: ${color};`
//   );
//   return square;
// }
// document.body.append(
//   ...[createSquare(), createSquare("green"), createSquare("yellow")]
// );
// const square = document.createElement("div");
// square.setAttribute("style", `width: 100px; height: 100px; background: red;`);
// square.innerText = "<p>Square Red</p>";
// document.body.appendChild(square);

var count = 10;

const interval = setInterval(() => {
  count = count - 1;
  console.log(count);
  if (count === 0) {
    clearInterval(interval);
    // Code goes here
  }
}, 1000);
