import React from "react";
import { Link } from "react-router-dom";
import home1 from "../images/home-1.svg";
import home2 from "../images/home-2.svg";
import home3 from "../images/home-3.svg";
import home4 from "../images/home-4.svg";
import home5 from "../images/home-5.svg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-child home-child1">
        <div>
          <h1 style={{ lineHeight: "2", fontSize: "3rem" }}>
            Find the books you are looking for anywhere
          </h1>
          Search for books anywhere, you don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
          <br />
          <button className="search-btn">
            <Link to={"search"}>Search Now</Link>
          </button>
        </div>
        <div className="home-img">
          <img src={home1} alt="" width={"500px"} height={"500px"} />
        </div>
      </div>

      <div className="home-child">
        <div>
          <h2>READING PRACTICE IMPROVES VOCABULARY</h2>
          Whether for pleasure, study or information, reading practice improves
          vocabulary and streamlines reasoning and interpretation.
        </div>
        <div>
          <img src={home2} alt="" width={"300px"} height={"300px"} />
        </div>
      </div>

      <div className="home-child">
        <div>
          <img src={home3} alt="" width={"300px"} height={"300px"} />
        </div>

        <div>
          <h2>ADVANCING TECHNOLOGY</h2>
          With the advancement of technologies in the modern world, people are
          less and less interested in reading.
        </div>
      </div>
      <div className="home-child">
        <div>
          <h2>DYNAMIC READING</h2>
          Dynamic and relaxed reading is one of the best ways to acquire
          information. The ideal is to learn to read informative texts,
          scientific articles, textbooks, educational books, etc.
        </div>
        <div>
          <img src={home4} alt="" width={"300px"} height={"300px"} />
        </div>
      </div>

      {/* <div className="home-c2"></div>
      <div className="home-c3"></div>
      <div className="home-c4"></div>
      <div className="home-c5"></div>
      <div className="home-c6"></div> */}
    </div>
  );
}
