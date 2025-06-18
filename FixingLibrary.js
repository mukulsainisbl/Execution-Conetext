const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    const { title, author, year } = book;

    if (!title || !author || !year) {
      console.error("Book information is incomplete.");
      return false;
    }

    if (this.findBookByTitle(title)) {
      console.warn("A book with this title already exists.");
      return false;
    }

    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
    return true;
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`Book "${removed.title}" removed successfully.`);
      return true;
    } else {
      console.error("Book not found.");
      return false;
    }
  },
};
