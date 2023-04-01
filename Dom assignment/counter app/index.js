let incrementBtn=document.getElementById("increment-btn")
let decrementBtn=document.getElementById("decrement-btn")
let resetBtn=document.getElementById("reset-btn")
let value= document.getElementById("value")
let button=document.querySelector("button");



incrementBtn.addEventListener("click",function() {
        value.innerText++;
        incrementBtn.classList.add("pressed")
        setTimeout(function() {
            incrementBtn.classList.remove("pressed");
          }, 100);

})

decrementBtn.addEventListener("click",function () {
    value.innerText--;
    decrementBtn.classList.add("pressed")
    setTimeout(function() {
        decrementBtn.classList.remove("pressed");
      }, 100);
    if (value.innerText < 0) {
        alert("You cannot enter negative values");
        value.innerText=0;
      }
    
})

resetBtn.addEventListener("click",function () {
    value.innerText=0;
    resetBtn.classList.add("pressed")
    setTimeout(function() {
        resetBtn.classList.remove("pressed");
      }, 100);
})
 
 
