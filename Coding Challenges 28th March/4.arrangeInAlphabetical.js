const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
];

function logTitlesInOrder(titles) {
  const sortedTitles = titles.sort();
  console.log(sortedTitles);
}

function getBookTitles(books, callback) {
  const titles = books.map((book) => book.title);
  callback(titles);
}

getBookTitles(books, logTitlesInOrder);
