let mail = document.querySelector("#mail");
let pass = document.querySelector("#pass");
let para = document.querySelector("div p");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  if (mail.value.includes("@") == false) {
    para.textContent = "envalid email";
    para.style.color = "red";
  } else if (pass.value.length < 8) {
    para.textContent = "envalid password length";
    para.style.color = "red";
  } else {
    para.textContent = "valid email and password";
    para.style.color = "green";
  }
});
