// Window Util function alert() takes message:String as input and shows
// browser native alert as output in the screen
// window.alert("Hey im a alert!");

// Window Util function prompt() takes message | value as input and returns
// string as output even if number is submitted
// var firstName = window.prompt("Enter First Name");
// console.log(firstName);

// if (!firstName) {
//   window.prompt("Enter First Name");
// }

// Window Util function confirm() shows confirm or cancel cta and returns
// boolean as output
// var isLogoutConfirm = window.confirm("Are you sure you want to logout?");
// console.log(isLogoutConfirm);

// // Window location object
// if (isLogoutConfirm) {
//   window.location.pathname = "/Day9/login.html";
// } else {
//   alert("Cancelled");
// }

// Tab: Application Storage
// Types of storage: sessionStorage, localStorage, cookies
// var firstName = prompt("Enter your first name");
// if (!firstName) {
//   alert("First Name is invalid");
// } else {
//   localStorage.setItem("Name", firstName);
// }
// console.log(localStorage.getItem("Name"));
// setTimeout(() => {
//   localStorage.removeItem("Name");
//   console.log(localStorage.getItem("Name"));
// }, 10000);

// var firstName = prompt("Enter your first name");
// if (!firstName) {
//   alert("First Name is invalid");
// } else {
//   sessionStorage.setItem("Name", firstName);
// }
// console.log(sessionStorage.getItem("Name"));
// setTimeout(() => {
//   sessionStorage.removeItem("Name");
//   console.log(sessionStorage.getItem("Name"));
// }, 10000);

// localStorage.setItem("Test", true);
// sessionStorage.setItem("Test", true);

// setTimeout and clearTimeout
// const timerId = setTimeout(() => {
//   //   alert("Arumugam");
//   clearTimeout(timerId);
// }, 5000);

// var sec = 0;
// const intervalId = setInterval(() => {
//   sec += 1;
//   console.log(sec);
//   if (sec === 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// const heading = document.querySelector("h1");

// heading.addEventListener("click", () => {
//   heading.style.color = "red";
// });
// window.addEventListener("click", (e) => {
//   console.log("Clicked");
// });

// const textInput = document.getElementById("email");
// const alertCta = document.getElementById("save");
// alertCta.addEventListener("click", (e) => {
//   alert("Hello");
//   //   localStorage.setItem("name", textInput.value);
// });
// emailInput.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });
// textInput.onchange = function (e) {
//   console.log(e);
// };

const div = document.getElementById("specialDiv");
div.addEventListener("mouseover", (e) => {
  div.style.background = "Yellow";
});
div.addEventListener("mouseleave", (e) => {
  div.style.background = "red";
});
