import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  {
    // console.log(props);
  }
  const { resdata } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, costForTwo, avgRating, sla } = resdata?.info; // chaining the data
  return (
    <div
      className="m-4 p-4 w-[200px]  rounded-b-lg "
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg"
        alt="re-logo"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
