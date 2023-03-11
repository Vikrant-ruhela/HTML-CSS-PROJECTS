let books = [
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2018,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 2007,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 2015,
  },
];

let booksBefore2010 = books.filter(function (value, index, arr) {
  return arr[index].year < 2010;
});

for (let z = 0; z < booksBefore2010.length; z++) {
  booksBefore2010[z].author = booksBefore2010[z].author.toUpperCase();
}

console.log(booksBefore2010);
