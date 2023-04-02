fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function f(response) {
    return response.json();
  })
  .then(function ff(value) {
    console.log(value);
  });
