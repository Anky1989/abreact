import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const listOfMenu = useRestaurantMenu(resid);

  const [showIndex, setShowIndex] = useState(0);

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

  //console.log("itemCards",listOfMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const itemCategory =
    listOfMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("itemCategory", itemCategory);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold my-6 text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/*accordions for item category */}
      <div>
        {itemCategory.map((item, index) => {
          //controlled component
          return (
            <RestaurantCategory
              key={item?.card?.card?.title}
              data={item?.card?.card}
              showItem={index === showIndex ? true : false} // parent component should control the accordion
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
