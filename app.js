import React from "react";
import ReactDOM from "react-dom/client";

/*
-- head
  -- logo
  -- nav-items
--body
  --search
  --res-cards
--footer
  --copyright
  --links
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo-new/green-and-beige-food-truck-8849ld.png?nwm=1&nws=1&industry=cafe&txt_keyword=cafe"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
   </div>
  )
};

const AppLayout = () =>{
  return <div className="app">
    <Header/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);                                   