import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}minutes</h4>
      <h4>{avgRating}star</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
