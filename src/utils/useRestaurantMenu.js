import { useEffect, useState } from "react";
import { MENU_API } from "../utils/contants";

const useRestaurantMenu = (resid) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("fetchMenu called");
    const data = await fetch(MENU_API + resid);
    const json = await data.json();

    //console.log("json", json);

    const MenuItem =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) =>
          item.card.card ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log("MenuItem", MenuItem);
    // console.log("json", json);
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
