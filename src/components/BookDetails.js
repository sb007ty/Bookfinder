import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import books from "../images/books.svg";
import "../styles/book.css";
export default function BookDetails() {
  const { title } = useParams();
  const { state } = useLocation();
  const { bookId } = state;
  const [bookDetails, setBookDetails] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchBookDetails() {
      const resp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      console.log(resp.data);
      console.log(resp.data.volumeInfo.smallThumbnail, " yo");
      setLoading(false);
      setBookDetails(resp.data);
    }
    fetchBookDetails();
  }, []);

  return (
    <div>
      {loading === true && <div>loading</div>}
      {loading === false && (
        <div className="book-details">
          <h2>Book Details-</h2>
          <img
            src={bookDetails?.volumeInfo?.imageLinks?.smallThumbnail || books}
            alt=""
          />
          <p>Title: {bookDetails.volumeInfo.title}</p>
          <p>Authors: {bookDetails.volumeInfo.authors}</p>
          <p>Published Date: {bookDetails.volumeInfo.publishedDate}</p>
          <p>Description: {bookDetails.volumeInfo.description}</p>
        </div>
      )}
    </div>
  );
}
