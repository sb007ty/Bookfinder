import React, { useEffect, useRef, useState } from "react";
import BookList from "./BookList";
import books from "../images/books.svg";
import "../styles/search.css";

export default function SearchPage() {
  const [searchVal, setSearchVal] = useState("");
  const [search, setSearch] = useState(false);
  const searchText = useRef();
  useEffect(() => {
    console.log("search-rend1");
  }, []);
  return (
    <div className="search-page">
      <div>
        You don't need to know the name of the book, if you know the name of the
        author or publisher, just type, search and find
      </div>
      <div>
        <input type="text" ref={searchText} style={{ width: "550px" }} />
        <span
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => {
            console.log(searchText.current.value);
            setSearchVal(searchText.current.value);
            setSearch(true);
          }}
        >
          🔍
        </span>
        {search === false && (
          <figure>
            <img
              style={{ margin: "auto", display: "block" }}
              src={books}
              alt=""
              height={"300px"}
              width={"300px"}
            />
          </figure>
        )}
      </div>
      {search === true && <BookList searchBook={searchVal} />}
    </div>
  );
}
