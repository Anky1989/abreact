import { LOGO_URL } from "../utils/contants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Header = () => {
  [btnName, setBtnName] = useState("Login");

  console.log("Header render"); // complete component render when state changes

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
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
