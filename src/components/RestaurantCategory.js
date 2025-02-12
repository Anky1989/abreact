import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummyData }) => {
  //console.log("data", data);

  const handleClick = () => {
    console.log("clicked");

    if (showItem) {
      setShowIndex(null);
    } else {
      setShowIndex();
    }
  };
  return (
    <div>
      {/*Accordions for item category header */}
      <div className="w-6/12 mx-auto my-6 bg-green-200 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer text-2xl">⬇️</span>
        </div>
        {/*Accordions for item category body */}
        {/*by default accordion should be collapsed */}
        {showItem && <ItemList items={data.itemCards} dummyData={dummyData} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
