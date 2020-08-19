// inside bookList we'll cycle through the data and output a single BookDetails component for each book.
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  // if there's length output a single BookDetails component for each book.
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    // else output this.
    <div className="empty">No books to Read. Hallo free time!</div>
  );
};

export default BookList;
