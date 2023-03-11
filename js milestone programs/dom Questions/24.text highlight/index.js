var paragraph = document.getElementById("phara");
var words = paragraph.textContent.split(" ");
for (var i = 0; i < words.length; i++) {
  if (words[i].length > 8) {
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.textContent = words[i];
    words[i] = span.outerHTML;
  }
}
paragraph.innerHTML = words.join(" ");
