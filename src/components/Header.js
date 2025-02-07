import { LOGO_URL } from "../utils/contants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  console.log("Header render"); // complete component render when state changes

  return (
    <div className="header wd-100">
      <div className="logo-container wd-100">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items wd-100 bg-red">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log("btnName", btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
