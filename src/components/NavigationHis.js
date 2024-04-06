import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function NavigationHis() {
  const routeHis = useNavigate();
  const location = useLocation();
  console.log(location.pathname, " loca");
  const locArr = location.pathname.split("/");
  console.log(locArr);
  console.log(locArr);
  return (
    <div className="nav-his">
      {locArr.map((item, index) => {
        if (index == 1) return <Link to={""}>Home/</Link>;
        if (index != 0 && item.length) {
          return <Link to={item}>{item}/</Link>;
        }
      })}
    </div>
  );
}
