import { CDN_URL } from "../utils/contants";

const ItemList = ({ items, dummyData }) => {
  //console.log("items", items);
  console.log("dummyData", dummyData);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 bg-green-100 shadow-lg  border-b-2 botder-green-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-black text-white p-2 rounded-lg shadow-2xl m-auto">
                + Add
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-40" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
