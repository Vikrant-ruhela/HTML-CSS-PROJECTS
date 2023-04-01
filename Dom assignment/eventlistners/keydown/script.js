let heading = document.querySelector("h1");

document.addEventListener("keydown", function (e) {
  heading.textContent = `${e.key} is keydown`;
  heading.style.color = "red";
});
document.addEventListener("keyup", function (e) {
  heading.textContent = `${e.key} is keyup`;
  heading.style.color = "green";
});
