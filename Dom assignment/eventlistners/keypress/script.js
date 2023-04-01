let inputt = document.querySelector("input");
let heading = document.querySelector("h1");

inputt.addEventListener("keypress", function (e) {
  heading.textContent = `You enter ${e.key}`;
});
