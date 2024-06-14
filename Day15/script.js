/**
 * Task 1
const shapeDiv = document.createElement("div");
shapeDiv.setAttribute("style", "width: 100px; height: 100px; background: red;");
document.body.appendChild(shapeDiv);

// Attaching Event Listener
shapeDiv.addEventListener("mouseover", () => {
  shapeDiv.setAttribute(
    "style",
    "width: 100px; height: 100px;background: green;"
  );
});

shapeDiv.addEventListener("mouseleave", () => {
  shapeDiv.setAttribute(
    "style",
    "width: 100px; height: 100px;background: red;"
  );
});
 */

/**
 * Task 2
 * const email = window.prompt("Enter Email Address");
    const emailSpan = document.createElement("span");
    if (email) {
    emailSpan.innerText = email;
    document.body.appendChild(emailSpan);
    }
 */
/**
 * Task 3: Coordinates
 * const heading = document.createElement("h1");
    const coordinates = document.createElement("span");
    heading.innerText = "Iron man";
    document.body.appendChild(heading);
    document.body.appendChild(coordinates);
    heading.addEventListener("click", (event) => {
    console.log(event.x, event.y);
    coordinates.innerText = `X: ${event.x}, Y: ${event.y}`;
    });
 */
/**
 * Task 4: Text Count
 * const textarea = document.createElement("textarea");
textarea.minLength = 5;
textarea.maxLength = 10;
const para = document.createElement("p");
const span = document.createElement("span");
span.innerText = 0;
para.innerText = "Entered Text Length:";
para.appendChild(span);
textarea.setAttribute("placeholder", "Enter message");
document.body.append(...[textarea, para]);
// textarea.oninput = function (e) {
//   console.log(e);
// };
textarea.addEventListener("input", (e) => {
  console.log(e);
  span.innerText = e.target.value.length;
});
textarea.addEventListener("focus", (e) => {
  textarea.setAttribute("style", "outline: none; border: 2px solid green;");
});
textarea.addEventListener("blur", (e) => {
  textarea.setAttribute("style", "outline: 1px solid black; border: none;");
});
 */
/**
 * Form Validation task
 * const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");
const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("passwordMessage");

emailInput.addEventListener("input", (e) => {
  console.log(e);
  const { tooShort, tooLong, typeMismatch } = e.target.validity;
  console.log(tooShort, tooLong, typeMismatch);
  if (tooShort) {
    emailMessage.innerText = `Entered Email should be atleast ${e.target.minLength}`;
  } else if (typeMismatch) {
    emailMessage.innerText = `Entered value is not of type ${e.target.type}`;
  } else {
    emailMessage.innerText = "";
  }
});
passwordInput.addEventListener("input", (e) => {
  const { tooShort, typeMismatch } = e.target.validity;
  console.log(tooShort, typeMismatch);
  if (tooShort) {
    passwordMessage.innerText = `Entered input should be atleast ${e.target.minLength}`;
  } else if (typeMismatch) {
    passwordMessage.innerText = `Entered value is not of type ${e.target.type}`;
  } else {
    passwordMessage.innerText = "";
  }
});
 */
/**
 * Task 5: Full screen and Exit screen
const fullScreen = document.getElementById("full");
const exitScreen = document.getElementById("exit");
const square = document.getElementById("square");

fullScreen.addEventListener("click", (e) => {
  console.log(e);
  square.requestFullscreen();
});

exitScreen.addEventListener("click", (e) => {
  document.exitFullscreen();
});
*/

// document.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.code === "Space") {
//     alert("Thank you!");
//   } else {
//     alert("Invalid key pressed");
//   }
// });

const para = document.querySelector("p");
para.addEventListener("mouseover", (e) => {
  para.contentEditable = true;
});
