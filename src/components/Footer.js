import React from "react";
import { NavLink } from "react-router-dom";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import "../styles/footer.css";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="container-footer">
      {" "}
      <div className="footer">
        <p className="f1">BookSure</p>
        <p className="f2">
          © Copyright {year} <a href="https://github.com/sb007ty">Spandan</a>.
          All rights reserved.
        </p>

        <a href="https://github.com/sb007ty" className="f3">
          <img src={linkedin} height={"30px"} width={"30px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/spandan-banerjee-1119b5172/"
          className="f4"
        >
          <img src={github} height={"30px"} width={"30px"} />
        </a>
      </div>
    </div>
  );
}
