import { LOGO_URL } from "../utils/contants";
import { useState, useEffect } from "react";

export const Header = () => {
  let btnName = "Login";

  console.log("btnName", btnName);

  [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName = "Logout";
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
