import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  {
    console.log(props);
  }
  const { resdata } = props;

  const { name, cuisines, costForTwo, avgRating, sla } = resdata?.info; // chaining the data
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="re-logo"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
