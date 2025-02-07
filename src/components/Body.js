import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import withPromotedLabel from "./WithPromotedLabel";

const Body = () => {
  const [listOfRestaurants, setResList] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  console.log("body rendered"); // this will print first then useEffect

  useEffect(() => {
    fetchData();
  }, []);

  console.log("listOfRestaurants", listOfRestaurants);

  //fetch data from api

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // console.log("json", json);
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants // optional chaining
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like ur Offline, pls chk ur internet</h1>;

  // simmer ui
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  console.log("PromotedRestaurantCard", PromotedRestaurantCard);

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-gray-300 p-2 rounded-b-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants"
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-2xl"
            onClick={(e) => {
              console.log("search clicked", searchText);
              console.log("listOfRestaurants", listOfRestaurants);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setResList(filteredList);
            }}
          >
            Fitler Top Restaurant
          </button>
        </div>

        <button
          className="clear-btn"
          onClick={() => setResList(listOfRestaurants)}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.sla.deliveryTime < 20 ? (
              <PromotedRestaurantCard resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
