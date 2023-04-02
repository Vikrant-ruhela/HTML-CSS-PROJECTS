fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error: " + error.message;
    document.body.appendChild(errorMessage);
  });
