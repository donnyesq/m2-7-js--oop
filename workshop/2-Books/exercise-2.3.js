// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    if (isRead === undefined || isRead === null) {
      this.read = false;
    } else {
      this.read = isRead;
    }
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);
  };

  getNumRead = () => {
    let num = 0;
    this.books.forEach(function (item) {
      item.read ? num++ : num;
    });
    return num;
  };

  getNumUnread = () => {
    let num = 0;
    this.books.forEach(function (item) {
      if (!item.read) {
        num++;
      }
    });
    return num;
  };
}

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
