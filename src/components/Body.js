import React, { useEffect, useState } from "react";
import "../index.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7462474&lng=83.3309874&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return (
      <div className="restauarantcards-container flex justify-around flex-wrap">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }
  return (
    <div className=" bg-black ">
      <Carousel />

      <div className=" flex justify-evenly px-14 py-3 ">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-4 rounded-full"
          onClick={() => {
            fetchData();
          }}
        >
          Show all Restaurants
        </button>
        <div className="flex justify-start">
          <input
            type="text"
            placeholder="Search what you want...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="  border outline-none rounded-xl placeholder-zinc-700 px-4 py-2 "
          />
          <button
            class="bg-black border-2 rounded-lg text-white px-6 py-3  ml-8 text-base cursor-pointer transition"
            onClick={() => {
              const filteredSearchRestaurants = listOfRestaurants.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredSearchRestaurants);
              setSearchText("");
            }}
          >
            Submit
          </button>
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold h-12 py-2 px-4 rounded-full"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restauarantcards-container flex justify-around flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/menu/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
