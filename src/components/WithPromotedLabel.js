import React from "react";
import RestaurantCard from "./RestaurantCard";

const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black py-2 px-2 m-2 absolute text-amber-50">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default WithPromotedLabel;
