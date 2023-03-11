// Get the image element
const img = document.getElementById("img");

// Set the initial position of the image
let x = 0;
let y = 0;

// Define the movement distance
const distance = 10;

// Handle keydown event
document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 37: // Left arrow
      x -= distance;
      img.style.transform = `translate(${x}px, ${y}px)`;
      break;
    case 38: // Up arrow
      y -= distance;
      img.style.transform = `translate(${x}px, ${y}px)`;
      break;
    case 39: // Right arrow
      x += distance;
      img.style.transform = `translate(${x}px, ${y}px)`;
      break;
    case 40: // Down arrow
      y += distance;
      img.style.transform = `translate(${x}px, ${y}px)`;
      break;
  }
});
