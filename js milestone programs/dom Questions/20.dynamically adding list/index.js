const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let counter = 0;

addBtn.addEventListener("click", () => {
  if (counter < items.length) {
    const listItem = document.createElement("li");
    listItem.innerText = items[counter];
    list.appendChild(listItem);
    counter++;
  } else {
    alert("All items have been added.");
  }
});
