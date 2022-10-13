import React from "react";
import "../css/books.css";
import Book from "./Book";

function Books({ data }) {
  return (
    <div className="books-container">
      {data.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Books;
