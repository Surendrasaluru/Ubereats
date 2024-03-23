import React, { useEffect, useState } from "react";
import VegItemCard from "./VegItemCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RiceMart = () => {
  const [vegArray, setVegArray] = useState(null);
  useEffect(() => {
    fetchVegMenu();
  }, []);
  const fetchVegMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/category-listing?categoryName=Rice%2C+Atta+and+Dals&storeId=1381358&offset=0&filterName=&taxonomyType=All%20Listing"
    );
    const json = await data.json();
    //console.log(json);
    setVegArray(json?.data?.widgets[1]);
    vegArray && console.log(vegArray);
  };

  if (!vegArray) {
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
    <div className="bg-inherit">
      <Link to="/instamart">
        <button
          className="bg-green-500 hover:bg-black w-20 my-3  text-center rounded-md   text-white text-lg hover:text-white h-8
      font-semibold ml-[90%]"
        >
          Back &#8592;
        </button>
      </Link>
      <div className="text-white text-center bg-inherit flex flex-wrap justify-around">
        {vegArray &&
          vegArray?.data.map((item) => (
            <div>
              <VegItemCard item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RiceMart;
