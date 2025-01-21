import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [listOfMenu, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
    console.log("RestaurantMenu rendered");
  }, []);

  const fetchMenu = async () => {
    console.log("fetchMenu called");
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=340856&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("json", json);
    setMenuList(json.data);
  };

  // this line of code will make sure that shimmer ui is displayed until the data is fetched
  // also listOfMenu.length === 0 will be true until the data is fetched
  if (listOfMenu.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    listOfMenu.cards[2]?.card?.card?.info;

  const { itemCards } =
    listOfMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <p>Menu</p>
      <ul>
        {itemCards.map((item) => {
          return (
            <li>
              {item.card.info.name} -{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
