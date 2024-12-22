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

const RestaurantCard = (props) => {
  {console.log(props)}
  let {name,cuisines,avgRating,timer} = props;
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="re-logo"
      src="https://b.zmtcdn.com/data/pictures/3/21048793/1fcfb196ba04f2ec5d953c125bcaad44.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      />
      <h3> {name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} </h4>
      <h4> {timer}</h4>
    </div>
  )
}

const Body =()=> {
return (
  <div className="body">
    <div className="search" > Search</div>
    <div className="res-container">
      <RestaurantCard name="Kanika Kitchen" cuisines="punjabi" avgRating="4.5" timer="35 min"  />
    </div>
  </div>
)
};

const AppLayout = () =>{
  return <div className="app">
    <Header/>
    <Body/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);                                   