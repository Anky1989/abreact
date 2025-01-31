import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const listOfMenu = useRestaurantMenu(resid);

  console.log("resID", resid);

  if (listOfMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    listOfMenu.cards[2]?.card?.card?.info;

  const { itemCards } =
    // listOfMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card   ?.card ||
    listOfMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <p>Menu</p>
      <ul>
        {itemCards &&
          itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
