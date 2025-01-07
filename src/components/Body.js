import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  [listOfRestaurants, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //fetch data from api

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log("json", json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants // optional chaining
    );
  };

  // simmer ui
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  console.log("body rendered"); // this will print first then useEffect

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setResList(filteredList);
          }}
        >
          Fitler Top Restaurant
        </button>
        <button
          className="clear-btn"
          onClick={() => setResList(listOfRestaurants)}
        >
          Clear Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
