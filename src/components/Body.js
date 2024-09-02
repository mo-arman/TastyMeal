import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//Create Body Functional component
const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurantCard, setFilteredRestaurantCard] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body rendered");
  useEffect(() => {
    fetchData();
    console.log("use Effect Called");
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5795818&lng=80.6555817&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantCard(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listofRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="input">
        <input
          className="ip"
          type="text"
          placeholder="search something"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchText);

            const filteredRestaurantCard = listofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurantCard(filteredRestaurantCard);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter The Top Rated Restaurant Logoc here
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantCard.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {/* <RestaurantCard resData={resList[12]} /> */}
      </div>
    </div>
  );
};

export default Body;
