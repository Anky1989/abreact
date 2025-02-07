import React from "react";
import RestaurantCard from "./RestaurantCard";

const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promotedLabel">promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default WithPromotedLabel;
