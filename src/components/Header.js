import { LOGO_URL } from "../utils/contants";
import { useState, useEffect } from "react";

export const Header = () => {
  const btnName = "Logout";

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
            vslue={btnName}
            onClick={() => {
              {
                if (btnName === "Logout") {
                  btnName = "Login";
                } else {
                  btnName = "Logout";
                }
                console.log("btnName", btnName);
              }
            }}
          ></button>
        </ul>
      </div>
    </div>
  );
};
