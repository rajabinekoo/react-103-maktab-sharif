// document
//   .getElementById("hoverDiv")
//   .addEventListener("mouseover", () => console.log("ok"));

// document
//   .getElementById("hoverDiv")
//   .addEventListener("mouseenter", () => console.log("enter"));

// document
//   .getElementById("hoverDiv")
//   .addEventListener("mouseleave", () => console.log("leave"));

// document
//   .getElementById("hoverDiv")
//   .addEventListener("mouseout", () => console.log("out"));

// ========================================================================

// const hoverDiv = document.getElementById("hoverDiv");

// hoverDiv.addEventListener(
//   "mouseenter",
//   () =>
//     (hoverDiv.innerHTML = `<p class="text-white text-2xl">You can do that again!</p>`)
// );

// hoverDiv.addEventListener(
//   "mouseleave",
//   () => (hoverDiv.innerHTML = `<p class="text-white text-2xl">Hover me</p>`)
// );

// ========================================================================

// let abortSignalController = new AbortController();

// const clickDiv = document.getElementById("clickDiv");
// let count = 0;

// clickDiv.addEventListener(
//   "click",
//   () => {
//     count++;
//     if (count === 3) abortSignalController.abort();
//     clickDiv.innerHTML = `<p class="text-white text-2xl">Clicked</p>`;
//     console.log("clicked");
//   },
//   { signal: abortSignalController.signal }
// );

// ========================================================================

// const usernameInput = document.getElementById("username-input");

// usernameInput.addEventListener("focus", () => {
//   console.log("focus");
// });

// usernameInput.addEventListener("blur", () => {
//   if (usernameInput.value === "ali") alert("Invalid username");
// });

// usernameInput.addEventListener("keydown", () => {
//   console.log("keydown", usernameInput.value);
// });

// usernameInput.addEventListener("keypress", () => {
//   console.log("keypress", usernameInput.value);
// });

// usernameInput.addEventListener("keyup", () => {
//   console.log("keyup", usernameInput.value);
// });

// usernameInput.addEventListener("change", () => {
//   if (usernameInput.value === "ali") return alert("Invalid username");
//   console.log("change", usernameInput.value);
// });

// usernameInput.addEventListener("input", () => {
//   if (usernameInput.value === "ali") return alert("Invalid username");
//   console.log("input", usernameInput.value);
// });

// const submitForm = document.getElementById("submitForm");

// submitForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("submit", event);
// });

// ========================================================================
// propagations: bubbling, capturing

// const submitForm = document.getElementById("submitForm");
// const submitButton = document.getElementById("submitButton");
// const usernameInput = document.getElementById("username-input");
// const container = document.getElementById("container");

// submitForm.addEventListener(
//   "click",
//   (e) => {
//     e.preventDefault();
//     console.log("submitForm");
//     //   console.log(e.target);
//   },
//   { capture: true }
// );

// submitButton.addEventListener(
//   "click",
//   () => {
//     console.log("submitButton");
//   },
//   { capture: true }
// );

// usernameInput.addEventListener(
//   "input",
//   (e) => {
//     console.log(e);
//   },
//   { capture: true }
// );

// container.addEventListener(
//   "click",
//   () => {
//     console.log("container");
//   },
//   { capture: true }
// );

// ========================================================================
// Delegation

const menu = document.getElementById("menu");

menu.addEventListener("click", (event) => {
  switch (event.target.dataset.action) {
    case "search":
      alert("Searching...");
      break;
    case "save":
      alert("Saving...");
      break;
    case "load":
      alert("Loading...");
      break;
    default:
      break;
  }
});
