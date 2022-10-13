import React from "react";
import "../css/book.css";

function Book({ book }) {
  const {
    title,
    authors,
    publisher,
    publishedDate,
    averageRating,
    imageLinks,
  } = book.volumeInfo;
  const defaultImage = "book-cover-placeholder.png";
  const thumbnail = imageLinks?.thumbnail || defaultImage;

  return (
    <div className="book-container">
      <div className="book-header">
        <p className="book-title">{title}</p>
        {averageRating && (
          <p className="book-rating">
            Rating : <span>{averageRating}</span>
          </p>
        )}
      </div>
      <div className="book-info">
        <div className="book-image">
          <img src={thumbnail} alt="book-image" />
        </div>
        <div className="book-desc">
          {authors && (
            <p>
              <span>Authors : </span>
              {authors.join(", ")}
            </p>
          )}
          {publisher && (
            <p>
              <span>Publisher : </span>
              {publisher}
            </p>
          )}
          {publishedDate && (
            <p>
              <span>Published on : </span>
              {publishedDate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book;
