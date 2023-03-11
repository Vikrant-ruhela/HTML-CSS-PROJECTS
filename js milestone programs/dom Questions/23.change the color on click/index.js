let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

let color = ["#808080", "red", "green", "blue", "purple", "orange", "voilet"];

btn.addEventListener("click", function () {
  document.body.style.backgroundColor =
    color[Math.floor(Math.random() * color.length + 1)];
});
