let heading=document.querySelector("#heading");
let btn=document.querySelector("#btn");

btn.addEventListener("click",function () {
    if (heading.textContent=="PW Skills") {
        heading.textContent="The most affordable learning platform";
    }else{
        heading.textContent="PW Skills";
    }
})