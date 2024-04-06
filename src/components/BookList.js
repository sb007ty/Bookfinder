import React, { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";
import "../styles/book.css";

export default function BookList({ searchBook }) {
  console.log("booklist");
  const [books, setBooks] = useState([]);
  const [noBook, setNoBook] = useState(false);
  const [bookLoading, setBookLoading] = useState(true);
  useEffect(() => {
    async function fetchBooks() {
      const resp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&maxResults=12`
      );
      console.log(resp);
      setBooks(resp.data.items);
      if (resp.data.items.length === 0) setNoBook(true);
      else {
        setNoBook(false);
        setBookLoading(false);
      }
    }
    if (searchBook.replace(/\s/g, "").length) fetchBooks();
    else {
      setNoBook(true);
      setBookLoading(false);
    }
  }, [searchBook]);
  return (
    <div className="book-list">
      {bookLoading === true && <div>Loading 🥰</div>}
      {noBook === false && (
        <div className="book-list-items">
          {books.map((item, index) => {
            return <Book bookData={item} key={item.id} index={index} />;
          })}
        </div>
      )}
      {noBook === true && <div>No such book</div>}
    </div>
  );
}
