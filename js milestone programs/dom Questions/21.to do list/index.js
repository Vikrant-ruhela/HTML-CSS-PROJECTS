let addBtn = document.querySelector("input[value='Add']");
let tasks = document.querySelector(".tasks ul");
let value = document.querySelector("#main");

addBtn.addEventListener("click", function () {
  let element = document.createElement("li");
  element.textContent = value.value;
  tasks.appendChild(element);
  value.value = " ";
});
