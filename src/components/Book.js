import React from "react";
import books from "../images/books.svg";
import { Link } from "react-router-dom";
import "../styles/book.css";
export default function Book({ bookData, index }) {
  // console.log(bookData);
  const { volumeInfo, id } = bookData;
  const { title, subtitle, authors, publishedDate, imageLinks } = volumeInfo;
  const smallThumbnail = imageLinks?.smallThumbnail;
  // console.log(title);
  return (
    <div className="book">
      <img src={smallThumbnail || books} alt="" />
      <p>Title: {title}</p>
      <p>Authors: {authors}</p>
      <p>Published Date: {publishedDate}</p>
      <button style={{ margin: "5px" }}>
        <Link to={`${title.replace(/\s/g, "")}`} state={{ bookId: id }}>
          More
        </Link>
      </button>
    </div>
  );
}
