const RestaurantCategory = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      {/*Accordions for item category header */}
      <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow p-4 flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {/*Accordions for item category body */}
    </div>
  );
};

export default RestaurantCategory;
