import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/header.css";
export default function Header() {
  // console.log(routeHis, " rou", window.history);
  return (
    <div className="header">
      <NavLink to={""} className={"nav1"}>
        BookSure
      </NavLink>
      <NavLink to={"about"} className={"nav2"}>
        About
      </NavLink>
      <NavLink to={"contact"} className={"nav3"}>
        Contact
      </NavLink>
    </div>
  );
}
